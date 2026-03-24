const { setGlobalOptions } = require('firebase-functions/v2');
const { onDocumentCreated, onDocumentUpdated } = require('firebase-functions/v2/firestore');
const { onCall, onRequest, HttpsError } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
setGlobalOptions({ maxInstances: 10 });

const SHIPPING_COSTS = {
  home: 2800,
  locker: 1600
};

function getBarionApiBase() {
  if (process.env.BARION_API_BASE) return process.env.BARION_API_BASE;
  return process.env.BARION_ENV === 'live' ? 'https://api.barion.com' : 'https://api.test.barion.com';
}

function mapOrderItems(items) {
  if (!Array.isArray(items)) return [];

  return items
    .map((item) => ({
      id: String(item?.id || ''),
      name: String(item?.name || '').trim(),
      description: String(item?.description || '').trim(),
      quantity: Number(item?.quantity || 0),
      price: Number(item?.price || 0),
      imageUrl: item?.imageUrl || null
    }))
    .filter((item) => item.name && Number.isFinite(item.quantity) && item.quantity > 0 && Number.isFinite(item.price) && item.price >= 0);
}

function buildSanitizedOrder(inputOrder, uid) {
  const items = mapOrderItems(inputOrder?.items || []);
  if (!items.length) {
    throw new HttpsError('invalid-argument', 'A kosár üres.');
  }

  const shippingMethod = inputOrder?.shipping?.method === 'locker' ? 'locker' : 'home';
  const shippingCost = SHIPPING_COSTS[shippingMethod];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const requestedDiscountPercent = Number(inputOrder?.pricing?.discountPercent || 0);
  const discountPercent = uid && requestedDiscountPercent === 5 ? 5 : 0;
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const totalWithoutShipping = Math.max(subtotal - discountAmount, 0);
  const total = totalWithoutShipping + shippingCost;

  const customer = {
    fullName: String(inputOrder?.customer?.fullName || '').trim(),
    email: String(inputOrder?.customer?.email || '').trim(),
    phone: String(inputOrder?.customer?.phone || '').trim()
  };

  const billing = {
    fullName: String(inputOrder?.billing?.fullName || '').trim(),
    zip: String(inputOrder?.billing?.zip || '').trim(),
    city: String(inputOrder?.billing?.city || '').trim(),
    address: String(inputOrder?.billing?.address || '').trim(),
    taxNumber: inputOrder?.billing?.taxNumber ? String(inputOrder?.billing?.taxNumber).trim() : null
  };

  if (!customer.fullName || !customer.email || !customer.phone) {
    throw new HttpsError('invalid-argument', 'Hiányzó vásárlói adatok.');
  }

  if (!billing.fullName || !billing.zip || !billing.city || !billing.address) {
    throw new HttpsError('invalid-argument', 'Hiányzó számlázási adatok.');
  }

  if (shippingMethod === 'home') {
    const zip = String(inputOrder?.shippingAddress?.zip || '').trim();
    const city = String(inputOrder?.shippingAddress?.city || '').trim();
    const address = String(inputOrder?.shippingAddress?.address || '').trim();
    if (!zip || !city || !address) {
      throw new HttpsError('invalid-argument', 'Hiányzó szállítási cím.');
    }
  } else {
    const lockerPoint = String(inputOrder?.shipping?.lockerPoint || '').trim();
    const lockerPointId = String(inputOrder?.shipping?.lockerPointId || '').trim();
    if (!lockerPoint || !lockerPointId) {
      throw new HttpsError('invalid-argument', 'Kérlek válassz Foxpost automatát.');
    }
  }

  return {
    uid: uid || null,
    customer,
    shippingAddress: {
      zip: shippingMethod === 'home' ? String(inputOrder?.shippingAddress?.zip || '').trim() : null,
      city: shippingMethod === 'home' ? String(inputOrder?.shippingAddress?.city || '').trim() : null,
      address: shippingMethod === 'home' ? String(inputOrder?.shippingAddress?.address || '').trim() : null
    },
    billing,
    shipping: {
      provider: 'foxpost',
      method: shippingMethod,
      cost: shippingCost,
      lockerPoint: shippingMethod === 'locker' ? String(inputOrder?.shipping?.lockerPoint || '').trim() : null,
      lockerPointId: shippingMethod === 'locker' ? String(inputOrder?.shipping?.lockerPointId || '').trim() : null
    },
    items,
    pricing: {
      subtotal,
      discountPercent,
      discountAmount,
      totalWithoutShipping,
      shippingCost,
      total
    },
    total,
    legal: {
      termsAcceptedAt: String(inputOrder?.legal?.termsAcceptedAt || new Date().toISOString()),
      privacyAcceptedAt: String(inputOrder?.legal?.privacyAcceptedAt || new Date().toISOString())
    }
  };
}

function makeOrderSummary(orderId, order) {
  const customerName = order?.customer?.fullName || 'Vásárló';
  const shippingMethod = order?.shipping?.method === 'locker' ? 'Foxpost csomagautomata' : 'Foxpost házhozszállítás';
  const shippingPoint = order?.shipping?.lockerPoint || '';
  const total = order?.pricing?.total ?? order?.total ?? 0;
  const billingName = order?.billing?.fullName || '';
  const billingAddress = [order?.billing?.zip, order?.billing?.city, order?.billing?.address].filter(Boolean).join(' ');

  const itemLines = (order?.items || [])
    .map((item) => `- ${item.name} × ${item.quantity} db (${item.price} Ft/db)`)
    .join('\n');

  const lines = [
    `Kedves ${customerName}!`,
    '',
    'Köszönjük a rendelésedet, sikeresen rögzítettük.',
    '',
    'Rendelési adatok',
    `- Rendelés azonosító: ${orderId}`,
    `- Végösszeg: ${total} Ft`,
    `- Szállítás: ${shippingMethod}`,
    shippingPoint ? `- Átvételi pont: ${shippingPoint}` : '',
    '',
    'Rendelt termékek',
    itemLines || '-',
    '',
    'Számlázási adatok',
    billingName ? `- Név: ${billingName}` : '',
    billingAddress ? `- Cím: ${billingAddress}` : '',
    '',
    'Hamarosan jelentkezünk a további részletekkel.',
    '',
    'S420 Laser Engraving'
  ].filter(Boolean);

  const htmlItemLines = (order?.items || [])
    .map((item) => `<li>${item.name} × ${item.quantity} db (${item.price} Ft/db)</li>`)
    .join('');

  return {
    subject: `Rendelés visszaigazolás #${orderId}`,
    text: lines.join('\n'),
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.55;color:#111827;">
        <p>Kedves ${customerName}!</p>
        <p>Köszönjük a rendelésedet, sikeresen rögzítettük.</p>

        <h3 style="margin:18px 0 8px;">Rendelési adatok</h3>
        <ul style="margin:0 0 12px 18px;padding:0;">
          <li>Rendelés azonosító: <strong>${orderId}</strong></li>
          <li>Végösszeg: <strong>${total} Ft</strong></li>
          <li>Szállítás: <strong>${shippingMethod}</strong></li>
          ${shippingPoint ? `<li>Átvételi pont: <strong>${shippingPoint}</strong></li>` : ''}
        </ul>

        <h3 style="margin:18px 0 8px;">Rendelt termékek</h3>
        <ul style="margin:0 0 12px 18px;padding:0;">
          ${htmlItemLines || '<li>-</li>'}
        </ul>

        <h3 style="margin:18px 0 8px;">Számlázási adatok</h3>
        <ul style="margin:0 0 12px 18px;padding:0;">
          ${billingName ? `<li>Név: <strong>${billingName}</strong></li>` : ''}
          ${billingAddress ? `<li>Cím: <strong>${billingAddress}</strong></li>` : ''}
        </ul>

        <p>Hamarosan jelentkezünk a további részletekkel.</p>
        <p><strong>S420 Laser Engraving</strong></p>
      </div>
    `
  };
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = String(process.env.SMTP_PASS || '').replace(/\s+/g, '');

  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });
}

async function sendViaWebhook(orderId, order, emailPayload) {
  const webhookUrl = process.env.ORDER_EMAIL_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'order_confirmation_email',
      orderId,
      to: order.customer.email,
      subject: emailPayload.subject,
      text: emailPayload.text
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Webhook email hiba (${response.status}): ${body}`);
  }

  return true;
}

async function markEmailStatus(orderId, status, extra = {}) {
  await admin.firestore().collection('orders').doc(orderId).set(
    {
      email: {
        status,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        ...extra
      }
    },
    { merge: true }
  );
}

async function sendOrderEmail(orderId, order) {
  if (!order || !order?.customer?.email) {
    logger.warn('Nincs rendelési adat vagy vevői email.', { orderId });
    await markEmailStatus(orderId, 'skipped', { reason: 'missing_order_or_email' });
    return;
  }

  const emailPayload = makeOrderSummary(orderId, order);
  const transporter = createTransporter();

  if (transporter) {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: order.customer.email,
      subject: emailPayload.subject,
      text: emailPayload.text,
      html: emailPayload.html
    });
    logger.info('Rendelés email kiküldve SMTP-n.', { orderId });
    await markEmailStatus(orderId, 'sent', { channel: 'smtp' });
    return;
  }

  const sentViaWebhook = await sendViaWebhook(orderId, order, emailPayload);
  if (sentViaWebhook) {
    logger.info('Rendelés email kiküldve webhookon.', { orderId });
    await markEmailStatus(orderId, 'sent', { channel: 'webhook' });
    return;
  }

  logger.warn('Nincs email csatorna beállítva (SMTP/Webhook).', { orderId });
  await markEmailStatus(orderId, 'skipped', { reason: 'missing_transport' });
}

exports.createBarionPayment = onCall({ region: 'us-central1' }, async (request) => {
  const posKey = process.env.BARION_POS_KEY;
  const callbackUrl = process.env.BARION_CALLBACK_URL;
  const fallbackRedirectUrl = process.env.BARION_REDIRECT_URL;
  const payee = process.env.BARION_PAYEE || null;

  if (!posKey || !callbackUrl) {
    throw new HttpsError('failed-precondition', 'A Barion nincs konfigurálva (BARION_POS_KEY / BARION_CALLBACK_URL).');
  }

  const incomingOrder = request.data?.order;
  const redirectUrl = request.data?.returnUrl || fallbackRedirectUrl;
  if (!redirectUrl) {
    throw new HttpsError('failed-precondition', 'Hiányzik a Barion visszatérési URL (BARION_REDIRECT_URL).');
  }

  const orderPayload = buildSanitizedOrder(incomingOrder, request.auth?.uid || null);

  const orderRef = await admin.firestore().collection('orders').add({
    ...orderPayload,
    status: 'pending_payment',
    payment: {
      method: 'barion_card',
      provider: 'barion',
      status: 'pending'
    },
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  });

  const barionStartPayload = {
    POSKey: posKey,
    PaymentType: 'Immediate',
    GuestCheckOut: true,
    FundingSources: ['All'],
    Locale: 'hu-HU',
    Currency: 'HUF',
    PaymentRequestId: orderRef.id,
    RedirectUrl: redirectUrl,
    CallbackUrl: callbackUrl,
    Transactions: [
      {
        POSTransactionId: `${orderRef.id}-1`,
        Total: orderPayload.pricing.total,
        Comment: `S420 rendelés #${orderRef.id}`,
        ...(payee ? { Payee: payee } : {}),
        Items: orderPayload.items.map((item) => ({
          Name: item.name.slice(0, 250),
          Description: (item.description || item.name).slice(0, 500),
          Quantity: item.quantity,
          Unit: 'db',
          UnitPrice: item.price,
          ItemTotal: item.price * item.quantity
        }))
      }
    ]
  };

  try {
    const startResponse = await fetch(`${getBarionApiBase()}/v2/Payment/Start`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(barionStartPayload)
    });

    const startResult = await startResponse.json();
    if (!startResponse.ok || (Array.isArray(startResult?.Errors) && startResult.Errors.length > 0) || !startResult?.GatewayUrl) {
      const message = startResult?.Errors?.[0]?.Description || startResult?.Errors?.[0]?.Title || 'Barion fizetés indítása sikertelen.';
      await orderRef.set(
        {
          status: 'payment_failed',
          payment: {
            method: 'barion_card',
            provider: 'barion',
            status: 'start_failed',
            error: message
          },
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      );
      throw new HttpsError('internal', message);
    }

    await orderRef.set(
      {
        payment: {
          method: 'barion_card',
          provider: 'barion',
          status: 'pending',
          paymentId: startResult.PaymentId || null,
          paymentRequestId: orderRef.id,
          gatewayUrl: startResult.GatewayUrl
        },
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      },
      { merge: true }
    );

    return {
      orderId: orderRef.id,
      paymentId: startResult.PaymentId,
      gatewayUrl: startResult.GatewayUrl
    };
  } catch (error) {
    logger.error('Barion fizetés indítása hiba.', { error: error.message, orderId: orderRef.id });
    if (error instanceof HttpsError) throw error;
    throw new HttpsError('internal', 'Barion fizetés indítása sikertelen.');
  }
});

exports.barionCallback = onRequest({ region: 'us-central1' }, async (req, res) => {
  const posKey = process.env.BARION_POS_KEY;
  if (!posKey) {
    res.status(500).send('BARION_POS_KEY hiányzik.');
    return;
  }

  const paymentId = req.body?.PaymentId || req.query?.paymentId || req.query?.PaymentId;
  if (!paymentId) {
    res.status(400).send('PaymentId hiányzik.');
    return;
  }

  try {
    const stateResponse = await fetch(`${getBarionApiBase()}/v2/Payment/GetPaymentState`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        POSKey: posKey,
        PaymentId: paymentId
      })
    });

    const stateResult = await stateResponse.json();
    const state = String(stateResult?.Status || stateResult?.PaymentStatus || '').toLowerCase();
    const paymentRequestId = stateResult?.PaymentRequestId || null;

    if (!paymentRequestId) {
      logger.warn('Barion callback: PaymentRequestId hiányzik.', { paymentId, stateResult });
      res.status(200).send('OK');
      return;
    }

    const orderRef = admin.firestore().collection('orders').doc(paymentRequestId);
    const nextStatus = state === 'succeeded' ? 'paid' : state === 'canceled' || state === 'failed' ? 'payment_failed' : 'pending_payment';

    await orderRef.set(
      {
        status: nextStatus,
        payment: {
          method: 'barion_card',
          provider: 'barion',
          status: state || 'unknown',
          paymentId,
          paymentRequestId
        },
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      },
      { merge: true }
    );

    res.status(200).send('OK');
  } catch (error) {
    logger.error('Barion callback hiba.', { error: error.message, paymentId });
    res.status(200).send('OK');
  }
});

exports.onOrderCreatedSendConfirmationEmail = onDocumentCreated('orders/{orderId}', async (event) => {
  const orderId = event.params.orderId;
  const order = event.data?.data();

  if (order?.status === 'pending_payment') {
    logger.info('Email kihagyva: fizetés függőben.', { orderId });
    return;
  }

  try {
    await sendOrderEmail(orderId, order);
  } catch (error) {
    logger.error('Rendelés email küldés sikertelen (create).', { orderId, error: error.message });
    await markEmailStatus(orderId, 'failed', { error: error.message });
  }
});

exports.onOrderPaidSendConfirmationEmail = onDocumentUpdated('orders/{orderId}', async (event) => {
  const orderId = event.params.orderId;
  const before = event.data?.before?.data();
  const after = event.data?.after?.data();

  if (!before || !after) return;
  if (before.status === 'paid' || after.status !== 'paid') return;
  if (after?.email?.status === 'sent') return;

  try {
    await sendOrderEmail(orderId, after);
  } catch (error) {
    logger.error('Rendelés email küldés sikertelen (paid update).', { orderId, error: error.message });
    await markEmailStatus(orderId, 'failed', { error: error.message });
  }
});

const { setGlobalOptions } = require('firebase-functions/v2');
const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const logger = require('firebase-functions/logger');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
setGlobalOptions({ maxInstances: 10 });

function makeOrderSummary(orderId, order) {
  const customerName = order?.customer?.fullName || 'Vasarlo';
  const shippingMethod = order?.shipping?.method === 'locker' ? 'Foxpost csomagautomata' : 'Foxpost hazhozszallitas';
  const shippingPoint = order?.shipping?.lockerPoint || '';
  const total = order?.pricing?.total ?? order?.total ?? 0;
  const billingName = order?.billing?.fullName || '';
  const billingAddress = [order?.billing?.zip, order?.billing?.city, order?.billing?.address].filter(Boolean).join(' ');

  const itemLines = (order?.items || [])
    .map((item) => `- ${item.name} x ${item.quantity} db (${item.price} Ft/db)`)
    .join('\n');

  const lines = [
    `Kedves ${customerName}!`,
    '',
    'Koszonjuk a rendelesedet, sikeresen rogzitettuk.',
    `Rendeles azonosito: ${orderId}`,
    `Vegosszeg: ${total} Ft`,
    `Szallitas: ${shippingMethod}`,
    shippingPoint ? `Atveteli pont: ${shippingPoint}` : '',
    '',
    'Rendelt termekek:',
    itemLines || '-',
    '',
    'Szamlazasi adatok:',
    billingName ? `Nev: ${billingName}` : '',
    billingAddress ? `Cim: ${billingAddress}` : '',
    '',
    'Hamarosan jelentkezunk a tovabbi reszletekkel.',
    '',
    'S420 Laser Engraving'
  ].filter(Boolean);

  return {
    subject: `Rendeles visszaigazolas #${orderId}`,
    text: lines.join('\n')
  };
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

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

exports.onOrderCreatedSendConfirmationEmail = onDocumentCreated('orders/{orderId}', async (event) => {
  const orderId = event.params.orderId;
  const order = event.data?.data();

  if (!order || !order?.customer?.email) {
    logger.warn('Nincs rendelesi adat vagy vevoi email.', { orderId });
    await markEmailStatus(orderId, 'skipped', { reason: 'missing_order_or_email' });
    return;
  }

  const emailPayload = makeOrderSummary(orderId, order);
  const transporter = createTransporter();

  try {
    if (transporter) {
      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: order.customer.email,
        subject: emailPayload.subject,
        text: emailPayload.text
      });
      logger.info('Rendeles email kikuldve SMTP-n.', { orderId });
      await markEmailStatus(orderId, 'sent', { channel: 'smtp' });
      return;
    }

    const sentViaWebhook = await sendViaWebhook(orderId, order, emailPayload);
    if (sentViaWebhook) {
      logger.info('Rendeles email kikuldve webhookon.', { orderId });
      await markEmailStatus(orderId, 'sent', { channel: 'webhook' });
      return;
    }

    logger.warn('Nincs email csatorna beallitva (SMTP/Webhook).', { orderId });
    await markEmailStatus(orderId, 'skipped', { reason: 'missing_transport' });
  } catch (error) {
    logger.error('Rendeles email kuldes sikertelen.', { orderId, error: error.message });
    await markEmailStatus(orderId, 'failed', { error: error.message });
  }
});


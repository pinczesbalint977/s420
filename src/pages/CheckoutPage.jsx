import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { sendOrderNotification } from '../firebase/notifications';
import { createBarionPayment, createOrder, hasUserPlacedOrder } from '../firebase/orders';
import { formatPrice } from '../utils/format';

function readCart() {
  return JSON.parse(localStorage.getItem('cart_items') || '[]');
}

const SHIPPING_COSTS = {
  home: 2800,
  locker: 1600
};

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function showToast(message) {
  window.dispatchEvent(new CustomEvent('app-toast', { detail: { message } }));
}

function CheckoutPage() {
  const items = readCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cardLoading, setCardLoading] = useState(false);
  const [checkingDiscount, setCheckingDiscount] = useState(false);
  const [isFirstOrderDiscount, setIsFirstOrderDiscount] = useState(false);
  const [foxpostPoints, setFoxpostPoints] = useState([]);
  const [loadingFoxpostPoints, setLoadingFoxpostPoints] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    zip: '',
    city: '',
    address: '',
    lockerPoint: '',
    lockerPointId: '',
    shippingMethod: 'home',
    billingName: '',
    billingZip: '',
    billingCity: '',
    billingAddress: '',
    billingTaxNumber: '',
    acceptTerms: false,
    acceptPrivacy: false
  });

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );
  const discountAmount = isFirstOrderDiscount ? Math.round(subtotal * 0.05) : 0;
  const totalWithoutShipping = Math.max(subtotal - discountAmount, 0);
  const shippingCost = items.length > 0 ? SHIPPING_COSTS[form.shippingMethod] : 0;
  const total = totalWithoutShipping + shippingCost;

  const lockerSuggestions = useMemo(() => {
    if (form.shippingMethod !== 'locker') return [];
    const query = normalizeText(form.lockerPoint);
    if (!query || query.length < 2) return [];

    return foxpostPoints
      .filter((point) => {
        const searchText = normalizeText(
          `${point.city} ${point.zip} ${point.name} ${point.address} ${point.id}`
        );
        return searchText.includes(query);
      })
      .slice(0, 8);
  }, [foxpostPoints, form.lockerPoint, form.shippingMethod]);

  useEffect(() => {
    let cancelled = false;

    async function checkDiscount() {
      if (!user?.uid) {
        setIsFirstOrderDiscount(false);
        return;
      }

      setCheckingDiscount(true);
      try {
        const hasOrders = await hasUserPlacedOrder(user.uid);
        if (!cancelled) setIsFirstOrderDiscount(!hasOrders);
      } catch (error) {
        console.error('Discount check failed:', error);
        if (!cancelled) setIsFirstOrderDiscount(false);
      } finally {
        if (!cancelled) setCheckingDiscount(false);
      }
    }

    checkDiscount();
    return () => {
      cancelled = true;
    };
  }, [user?.uid]);

  useEffect(() => {
    let cancelled = false;

    async function loadFoxpostPoints() {
      setLoadingFoxpostPoints(true);
      try {
        const response = await fetch('https://cdn.foxpost.hu/foxplus.json');
        const payload = await response.json();
        const rawItems = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.places)
            ? payload.places
            : Array.isArray(payload?.data)
              ? payload.data
              : [];

        const mapped = rawItems
          .map((item) => ({
            id: item.operator_id || item.place_id || '',
            name: item.name || '',
            city: item.city || '',
            zip: item.zip || '',
            address: item.address || item.street || ''
          }))
          .filter((item) => item.id && item.name);

        if (!cancelled) setFoxpostPoints(mapped);
      } catch (error) {
        console.error('Foxpost automata lista betöltése sikertelen:', error);
        if (!cancelled) setFoxpostPoints([]);
      } finally {
        if (!cancelled) setLoadingFoxpostPoints(false);
      }
    }

    loadFoxpostPoints();
    return () => {
      cancelled = true;
    };
  }, []);

  function onChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'lockerPoint' ? { lockerPointId: '' } : null)
    }));
  }

  function chooseLocker(point) {
    setForm((prev) => ({
      ...prev,
      lockerPoint: `${point.city} (${point.zip}) - ${point.name}, ${point.address}`.trim(),
      lockerPointId: point.id
    }));
  }

  function validateCommon() {
    if (items.length === 0) {
      showToast('A kosár üres.');
      return false;
    }

    if (!form.acceptTerms || !form.acceptPrivacy) {
      showToast('Az ÁSZF és az adatkezelés elfogadása kötelező.');
      return false;
    }

    if (form.shippingMethod === 'locker' && (!form.lockerPoint || !form.lockerPointId)) {
      showToast('Kérlek válassz Foxpost csomagautomatát a listából.');
      return false;
    }

    return true;
  }

  function buildOrderPayload() {
    return {
      uid: user?.uid || null,
      customer: {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone
      },
      shippingAddress: {
        zip: form.shippingMethod === 'home' ? form.zip : null,
        city: form.shippingMethod === 'home' ? form.city : null,
        address: form.shippingMethod === 'home' ? form.address : null
      },
      billing: {
        fullName: form.billingName,
        zip: form.billingZip,
        city: form.billingCity,
        address: form.billingAddress,
        taxNumber: form.billingTaxNumber || null
      },
      shipping: {
        provider: 'foxpost',
        method: form.shippingMethod,
        cost: shippingCost,
        lockerPoint: form.shippingMethod === 'locker' ? form.lockerPoint : null,
        lockerPointId: form.shippingMethod === 'locker' ? form.lockerPointId : null
      },
      items,
      pricing: {
        subtotal,
        discountPercent: isFirstOrderDiscount ? 5 : 0,
        discountAmount,
        totalWithoutShipping,
        shippingCost,
        total
      },
      total,
      legal: {
        termsAcceptedAt: new Date().toISOString(),
        privacyAcceptedAt: new Date().toISOString()
      }
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateCommon()) return;

    setLoading(true);
    try {
      const orderPayload = buildOrderPayload();
      const orderRef = await createOrder(orderPayload);

      try {
        await sendOrderNotification({
          orderId: orderRef.id,
          ...orderPayload
        });
      } catch (notifyError) {
        console.warn('Order notification failed:', notifyError);
      }

      localStorage.setItem('cart_items', '[]');
      window.dispatchEvent(new CustomEvent('cart-updated'));
      window.setTimeout(() => window.dispatchEvent(new CustomEvent('cart-updated')), 0);
      showToast('Köszönjük! A rendelésedet rögzítettük.');
      navigate('/');
    } catch (error) {
      if (error?.code === 'permission-denied' || String(error?.message || '').includes('insufficient permissions')) {
        showToast('Nincs jogosultság a rendelés mentéséhez. Ellenőrizd a Firestore szabályokat.');
      } else {
        showToast(`Hiba: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleCardPayment() {
    if (!validateCommon()) return;

    setCardLoading(true);
    try {
      const orderPayload = buildOrderPayload();
      const result = await createBarionPayment({
        order: orderPayload,
        returnUrl: `${window.location.origin}/#/penztar?fizetes=barion`
      });

      if (!result?.gatewayUrl) {
        throw new Error('A fizetési átjáró URL hiányzik.');
      }

      window.location.assign(result.gatewayUrl);
    } catch (error) {
      showToast(error?.message || 'A bankkártyás fizetés indítása sikertelen.');
    } finally {
      setCardLoading(false);
    }
  }

  return (
    <section>
      <h1>Pénztár</h1>
      <p>
        Fizetés módja: rendelés leadása (utánvét/banki átutalás szerint), vagy bankkártyás fizetés Barionnal.
      </p>
      {checkingDiscount && <p>Kedvezmény ellenőrzése...</p>}
      {user && isFirstOrderDiscount && <p className="success-note">Első vásárlói kedvezmény aktiválva: 5%.</p>}
      {!user && <p>Első vásárlói 5% kedvezmény regisztrált, bejelentkezett vásárlóknak jár.</p>}
      <h3>Részösszeg: {formatPrice(subtotal)}</h3>
      <h3>Kedvezmény: -{formatPrice(discountAmount)}</h3>
      <h3>Szállítás ({form.shippingMethod === 'home' ? 'Foxpost házhoz' : 'Foxpost automata'}): {formatPrice(shippingCost)}</h3>
      <h3>Fizetendő: {formatPrice(total)}</h3>

      <form onSubmit={handleSubmit} className="form">
        <input name="fullName" placeholder="Név" value={form.fullName} onChange={onChange} required />
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={onChange} required />
        <input name="phone" placeholder="Telefonszám" value={form.phone} onChange={onChange} required />

        <fieldset className="checkout-shipping-fieldset">
          <legend>Szállítási adatok</legend>
          <label className="checkout-shipping-option">
            <input
              type="radio"
              name="shippingMethod"
              value="home"
              checked={form.shippingMethod === 'home'}
              onChange={onChange}
            />
            Házhozszállítás (+{formatPrice(SHIPPING_COSTS.home)})
          </label>
          <label className="checkout-shipping-option">
            <input
              type="radio"
              name="shippingMethod"
              value="locker"
              checked={form.shippingMethod === 'locker'}
              onChange={onChange}
            />
            Csomagautomata (+{formatPrice(SHIPPING_COSTS.locker)})
          </label>
          {form.shippingMethod === 'home' && (
            <>
              <input name="zip" placeholder="Irányítószám" value={form.zip} onChange={onChange} required />
              <input name="city" placeholder="Város" value={form.city} onChange={onChange} required />
            </>
          )}
          {form.shippingMethod === 'home' ? (
            <input
              name="address"
              placeholder="Szállítási cím (utca, házszám)"
              value={form.address}
              onChange={onChange}
              required
            />
          ) : (
            <div className="foxpost-picker">
              <input
                name="lockerPoint"
                placeholder="Kezdd el gépelni pl.: Szentmártonkáta"
                value={form.lockerPoint}
                onChange={onChange}
                autoComplete="off"
                required
              />
              {loadingFoxpostPoints && <small>Foxpost automaták betöltése...</small>}
              {lockerSuggestions.length > 0 && (
                <div className="foxpost-suggestions" role="listbox" aria-label="Foxpost automaták">
                  {lockerSuggestions.map((point) => (
                    <button
                      key={point.id}
                      type="button"
                      className="foxpost-suggestion-item"
                      onClick={() => chooseLocker(point)}
                    >
                      <strong>{point.city} ({point.zip})</strong> - {point.name}
                      <span>{point.address}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </fieldset>

        <fieldset className="checkout-shipping-fieldset">
          <legend>Számlázási adatok</legend>
          <input name="billingName" placeholder="Számlázási név" value={form.billingName} onChange={onChange} required />
          <input name="billingZip" placeholder="Számlázási irányítószám" value={form.billingZip} onChange={onChange} required />
          <input name="billingCity" placeholder="Számlázási város" value={form.billingCity} onChange={onChange} required />
          <input name="billingAddress" placeholder="Számlázási cím (utca, házszám)" value={form.billingAddress} onChange={onChange} required />
          <input name="billingTaxNumber" placeholder="Adószám (opcionális, céges számlához)" value={form.billingTaxNumber} onChange={onChange} />
        </fieldset>

        <label>
          <input type="checkbox" name="acceptTerms" checked={form.acceptTerms} onChange={onChange} /> Elfogadom az ÁSZF-et.
        </label>
        <label>
          <input type="checkbox" name="acceptPrivacy" checked={form.acceptPrivacy} onChange={onChange} /> Elfogadom az adatkezelési tájékoztatót.
        </label>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button className="btn" type="submit" disabled={loading || checkingDiscount || cardLoading}>
            {loading ? 'Mentés...' : 'Rendelés elküldése'}
          </button>
          <button
            className="btn"
            type="button"
            disabled={cardLoading || loading || checkingDiscount}
            onClick={handleCardPayment}
          >
            {cardLoading ? 'Átirányítás...' : 'Bankkártyás fizetés (Barion)'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default CheckoutPage;

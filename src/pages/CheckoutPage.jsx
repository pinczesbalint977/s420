import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { sendOrderNotification } from '../firebase/notifications';
import { createOrder, hasUserPlacedOrder } from '../firebase/orders';
import { formatPrice } from '../utils/format';

function readCart() {
  return JSON.parse(localStorage.getItem('cart_items') || '[]');
}

function CheckoutPage() {
  const items = readCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [checkingDiscount, setCheckingDiscount] = useState(false);
  const [isFirstOrderDiscount, setIsFirstOrderDiscount] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    zip: '',
    city: '',
    address: '',
    acceptTerms: false,
    acceptPrivacy: false
  });

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );
  const discountAmount = isFirstOrderDiscount ? Math.round(subtotal * 0.05) : 0;
  const total = Math.max(subtotal - discountAmount, 0);

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
        if (!cancelled) {
          setIsFirstOrderDiscount(!hasOrders);
        }
      } catch (error) {
        console.error('Discount check failed:', error);
        if (!cancelled) {
          setIsFirstOrderDiscount(false);
        }
      } finally {
        if (!cancelled) {
          setCheckingDiscount(false);
        }
      }
    }

    checkDiscount();

    return () => {
      cancelled = true;
    };
  }, [user?.uid]);

  function onChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (items.length === 0) {
      alert('A kosár üres.');
      return;
    }
    if (!form.acceptTerms || !form.acceptPrivacy) {
      alert('Az ÁSZF és az adatkezelés elfogadása kötelező.');
      return;
    }

    setLoading(true);
    try {
      const orderPayload = {
        uid: user?.uid || null,
        customer: {
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          zip: form.zip,
          city: form.city,
          address: form.address
        },
        items,
        pricing: {
          subtotal,
          discountPercent: isFirstOrderDiscount ? 5 : 0,
          discountAmount,
          total
        },
        total,
        legal: {
          termsAcceptedAt: new Date().toISOString(),
          privacyAcceptedAt: new Date().toISOString()
        }
      };

      const orderRef = await createOrder(orderPayload);

      try {
        await sendOrderNotification({
          orderId: orderRef.id,
          ...orderPayload
        });
      } catch (notifyError) {
        console.warn('Order notification failed:', notifyError);
      }

      localStorage.removeItem('cart_items');
      alert('Rendelés rögzítve.');
      navigate('/');
    } catch (error) {
      alert(`Hiba: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h1>Pénztár</h1>
      <p>Fizetés most: demo módban. Élesben online fizetési szolgáltató szükséges.</p>
      {checkingDiscount && <p>Kedvezmény ellenőrzése...</p>}
      {user && isFirstOrderDiscount && (
        <p className="success-note">Első vásárlói kedvezmény aktiválva: 5%.</p>
      )}
      {!user && <p>Első vásárlói 5% kedvezmény regisztrált, bejelentkezett vásárlóknak jár.</p>}
      <h3>Részösszeg: {formatPrice(subtotal)}</h3>
      <h3>Kedvezmény: -{formatPrice(discountAmount)}</h3>
      <h3>Fizetendő: {formatPrice(total)}</h3>
      <form onSubmit={handleSubmit} className="form">
        <input name="fullName" placeholder="Teljes név" value={form.fullName} onChange={onChange} required />
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={onChange} required />
        <input name="phone" placeholder="Telefonszám" value={form.phone} onChange={onChange} required />
        <input name="zip" placeholder="Irányítószám" value={form.zip} onChange={onChange} required />
        <input name="city" placeholder="Város" value={form.city} onChange={onChange} required />
        <input name="address" placeholder="Cím" value={form.address} onChange={onChange} required />

        <label>
          <input type="checkbox" name="acceptTerms" checked={form.acceptTerms} onChange={onChange} /> Elfogadom az ÁSZF-et.
        </label>
        <label>
          <input type="checkbox" name="acceptPrivacy" checked={form.acceptPrivacy} onChange={onChange} /> Elfogadom az adatkezelési tájékoztatót.
        </label>

        <button className="btn" type="submit" disabled={loading || checkingDiscount}>
          {loading ? 'Mentés...' : 'Rendelés elküldése'}
        </button>
      </form>
    </section>
  );
}

export default CheckoutPage;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { sendOrderNotification } from '../firebase/notifications';
import { createOrder } from '../firebase/orders';
import { formatPrice } from '../utils/format';

function readCart() {
  return JSON.parse(localStorage.getItem('cart_items') || '[]');
}

function CheckoutPage() {
  const items = readCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

        <button className="btn" type="submit" disabled={loading}>
          {loading ? 'Mentés...' : 'Rendelés elküldése'}
        </button>
      </form>
    </section>
  );
}

export default CheckoutPage;

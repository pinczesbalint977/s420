import { useState } from 'react';
import { createDesignRequest } from '../firebase/orders';

function DesignRequestPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    message: '',
    material: '',
    quantity: 1
  });

  function onChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      await createDesignRequest(form);
      alert('Egyedi ajánlatkérés elküldve.');
      setForm({ fullName: '', email: '', message: '', material: '', quantity: 1 });
    } catch (error) {
      alert(`Hiba: ${error.message}`);
    }
  }

  return (
    <section>
      <h1>Egyedi tervezés kérése</h1>
      <form className="form" onSubmit={onSubmit}>
        <input name="fullName" placeholder="Teljes név" value={form.fullName} onChange={onChange} required />
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={onChange} required />
        <input name="material" placeholder="Anyag (pl. fa, fém, akril)" value={form.material} onChange={onChange} required />
        <input
          name="quantity"
          type="number"
          min={1}
          placeholder="Darabszám"
          value={form.quantity}
          onChange={onChange}
          required
        />
        <textarea
          name="message"
          placeholder="Leírás, méret, határidő"
          value={form.message}
          onChange={onChange}
          rows={5}
          required
        />
        <button className="btn" type="submit">
          Ajánlatkérés elküldése
        </button>
      </form>
    </section>
  );
}

export default DesignRequestPage;

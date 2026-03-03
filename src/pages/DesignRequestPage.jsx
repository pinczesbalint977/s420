import { useState } from 'react';
import { sendNotificationEvent } from '../firebase/notifications';
import { createDesignRequest } from '../firebase/orders';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  material: '',
  quantity: 1,
  deadline: '',
  city: '',
  fileUrl: '',
  message: ''
};

function DesignRequestPage() {
  const [form, setForm] = useState(initialForm);

  function onChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const requestPayload = {
        ...form,
        quantity: Number(form.quantity)
      };

      const requestRef = await createDesignRequest(requestPayload);

      try {
        await sendNotificationEvent({
          type: 'design_request_created',
          requestId: requestRef.id,
          ...requestPayload
        });
      } catch (notifyError) {
        console.warn('Design request notification failed:', notifyError);
      }

      alert('Egyedi ajánlatkérés elküldve.');
      setForm(initialForm);
    } catch (error) {
      alert(`Hiba: ${error.message}`);
    }
  }

  return (
    <section>
      <h1>Egyedi tervezés kérése</h1>
      <p>Add meg a lehető legtöbb információt, hogy pontos árajánlatot tudjunk adni.</p>
      <form className="form" onSubmit={onSubmit}>
        <input name="fullName" placeholder="Teljes név" value={form.fullName} onChange={onChange} required />
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={onChange} required />
        <input name="phone" placeholder="Telefonszám" value={form.phone} onChange={onChange} required />
        <input name="material" placeholder="Anyag (pl. fa, fém, akril)" value={form.material} onChange={onChange} required />
        <input name="quantity" type="number" min={1} placeholder="Darabszám" value={form.quantity} onChange={onChange} required />
        <input name="deadline" placeholder="Határidő / mikorra kell" value={form.deadline} onChange={onChange} required />
        <input name="city" placeholder="Település" value={form.city} onChange={onChange} required />
        <input name="fileUrl" placeholder="Referenciafájl vagy kép linkje (opcionális)" value={form.fileUrl} onChange={onChange} />
        <textarea
          name="message"
          placeholder="Leírás: gravírozás szövege, minta, méret, csomagolási kérés, külön igények"
          value={form.message}
          onChange={onChange}
          rows={6}
          required
        />
        <button className="btn" type="submit">
          Árajánlatkérés elküldése
        </button>
      </form>
    </section>
  );
}

export default DesignRequestPage;

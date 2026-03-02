import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RegisterPage() {
  const { registerWithEmail } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  function onChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      await registerWithEmail(form.email, form.password);
      navigate('/');
    } catch (error) {
      alert(`Sikertelen regisztráció: ${error.message}`);
    }
  }

  return (
    <section>
      <h1>Regisztráció</h1>
      <form className="form" onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={onChange} required />
        <input
          name="password"
          type="password"
          minLength={8}
          placeholder="Jelszó (min. 8 karakter)"
          value={form.password}
          onChange={onChange}
          required
        />
        <button className="btn" type="submit">
          Fiók létrehozása
        </button>
      </form>
    </section>
  );
}

export default RegisterPage;

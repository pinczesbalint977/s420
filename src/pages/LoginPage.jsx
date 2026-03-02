import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const { loginWithEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: '', password: '' });

  function onChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      await loginWithEmail(form.email, form.password);
      navigate(location.state?.from || '/');
    } catch (error) {
      alert(`Sikertelen belépés: ${error.message}`);
    }
  }

  return (
    <section>
      <h1>Belépés</h1>
      <form className="form" onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={onChange} required />
        <input
          name="password"
          type="password"
          placeholder="Jelszó"
          value={form.password}
          onChange={onChange}
          required
        />
        <button className="btn" type="submit">
          Belépés
        </button>
      </form>
    </section>
  );
}

export default LoginPage;

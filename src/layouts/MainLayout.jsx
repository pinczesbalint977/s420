import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function MainLayout() {
  const { user, isAdmin, logout } = useAuth();

  async function handleLogout() {
    await logout();
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          S420 Engraving
        </Link>
        <nav>
          <NavLink to="/">Főoldal</NavLink>
          <NavLink to="/egyedi-tervezes">Egyedi tervezés</NavLink>
          <NavLink to="/kosar">Kosár</NavLink>
          {isAdmin && <NavLink to="/admin">Admin</NavLink>}
        </nav>
        <div className="topbar-actions">
          {!user ? (
            <>
              <NavLink to="/bejelentkezes">Belépés</NavLink>
              <NavLink to="/regisztracio">Regisztráció</NavLink>
            </>
          ) : (
            <button className="ghost-btn" onClick={handleLogout}>
              Kijelentkezés
            </button>
          )}
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        <Link to="/aszf">ÁSZF</Link>
        <Link to="/adatvedelem">Adatkezelés</Link>
        <Link to="/impresszum">Impresszum</Link>
      </footer>
    </div>
  );
}

export default MainLayout;


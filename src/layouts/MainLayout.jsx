import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../pic/logo.png';
import cartIcon from '../pic/kosar.png';

function getCartTotal() {
  try {
    const items = JSON.parse(localStorage.getItem('cart_items') || '[]');
    return items.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return sum + (price * quantity);
    }, 0);
  } catch {
    return 0;
  }
}

const hufFormatter = new Intl.NumberFormat('hu-HU', {
  style: 'currency',
  currency: 'HUF',
  maximumFractionDigits: 0,
});

function MainLayout() {
  const { user, isAdmin, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [toastMessage, setToastMessage] = useState('');
  const toastTimerRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function refreshTotal() {
      setCartTotal(getCartTotal());
    }

    function onStorage(event) {
      if (event.key === 'cart_items') {
        refreshTotal();
      }
    }

    function onCartUpdated() {
      refreshTotal();
    }

    function onAppToast(event) {
      const message = event?.detail?.message || 'Termék kosárba téve.';
      setToastMessage(message);

      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }

      toastTimerRef.current = window.setTimeout(() => {
        setToastMessage('');
      }, 2200);
    }

    refreshTotal();
    window.addEventListener('storage', onStorage);
    window.addEventListener('cart-updated', onCartUpdated);
    window.addEventListener('app-toast', onAppToast);

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('cart-updated', onCartUpdated);
      window.removeEventListener('app-toast', onAppToast);
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  async function handleLogout() {
    await logout();
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="app-shell">
      <header className={`topbar ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="S420 Engraving" className="brand-logo" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Menü megnyitása"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Főoldal</NavLink>
          <NavLink to="/egyedi-tervezes" onClick={closeMenu}>Egyedi tervezés</NavLink>
          <NavLink to="/kosar" className="cart-nav-link" onClick={closeMenu}>
            <img src={cartIcon} alt="Kosár" className="cart-nav-icon" />
            <span className="cart-nav-count">{hufFormatter.format(cartTotal)}</span>
          </NavLink>
          {isAdmin && <NavLink to="/admin" onClick={closeMenu}>Admin</NavLink>}
        </nav>

        <div className={`topbar-actions ${menuOpen ? 'open' : ''}`}>
          {!user ? (
            <>
              <NavLink to="/bejelentkezes" className="neon-hover" onClick={closeMenu}>Belépés</NavLink>
              <NavLink to="/regisztracio" className="neon-hover" onClick={closeMenu}>Regisztráció</NavLink>
            </>
          ) : (
            <button className="ghost-btn" onClick={handleLogout}>
              Kijelentkezés
            </button>
          )}
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <NavLink to="/" onClick={closeMenu}>Főoldal</NavLink>
            <NavLink to="/egyedi-tervezes" onClick={closeMenu}>Egyedi tervezés</NavLink>
            <NavLink to="/kosar" className="cart-nav-link" onClick={closeMenu}>
              <img src={cartIcon} alt="Kosár" className="cart-nav-icon" />
              <span className="cart-nav-count">{hufFormatter.format(cartTotal)}</span>
            </NavLink>
            {isAdmin && <NavLink to="/admin" onClick={closeMenu}>Admin</NavLink>}
          </nav>
          <div className="mobile-actions">
            {!user ? (
              <>
                <NavLink to="/bejelentkezes" className="neon-hover" onClick={closeMenu}>Belépés</NavLink>
                <NavLink to="/regisztracio" className="neon-hover" onClick={closeMenu}>Regisztráció</NavLink>
              </>
            ) : (
              <button className="ghost-btn" onClick={handleLogout}>
                Kijelentkezés
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      {toastMessage && (
        <div className="app-toast" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}

      <footer className="footer">
        <Link to="/aszf">ÁSZF</Link>
        <Link to="/adatvedelem">Adatkezelés</Link>
        <Link to="/impresszum">Impresszum</Link>
      </footer>
    </div>
  );
}

export default MainLayout;

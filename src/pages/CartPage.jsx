import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';

function readCart() {
  return JSON.parse(localStorage.getItem('cart_items') || '[]');
}

function writeCart(items) {
  localStorage.setItem('cart_items', JSON.stringify(items));
}

function CartPage() {
  const items = readCart();

  function changeQty(id, diff) {
    const updated = readCart()
      .map((item) => (item.id === id ? { ...item, quantity: item.quantity + diff } : item))
      .filter((item) => item.quantity > 0);
    writeCart(updated);
    window.location.reload();
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section>
      <h1>Kosár</h1>
      {items.length === 0 && <p>A kosár üres.</p>}
      {items.map((item) => (
        <article className="cart-row" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>{formatPrice(item.price)}</p>
          </div>
          <div className="qty-controls">
            <button onClick={() => changeQty(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => changeQty(item.id, 1)}>+</button>
          </div>
        </article>
      ))}
      <h3>Végösszeg: {formatPrice(total)}</h3>
      {items.length > 0 && (
        <Link className="btn" to="/penztar">
          Tovább a pénztárhoz
        </Link>
      )}
    </section>
  );
}

export default CartPage;

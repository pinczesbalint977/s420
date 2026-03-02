import { useEffect, useMemo, useState } from 'react';
import { listOrders, setOrderStatus } from '../firebase/orders';
import { createProduct, listProducts, removeProduct } from '../firebase/products';
import { formatPrice } from '../utils/format';

function AdminPage() {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderSearch, setOrderSearch] = useState('');
  const [orderFilter, setOrderFilter] = useState('all');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: '',
    shortDescription: '',
    description: '',
    price: '',
    stock: '',
    imageUrlsText: ''
  });

  async function loadProducts() {
    const data = await listProducts();
    setProducts(data);
  }

  async function loadOrders() {
    const data = await listOrders();
    setOrders(data);
  }

  useEffect(() => {
    loadProducts();
    loadOrders();
  }, []);

  const filteredOrders = useMemo(() => {
    const search = orderSearch.trim().toLowerCase();

    return orders.filter((order) => {
      const byStatus =
        orderFilter === 'all'
          ? true
          : orderFilter === 'shipped'
            ? order.status === 'shipped'
            : order.status !== 'shipped';

      if (!byStatus) return false;
      if (!search) return true;

      const haystack = [
        order.id,
        order.customer?.fullName,
        order.customer?.email,
        order.customer?.phone,
        order.customer?.city,
        order.customer?.address
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return haystack.includes(search);
    });
  }, [orders, orderSearch, orderFilter]);

  function onChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();

    const imageUrls = form.imageUrlsText
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    if (imageUrls.length < 3) {
      alert('Minimum 3 képlink megadása kötelező (soronként 1 URL).');
      return;
    }

    setSaving(true);
    try {
      await createProduct({
        name: form.name,
        shortDescription: form.shortDescription,
        description: form.description,
        price: Number(form.price),
        stock: Number(form.stock),
        imageUrls,
        isActive: true
      });
      setForm({
        name: '',
        shortDescription: '',
        description: '',
        price: '',
        stock: '',
        imageUrlsText: ''
      });
      await loadProducts();
      alert('Termék mentve.');
    } catch (error) {
      alert(`Hiba: ${error.message}`);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    const ok = window.confirm('Biztosan törlöd a terméket?');
    if (!ok) return;

    await removeProduct(id);
    await loadProducts();
  }

  async function handleShippedChange(orderId, checked) {
    await setOrderStatus(orderId, checked ? 'shipped' : 'new');
    await loadOrders();
  }

  return (
    <section>
      <h1>Admin felület</h1>

      <div className="admin-tabs">
        <button
          className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
          type="button"
        >
          Termékek
        </button>
        <button
          className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
          type="button"
        >
          Rendelések
        </button>
      </div>

      {activeTab === 'products' && (
        <>
          <h2>Új termék</h2>
          <form className="form" onSubmit={onSubmit}>
            <input name="name" placeholder="Terméknév" value={form.name} onChange={onChange} required />
            <input
              name="shortDescription"
              placeholder="Rövid leírás"
              value={form.shortDescription}
              onChange={onChange}
              required
            />
            <textarea
              name="description"
              placeholder="Teljes leírás"
              value={form.description}
              onChange={onChange}
              rows={4}
              required
            />
            <input name="price" type="number" min={0} placeholder="Ár (HUF)" value={form.price} onChange={onChange} required />
            <input name="stock" type="number" min={0} placeholder="Készlet" value={form.stock} onChange={onChange} required />
            <textarea
              name="imageUrlsText"
              placeholder="Képlinkek (soronként 1 URL, minimum 3)"
              value={form.imageUrlsText}
              onChange={onChange}
              rows={5}
              required
            />
            <small>Storage helyett külső képlinkek használata.</small>
            <button className="btn" type="submit" disabled={saving}>
              {saving ? 'Mentés...' : 'Termék mentése'}
            </button>
          </form>

          <h2>Jelenlegi termékek</h2>
          <div className="grid">
            {products.map((product) => (
              <article className="card" key={product.id}>
                <img src={product.imageUrls?.[0]} alt={product.name} className="card-image" />
                <h3>{product.name}</h3>
                <p>{formatPrice(product.price)}</p>
                <button className="btn danger" onClick={() => handleDelete(product.id)}>
                  Törlés
                </button>
              </article>
            ))}
          </div>
        </>
      )}

      {activeTab === 'orders' && (
        <>
          <h2>Rendelések kezelése</h2>

          <div className="order-controls">
            <input
              type="text"
              placeholder="Keresés (név, email, telefon, rendelés ID, cím)"
              value={orderSearch}
              onChange={(event) => setOrderSearch(event.target.value)}
            />

            <select value={orderFilter} onChange={(event) => setOrderFilter(event.target.value)}>
              <option value="all">Minden rendelés</option>
              <option value="new">Nem kipipált (új)</option>
              <option value="shipped">Kipipált (feladva)</option>
            </select>
          </div>

          {filteredOrders.length === 0 && <p>Nincs a szűrésnek megfelelő rendelés.</p>}

          <div className="order-list">
            {filteredOrders.map((order) => (
              <article className="card" key={order.id}>
                <h3>Rendelés azonosító: {order.id}</h3>
                <p>
                  <strong>Név:</strong> {order.customer?.fullName}
                </p>
                <p>
                  <strong>E-mail:</strong> {order.customer?.email}
                </p>
                <p>
                  <strong>Telefon:</strong> {order.customer?.phone}
                </p>
                <p>
                  <strong>Cím:</strong> {order.customer?.zip} {order.customer?.city}, {order.customer?.address}
                </p>
                <p>
                  <strong>Végösszeg:</strong> {formatPrice(order.total)}
                </p>
                <p>
                  <strong>Státusz:</strong> {order.status === 'shipped' ? 'Feladva' : 'Új'}
                </p>

                <label>
                  <input
                    type="checkbox"
                    checked={order.status === 'shipped'}
                    onChange={(event) => handleShippedChange(order.id, event.target.checked)}
                  />
                  Kész, feladtam a csomagot
                </label>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default AdminPage;

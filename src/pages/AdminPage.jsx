import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { createAdminIdea, listAdminIdeas } from '../firebase/adminIdeas';
import { listDesignRequests, listOrders, setDesignRequestStatus, setOrderStatus } from '../firebase/orders';
import { createProduct, listProducts, removeProduct } from '../firebase/products';
import { formatPrice } from '../utils/format';

const teamMembers = ['Ferenc', 'Bálint', 'Zoltán'];

const designStatusOptions = [
  { value: 'new', label: 'Új' },
  { value: 'read', label: 'Olvastam' },
  { value: 'replied', label: 'Válaszoltam neki' },
  { value: 'sold_shipped', label: 'Eladtam és feladtam' }
];

const initialProductForm = {
  name: '',
  shortDescription: '',
  description: '',
  price: '',
  stock: '',
  imageUrlsText: ''
};

const initialIdeaForm = {
  title: '',
  description: '',
  authorName: 'Ferenc',
  assigneeName: 'Bálint',
  kind: 'task'
};

function formatDateValue(value) {
  if (!value) return '';
  if (typeof value === 'string') return new Date(value).toLocaleString('hu-HU');
  if (value?.toDate) return value.toDate().toLocaleString('hu-HU');
  return '';
}

function toDateOnly(value) {
  if (!value) return '';
  if (typeof value === 'string') return value.slice(0, 10);
  if (value?.toDate) return value.toDate().toISOString().slice(0, 10);
  return '';
}

function AdminPage() {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [designRequests, setDesignRequests] = useState([]);
  const [adminIdeas, setAdminIdeas] = useState([]);
  const [orderSearch, setOrderSearch] = useState('');
  const [orderFilter, setOrderFilter] = useState('all');
  const [designSearch, setDesignSearch] = useState('');
  const [designFilter, setDesignFilter] = useState('all');
  const [ideaSearch, setIdeaSearch] = useState('');
  const [ideaAssigneeFilter, setIdeaAssigneeFilter] = useState('all');
  const [ideaDateFrom, setIdeaDateFrom] = useState('');
  const [ideaDateTo, setIdeaDateTo] = useState('');
  const [saving, setSaving] = useState(false);
  const [productForm, setProductForm] = useState(initialProductForm);
  const [ideaForm, setIdeaForm] = useState(initialIdeaForm);

  async function loadProducts() {
    setProducts(await listProducts());
  }

  async function loadOrders() {
    setOrders(await listOrders());
  }

  async function loadDesignRequests() {
    setDesignRequests(await listDesignRequests());
  }

  async function loadAdminIdeas() {
    setAdminIdeas(await listAdminIdeas());
  }

  useEffect(() => {
    loadProducts();
    loadOrders();
    loadDesignRequests();
    loadAdminIdeas();
  }, []);

  const filteredOrders = useMemo(() => {
    const search = orderSearch.trim().toLowerCase();
    return orders.filter((order) => {
      const byStatus = orderFilter === 'all' ? true : orderFilter === 'shipped' ? order.status === 'shipped' : order.status !== 'shipped';
      if (!byStatus) return false;
      if (!search) return true;
      const haystack = [order.id, order.customer?.fullName, order.customer?.email, order.customer?.phone, order.customer?.city, order.customer?.address]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(search);
    });
  }, [orders, orderSearch, orderFilter]);

  const filteredDesignRequests = useMemo(() => {
    const search = designSearch.trim().toLowerCase();
    return designRequests.filter((request) => {
      const byStatus = designFilter === 'all' ? true : request.status === designFilter;
      if (!byStatus) return false;
      if (!search) return true;
      const haystack = [request.id, request.fullName, request.email, request.phone, request.material, request.city, request.message, request.deadline]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(search);
    });
  }, [designRequests, designSearch, designFilter]);

  const filteredIdeas = useMemo(() => {
    const search = ideaSearch.trim().toLowerCase();
    return adminIdeas.filter((idea) => {
      const byAssignee = ideaAssigneeFilter === 'all' ? true : idea.assigneeName === ideaAssigneeFilter;
      const createdDate = toDateOnly(idea.createdAt);
      const byFrom = !ideaDateFrom || (createdDate && createdDate >= ideaDateFrom);
      const byTo = !ideaDateTo || (createdDate && createdDate <= ideaDateTo);
      if (!byAssignee || !byFrom || !byTo) return false;
      if (!search) return true;
      const completionText = idea.completionReport
        ? `${idea.completionReport.responderName} ${idea.completionReport.cost} ${idea.completionReport.requirements} ${idea.completionReport.timeEstimate} ${idea.completionReport.feasible}`
        : '';
      const haystack = [idea.title, idea.description, idea.authorName, idea.assigneeName, idea.kind, completionText]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(search);
    });
  }, [adminIdeas, ideaSearch, ideaAssigneeFilter, ideaDateFrom, ideaDateTo]);

  function onProductChange(event) {
    const { name, value } = event.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
  }

  function onIdeaChange(event) {
    const { name, value } = event.target;
    setIdeaForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onProductSubmit(event) {
    event.preventDefault();
    const imageUrls = productForm.imageUrlsText.split('\n').map((line) => line.trim()).filter(Boolean);
    if (imageUrls.length < 3) {
      alert('Minimum 3 képlink megadása kötelező (soronként 1 URL).');
      return;
    }
    setSaving(true);
    try {
      await createProduct({
        name: productForm.name,
        shortDescription: productForm.shortDescription,
        description: productForm.description,
        price: Number(productForm.price),
        stock: Number(productForm.stock),
        imageUrls,
        isActive: true
      });
      setProductForm(initialProductForm);
      await loadProducts();
      alert('Termék mentve.');
    } catch (error) {
      alert(`Hiba: ${error.message}`);
    } finally {
      setSaving(false);
    }
  }

  async function onIdeaSubmit(event) {
    event.preventDefault();
    setSaving(true);
    try {
      await createAdminIdea({ ...ideaForm, status: 'open' });
      setIdeaForm(initialIdeaForm);
      await loadAdminIdeas();
      alert('Ötlet / feladat mentve.');
    } catch (error) {
      alert(`Hiba: ${error.message}`);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Biztosan törlöd a terméket?')) return;
    await removeProduct(id);
    await loadProducts();
  }

  async function handleShippedChange(orderId, checked) {
    await setOrderStatus(orderId, checked ? 'shipped' : 'new');
    await loadOrders();
  }

  async function handleDesignStatusChange(requestId, status) {
    await setDesignRequestStatus(requestId, status);
    await loadDesignRequests();
  }

  function getDesignStatusLabel(status) {
    return designStatusOptions.find((item) => item.value === status)?.label || 'Új';
  }

  function isIdeaDone(idea) {
    return idea.status === 'done';
  }

  return (
    <section>
      <h1>Admin felület</h1>

      <div className="admin-tabs admin-tabs-wrap">
        <button className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')} type="button">Termékek</button>
        <button className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')} type="button">Rendelések</button>
        <button className={`tab-btn ${activeTab === 'design' ? 'active' : ''}`} onClick={() => setActiveTab('design')} type="button">Egyedi rendelések</button>
        <button className={`tab-btn ${activeTab === 'ideas' ? 'active' : ''}`} onClick={() => setActiveTab('ideas')} type="button">Ötletek / feladatok</button>
      </div>

      {activeTab === 'products' && (
        <>
          <h2>Új termék</h2>
          <form className="form" onSubmit={onProductSubmit}>
            <input name="name" placeholder="Terméknév" value={productForm.name} onChange={onProductChange} required />
            <input name="shortDescription" placeholder="Rövid leírás" value={productForm.shortDescription} onChange={onProductChange} required />
            <textarea name="description" placeholder="Teljes leírás" value={productForm.description} onChange={onProductChange} rows={4} required />
            <input name="price" type="number" min={0} placeholder="Ár (HUF)" value={productForm.price} onChange={onProductChange} required />
            <input name="stock" type="number" min={0} placeholder="Készlet" value={productForm.stock} onChange={onProductChange} required />
            <textarea name="imageUrlsText" placeholder="Képlinkek (soronként 1 URL, minimum 3)" value={productForm.imageUrlsText} onChange={onProductChange} rows={5} required />
            <small>Storage helyett külső képlinkek használata.</small>
            <button className="btn" type="submit" disabled={saving}>{saving ? 'Mentés...' : 'Termék mentése'}</button>
          </form>

          <h2>Jelenlegi termékek</h2>
          <div className="grid">
            {products.map((product) => (
              <article className="card" key={product.id}>
                <img src={product.imageUrls?.[0]} alt={product.name} className="card-image" />
                <h3>{product.name}</h3>
                <p>{formatPrice(product.price)}</p>
                <button className="btn danger" onClick={() => handleDelete(product.id)}>Törlés</button>
              </article>
            ))}
          </div>
        </>
      )}

      {activeTab === 'orders' && (
        <>
          <h2>Rendelések kezelése</h2>
          <div className="order-controls">
            <input type="text" placeholder="Keresés (név, email, telefon, rendelés ID, cím)" value={orderSearch} onChange={(event) => setOrderSearch(event.target.value)} />
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
                <p><strong>Név:</strong> {order.customer?.fullName}</p>
                <p><strong>E-mail:</strong> {order.customer?.email}</p>
                <p><strong>Telefon:</strong> {order.customer?.phone}</p>
                <p><strong>Cím:</strong> {order.customer?.zip} {order.customer?.city}, {order.customer?.address}</p>
                <div>
                  <strong>Termékek:</strong>
                  {order.items?.length ? (
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={`${order.id}-${item.id || item.name}-${index}`}>{item.name} - {item.quantity} db - {formatPrice(item.price)}</li>
                      ))}
                    </ul>
                  ) : <p>Nincs termékadat.</p>}
                </div>
                <p><strong>Részösszeg:</strong> {formatPrice(order.pricing?.subtotal ?? order.total)}</p>
                <p><strong>Kedvezmény:</strong> -{formatPrice(order.pricing?.discountAmount ?? 0)}</p>
                <p><strong>Végösszeg:</strong> {formatPrice(order.pricing?.total ?? order.total)}</p>
                <p><strong>Státusz:</strong> {order.status === 'shipped' ? 'Feladva' : 'Új'}</p>
                <label><input type="checkbox" checked={order.status === 'shipped'} onChange={(event) => handleShippedChange(order.id, event.target.checked)} /> Kész, feladtam a csomagot</label>
              </article>
            ))}
          </div>
        </>
      )}

      {activeTab === 'design' && (
        <>
          <h2>Egyedi rendelések / árajánlatkérések</h2>
          <div className="order-controls">
            <input type="text" placeholder="Keresés (név, email, telefon, anyag, leírás)" value={designSearch} onChange={(event) => setDesignSearch(event.target.value)} />
            <select value={designFilter} onChange={(event) => setDesignFilter(event.target.value)}>
              <option value="all">Minden státusz</option>
              {designStatusOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </div>
          {filteredDesignRequests.length === 0 && <p>Nincs a szűrésnek megfelelő egyedi kérés.</p>}
          <div className="order-list">
            {filteredDesignRequests.map((request) => (
              <article className="card" key={request.id}>
                <h3>Ajánlatkérés azonosító: {request.id}</h3>
                <p><strong>Név:</strong> {request.fullName}</p>
                <p><strong>E-mail:</strong> {request.email}</p>
                <p><strong>Telefon:</strong> {request.phone}</p>
                <p><strong>Anyag:</strong> {request.material}</p>
                <p><strong>Darabszám:</strong> {request.quantity}</p>
                <p><strong>Határidő:</strong> {request.deadline}</p>
                <p><strong>Település:</strong> {request.city}</p>
                <p><strong>Referencia link:</strong> {request.fileUrl || 'Nincs megadva'}</p>
                <p><strong>Leírás:</strong> {request.message}</p>
                <p><strong>Státusz:</strong> {getDesignStatusLabel(request.status)}</p>
                <label className="status-select-label"><span>Státusz módosítása</span><select value={request.status || 'new'} onChange={(event) => handleDesignStatusChange(request.id, event.target.value)}>{designStatusOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
              </article>
            ))}
          </div>
        </>
      )}

      {activeTab === 'ideas' && (
        <>
          <h2>Admin ötletek és feladatok</h2>
          <p>Itt csak az áttekintő lista van. Rákattintás után külön oldalon lehet kommentelni és lezárni a feladatot.</p>

          <form className="form idea-form" onSubmit={onIdeaSubmit}>
            <input name="title" placeholder="Ötlet / feladat címe" value={ideaForm.title} onChange={onIdeaChange} required />
            <textarea name="description" placeholder="Részletes leírás" value={ideaForm.description} onChange={onIdeaChange} rows={4} required />
            <div className="idea-form-grid">
              <label className="labeled-field">
                <span>Beküldő neve</span>
                <small>Ki nevében kerül be ez az ötlet vagy feladat.</small>
                <select className="compact-select" name="authorName" value={ideaForm.authorName} onChange={onIdeaChange}>{teamMembers.map((name) => <option key={name} value={name}>{name}</option>)}</select>
              </label>
              <label className="labeled-field">
                <span>Kinek van kiosztva</span>
                <small>Ki foglalkozzon vele, kinek ajánlod elvégzésre.</small>
                <select className="compact-select" name="assigneeName" value={ideaForm.assigneeName} onChange={onIdeaChange}>{teamMembers.map((name) => <option key={name} value={name}>{name}</option>)}</select>
              </label>
              <label className="labeled-field">
                <span>Bejegyzés típusa</span>
                <small>`Ötlet` ha javaslat, `Feladat` ha konkrét teendő.</small>
                <select className="compact-select" name="kind" value={ideaForm.kind} onChange={onIdeaChange}><option value="task">Feladat</option><option value="idea">Ötlet</option></select>
              </label>
            </div>
            <button className="btn" type="submit" disabled={saving}>{saving ? 'Mentés...' : 'Ötlet / feladat létrehozása'}</button>
          </form>

          <div className="idea-filter-grid">
            <label className="labeled-field compact"><span>Keresés</span><input type="text" placeholder="Keresés cím, leírás, név alapján" value={ideaSearch} onChange={(event) => setIdeaSearch(event.target.value)} /></label>
            <label className="labeled-field compact"><span>Szűrés felelős szerint</span><select className="compact-select" value={ideaAssigneeFilter} onChange={(event) => setIdeaAssigneeFilter(event.target.value)}><option value="all">Minden felelős</option>{teamMembers.map((name) => <option key={name} value={name}>{name}</option>)}</select></label>
            <label className="labeled-field compact"><span>Innen dátumtól</span><input type="date" value={ideaDateFrom} onChange={(event) => setIdeaDateFrom(event.target.value)} /></label>
            <label className="labeled-field compact"><span>Eddig dátumig</span><input type="date" value={ideaDateTo} onChange={(event) => setIdeaDateTo(event.target.value)} /></label>
          </div>

          {filteredIdeas.length === 0 && <p>Nincs a szűrésnek megfelelő ötlet vagy feladat.</p>}

          <div className="idea-card-list">
            {filteredIdeas.map((idea) => (
              <article className="card idea-list-card" key={idea.id}>
                <div className="idea-list-main">
                  <div>
                    <h3>{idea.title}</h3>
                    <p><strong>Típus:</strong> {idea.kind === 'idea' ? 'Ötlet' : 'Feladat'}</p>
                    <p><strong>Beküldte:</strong> {idea.authorName}</p>
                    <p><strong>Kiosztva:</strong> {idea.assigneeName}</p>
                    <p><strong>Létrehozva:</strong> {formatDateValue(idea.createdAt)}</p>
                    <p><strong>Állapot:</strong> {isIdeaDone(idea) ? 'Készre nyilvánítva' : 'Nyitott'}</p>
                  </div>
                  <div className="idea-list-side">
                    <p><strong>Leírás röviden:</strong></p>
                    <p className="idea-snippet">{idea.description}</p>
                    <Link className="btn" to={`/admin/otlet/${idea.id}`}>Megnyitás</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default AdminPage;

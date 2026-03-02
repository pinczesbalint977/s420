import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { listProducts } from '../firebase/products';

function readCart() {
  return JSON.parse(localStorage.getItem('cart_items') || '[]');
}

function writeCart(items) {
  localStorage.setItem('cart_items', JSON.stringify(items));
}

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    listProducts()
      .then(setProducts)
      .catch((err) => {
        setError('Nem sikerült betölteni a termékeket. Ellenőrizd a Firestore szabályokat.');
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  function handleAddToCart(product) {
    const cart = readCart();
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.imageUrls?.[0],
        quantity: 1
      });
    }
    writeCart(cart);
    alert('Termék kosárba téve.');
  }

  if (loading) return <p>Töltés...</p>;

  return (
    <section>
      <h1>Lézergravírozott termékek</h1>
      <p className="lead">Kész termékek és egyedi gravírozás vállalása rövid határidővel.</p>
      {error && <p>{error}</p>}
      {!error && products.length === 0 && (
        <p>Még nincs aktív termék. Jelentkezz be adminként és adj hozzá terméket.</p>
      )}
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;

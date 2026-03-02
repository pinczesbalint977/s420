import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../firebase/products';
import { formatPrice } from '../utils/format';

function readCart() {
  return JSON.parse(localStorage.getItem('cart_items') || '[]');
}

function writeCart(items) {
  localStorage.setItem('cart_items', JSON.stringify(items));
}

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  function handleAddToCart() {
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

  if (!product) return <p>Töltés...</p>;

  return (
    <section>
      <h1>{product.name}</h1>
      <div className="gallery">
        {product.imageUrls?.map((url, index) => (
          <img key={`${url}-${index}`} src={url} alt={product.name} />
        ))}
      </div>
      <p>{product.description}</p>
      <p className="price">{formatPrice(product.price)}</p>
      <button className="btn" onClick={handleAddToCart}>
        Kosárba teszem
      </button>
    </section>
  );
}

export default ProductPage;

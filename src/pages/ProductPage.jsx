import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../firebase/products';
import { formatPrice } from '../utils/format';

function readCart() {
  return JSON.parse(localStorage.getItem('cart_items') || '[]');
}

function writeCart(items) {
  localStorage.setItem('cart_items', JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('cart-updated'));
}

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [id, product?.id]);

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
    window.dispatchEvent(new CustomEvent('app-toast', { detail: { message: 'Termék kosárba téve.' } }));
  }

  if (!product) return <p>Töltés...</p>;

  const sourceImages = Array.isArray(product.imageUrls) ? product.imageUrls.filter(Boolean) : [];
  const firstImage = sourceImages[0] || '';
  const detailImages = [
    firstImage,
    sourceImages[1] || firstImage,
    sourceImages[2] || firstImage
  ].filter(Boolean);

  const safeActiveIndex = Math.min(activeImageIndex, Math.max(detailImages.length - 1, 0));
  const activeImage = detailImages[safeActiveIndex] || firstImage;

  return (
    <section className="product-detail-page">
      <a href="/#home-products" className="btn product-detail-back-btn">
        Vissza a termékekhez
      </a>

      <div className="product-detail-layout">
        <div className="product-detail-media">
          <div className="product-detail-main-image-wrap">
            <div className="product-detail-progress" aria-hidden="true">
              {detailImages.map((_, index) => (
                <span
                  key={`progress-${index}`}
                  className={`product-detail-progress-segment ${safeActiveIndex === index ? 'active' : ''}`}
                />
              ))}
            </div>

            {activeImage ? (
              <img
                className="product-detail-main-image"
                src={activeImage}
                alt={product.name}
              />
            ) : (
              <div className="product-detail-main-image product-detail-no-image">
                Nincs kép feltöltve
              </div>
            )}

            <div className="product-detail-thumbs">
              {detailImages.map((url, index) => (
                <button
                  key={`${url}-${index}`}
                  type="button"
                  className={`product-detail-thumb ${safeActiveIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`${index + 1}. kép`}
                >
                  <img src={url} alt={`${product.name} - ${index + 1}. kép`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="price product-detail-price">{formatPrice(product.price)}</p>
          <p className="product-detail-description">
            {product.description || product.shortDescription || 'Nincs leírás megadva.'}
          </p>
          <button className="btn product-detail-cart-btn" onClick={handleAddToCart}>
            Kosárba
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;


import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';
import kosarIcon from '../pic/kosar.png';

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="card product-card">
      <div className="product-card-media">
        <img src={product.imageUrls?.[0]} alt={product.name} className="card-image product-card-image" />
      </div>
      <h3 className="product-card-title">{product.name}</h3>
      <p className="product-card-subtitle">{product.shortDescription}</p>
      <div className="product-card-footer">
        <p className="price product-card-price">{formatPrice(product.price)}</p>
        <div className="card-actions">
          <Link to={`/termek/${product.id}`} className="btn product-action-btn neon-hover">
            {'R\u00E9szletek'}
          </Link>
          <button
            className="btn secondary product-action-btn product-action-icon neon-hover"
            onClick={() => onAddToCart(product)}
            aria-label={'Kos\u00E1rba'}
            title={'Kos\u00E1rba'}
          >
            <img src={kosarIcon} alt="" aria-hidden="true" className="product-cart-icon" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

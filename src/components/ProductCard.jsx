import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="card">
      <img src={product.imageUrls?.[0]} alt={product.name} className="card-image" />
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <p className="price">{formatPrice(product.price)}</p>
      <div className="card-actions">
        <Link to={`/termek/${product.id}`} className="btn">
          Részletek
        </Link>
        <button className="btn secondary" onClick={() => onAddToCart(product)}>
          Kosárba
        </button>
      </div>
    </article>
  );
}

export default ProductCard;

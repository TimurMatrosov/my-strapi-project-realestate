import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../index.css'; // Adjust the path to the correct location of index.css

export default function Homepage() {
  const { data, error, loading } = useFetch('http://localhost:1337/api/products?populate=*');
  const { addToCart } = useContext(CartContext);

  const formatPrice = (price) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;
  console.log(data); // Log the data to see its structure

  return (
    <div className="container">
      <div className="header">
      </div>
      <div className="cart-link">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} /> go to favorites
        </Link>
      </div>
      {data && data.length > 0 ? (
        <div className="product-list">
          {data.map(product => (
            <div className="product-card" key={product.id}>
              <h2 className="product-title">{product.title}</h2>
              {product.image && product.image.length > 0 && product.image[0].url ? (
                <img className="product-image" src={`http://localhost:1337${product.image[0].url}`} alt={product.title} />
              ) : (
                <p className="no-image">No image available</p>
              )}
              <p className="product-price">{formatPrice(product.price)}</p>
              <div className="product-actions">
                <button className="add-button" onClick={() => addToCart(product)}>Add</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-products">No products available</div>
      )}
      <footer className="footer">
        <p>Contact us: matrosovta@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/timur-matrosov-859244155" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}

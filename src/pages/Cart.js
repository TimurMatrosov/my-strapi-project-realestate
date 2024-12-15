import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../index.css'; // Ensure you import the CSS file

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="cart-link">
        <Link to="/">Go back</Link>
      </div>
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <div className="product-list">
          {cart.map(product => (
            <div className="product-card" key={product.id}>
              <h2 className="product-title">{product.title}</h2>
              {product.image && product.image.length > 0 && product.image[0].url ? (
                <img className="product-image" src={`http://localhost:1337${product.image[0].url}`} alt={product.title} />
              ) : (
                <p className="no-image">No image available</p>
              )}
              <p className="product-price">${product.price}</p>
              <div className="product-actions">
                <button className="remove-button" onClick={() => removeFromCart(product)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-products">Your cart is empty</div>
      )}
    </div>
  );
}

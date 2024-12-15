import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const isProductInCart = prevCart.some(item => item.id === product.id);
      if (isProductInCart) {
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
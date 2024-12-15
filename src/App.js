import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import SiteHead from './components/SiteHead';
import { CartProvider } from './context/CartContext';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router basename="/my-strapi-project-realestate">
        <div className="container">
          <header>
            {/* Your header content */}
          </header>
          <div className="text">
            <SiteHead />
          </div>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

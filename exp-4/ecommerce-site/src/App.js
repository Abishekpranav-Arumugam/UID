import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the required CSS for toasts
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    // Display toast message when product is added to cart
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right", // Use string instead of toast.POSITION.BOTTOM_RIGHT
      autoClose: 2000, // Toast closes automatically after 2 seconds
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <ToastContainer /> {/* This is required to show toasts */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

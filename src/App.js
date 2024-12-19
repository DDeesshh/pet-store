import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (

    <Router>
      <Header />
      <main>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage />} />
        
          <Route path="/contacts" element={<Contacts />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
    
        </Routes>
      </main>
      <Footer />
    </Router>

  );
};

export default App;

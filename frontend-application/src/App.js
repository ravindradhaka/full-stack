import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const isAuthenticated = true; // Add your authentication logic here

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/products"
            element={isAuthenticated ? <ProductPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

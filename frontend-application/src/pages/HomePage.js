import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to Our Website</h2>
      <div className="options-container">
        <div className="option">
          <h3>Login</h3>
          <p>Already have an account? Login to access your products.</p>
          <Link to="/login">Login</Link>
        </div>
        <div className="option">
          <h3>Register</h3>
          <p>Create a new account to explore our products.</p>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

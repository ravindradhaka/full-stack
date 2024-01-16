import React, { useState } from 'react';
import './Login.css';
import { loginUser } from '../api';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      const response = await loginUser(credentials);
      console.log('Login successful:', response);

      // If the login is successful, you can perform additional actions,
      // such as updating the state, storing the token, or navigating to another page.
      
      // For example:
      // onLogin(response);

    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, display an error message, etc.
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

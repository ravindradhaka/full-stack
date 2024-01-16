import React, { useState } from 'react';
import { registerUser } from '../api';

const RegisterPage = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });

  const handleRegister = async () => {
    try {
      const response = await registerUser(userData);
      console.log('Registration successful:', response);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;

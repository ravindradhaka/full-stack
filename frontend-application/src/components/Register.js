import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [userData, setUserData] = useState({ username: '', password: '' });

  const handleRegister = () => {
    // Add any additional validation logic here
    onRegister(userData);
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

export default Register;

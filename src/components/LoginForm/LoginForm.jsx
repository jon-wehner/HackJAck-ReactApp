import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({ email, password }),
    };
    await fetch(`${process.env.REACT_APP_API_URI}/auth/login`, options);
  };
  return (
    <form onSubmit={login}>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
      <Link to="/register">No account yet? Sign up!</Link>
    </form>
  );
};

export default LoginForm;

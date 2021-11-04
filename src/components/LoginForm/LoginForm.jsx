import React, { useState } from 'react';

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
    <form onSubmit={login} className="w-full max-w-sm">
      <div className="mb-6">
        <label htmlFor="email" className="md:flex flex-row text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          Email:
          <input type="email" name="email" className="bg-gray-200 appearance-none border-2 border-gray rounded w-full py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
      <a href="/register">No account yet? Sign up!</a>
    </form>
  );
};

export default LoginForm;

import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
    </form>
  );
};

export default LoginForm;

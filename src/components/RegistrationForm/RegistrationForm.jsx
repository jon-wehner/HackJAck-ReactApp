import React, { useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  return (
    <form>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="name">
        Name:
        <input type="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label htmlFor="confirmPassword">
        Confirm Password:
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

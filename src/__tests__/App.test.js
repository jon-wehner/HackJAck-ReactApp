import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the login form', () => {
  render(<App />);
  const loginLink = screen.getByText("Login");
  expect(loginLink).toBeInTheDocument();
});

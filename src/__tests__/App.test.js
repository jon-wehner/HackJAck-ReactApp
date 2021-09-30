import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the login form', () => {
  render(<App />);
  const emailField = screen.getByText(/email/i);
  expect(emailField).toBeInTheDocument();
});

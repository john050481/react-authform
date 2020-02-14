import React from 'react';
import { render } from '@testing-library/react';
import AuthForm from './AuthForm/AuthForm';

test('renders Auth', () => {
  const { getByText } = render(<AuthForm />);
  const linkElement = getByText(/Your Website/i);
  expect(linkElement).toBeInTheDocument();
});

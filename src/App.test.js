import React from 'react';
import { render } from '@testing-library/react';
import Auth from './AuthForm/Auth';

test('renders Auth', () => {
  const { getByText } = render(<Auth />);
  const linkElement = getByText(/Your Website/i);
  expect(linkElement).toBeInTheDocument();
});

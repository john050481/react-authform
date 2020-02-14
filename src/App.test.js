import React from 'react';
import { render } from '@testing-library/react';
import AuthForm from './AuthForm/AuthForm';

test('renders Auth - Your Website', () => {
  const { getByText } = render(<AuthForm />);
  const linkElement = getByText(/Your Website/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Auth - Remember me', () => {
  const { getAllByText } = render(<AuthForm />);
  const elements = getAllByText(/Remember me/i);
  expect(elements.length).toEqual(1);
});

test('renders Auth - Sign Out', () => {
  const { getAllByText } = render(<AuthForm isAuth={true}/>);
  const elements = getAllByText(/Sign Out/i);
  expect(elements.length).toEqual(2);
});

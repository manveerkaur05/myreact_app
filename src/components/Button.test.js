// src/components/Button.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with correct text', () => {
  const { getByText } = render(<Button>Hello</Button>);
  const buttonElement = getByText(/Hello/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick prop when button is clicked', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
  const buttonElement = getByText(/Click me/i);
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalled();
});

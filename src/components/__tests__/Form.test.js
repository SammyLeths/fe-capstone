import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Reservations from '../../pages/reservations/Reservations';

it('Renders the reservation form subheading', async () => {
  render(<Reservations />);
  const headingElement = screen.getByRole('heading', {
    name: 'Experience the perfect balance of tradition and luxury',
  });
  expect(headingElement).toBeInTheDocument();
});

it('should render input element', async () => {
  render(<Reservations />);
  const inputElement = screen.getByPlaceholderText(/Enter number of guests/i);
  expect(inputElement).toBeInTheDocument();
});

test('enables button when date is entered', () => {
  render(<Reservations />);

  const buttonElement = screen.getByRole('button');

  expect(buttonElement).toHaveAttribute('disabled');
  expect(buttonElement).toBeDisabled();
});

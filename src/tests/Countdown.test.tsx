import React from 'react';
import { render, screen } from '@testing-library/react';
import { END_TIME } from '../App';
import { Countdown } from '../components';

test('renders learn react link', () => {
  render(<Countdown endTime={new Date(END_TIME)} />);
  const countdownElement = screen.getByTestId('cells-container');
  expect(countdownElement).toBeInTheDocument();
});

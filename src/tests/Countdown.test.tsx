import React from 'react';
import { render, screen } from '@testing-library/react';
import { END_TIME } from '../App';
import { Countdown } from '../components';
import '../locales/i18n';
import i18n from '../locales/i18n';

const time: Duration = {
  months: 3,
  days: 4,
  hours: 16,
  minutes: 52,
  seconds: 11
};

test('renders countdown', () => {
  render(<Countdown endTime={new Date(END_TIME)} />);
  const countdownElement = screen.getByTestId('cells-container');
  expect(countdownElement).toBeInTheDocument();
});

test('time cells render and each shows the correct value', () => {
  render(<Countdown endTime={new Date(END_TIME)} />);
  const cellElements: HTMLElement[] = [];
  Object.entries(time).forEach(([unit, value]) => {
    if (value || unit === 'seconds' || unit === 'minutes' || unit === 'hours')
      cellElements.push(screen.getByTestId(`cell-${i18n.t(unit)}`));
  });
  cellElements.forEach((el) => {
    expect(el).toBeInTheDocument();
  });
});

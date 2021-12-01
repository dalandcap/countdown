import React from 'react';
import { render, screen } from '@testing-library/react';
import { Countdown } from '../components';
import '../locales/i18n';
import i18n from '../locales/i18n';
import { add } from 'date-fns';

const time: Duration = {
  months: 3,
  days: 4,
  hours: 16,
  minutes: 52,
  seconds: 11
};

const endTime = add(new Date(), time);

test('renders countdown', () => {
  render(<Countdown endTime={new Date(endTime)} />);
  const countdownElement = screen.getByTestId('cells-container');
  expect(countdownElement).toBeInTheDocument();
});

test('time cells render and each shows the correct value', () => {
  render(<Countdown endTime={new Date(endTime)} />);
  const cellElements: HTMLElement[] = [];
  Object.entries(time).forEach(([unit, value]) => {
    if (value || unit === 'seconds' || unit === 'minutes' || unit === 'hours')
      cellElements.push(screen.getByTestId(`cell-${i18n.t(unit)}`));
  });
  cellElements.forEach((el) => {
    expect(el).toBeInTheDocument();
  });
});

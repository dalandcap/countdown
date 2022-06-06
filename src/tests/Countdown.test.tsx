import React from 'react';
import { render, screen } from '@testing-library/react';
import { Countdown } from '../components';
import '../locales/i18n';
import i18n from '../locales/i18n';
import { add } from 'date-fns';
import App from '../App';

jest.mock('react-router-dom', () => {
  const actualModule = jest.requireActual('react-router-dom');
  return {
    __esModule: true,
    ...actualModule,
    useLocation: () => {
      console.log('mocked useLocation called.');

      return {
        pathname: '/countdown',
      };
    },
  };
});

const time: Duration = {
  months: 3,
  days: 4,
  hours: 16,
  minutes: 52,
  seconds: 11,
};

const getEndTime = () => add(new Date(), time);

test('renders countdown', () => {
  render(<Countdown endTime={new Date(getEndTime())} />);
  const countdownElement = screen.getByTestId('cells-container');
  expect(countdownElement).toBeInTheDocument();
});

test('renders each time cell', () => {
  render(<Countdown endTime={new Date(getEndTime())} />);
  const cellElements: HTMLElement[] = [];
  Object.entries(time).forEach(([unit, value]) => {
    if (value || unit === 'seconds' || unit === 'minutes' || unit === 'hours')
      cellElements.push(screen.getByTestId(`cell-${i18n.t(unit)}`));
  });
  expect(cellElements.length).toBeGreaterThanOrEqual(3);
  cellElements.forEach((el) => {
    expect(el).toBeInTheDocument();
  });
});

test('each time cell renders the correct value', () => {
  render(<Countdown endTime={new Date(getEndTime())} />);
  const cellValues: Record<string, { el: ChildNode; value: number }> = {};
  Object.entries(time).forEach(([unit, value]) => {
    if (value || unit === 'seconds' || unit === 'minutes' || unit === 'hours')
      cellValues[unit] = {
        el: screen.getByTestId(`cell-${i18n.t(unit)}`).childNodes[0],
        value,
      };
  });
  Object.values(cellValues).forEach(({ el, value }) => {
    expect(Number(el.textContent)).toBe(value);
  });
});

test('renders correct pathname', () => {
  render(<App />);
  const locationEl = screen.getByTestId('location');
  expect(locationEl.textContent).toContain('countdown');
});

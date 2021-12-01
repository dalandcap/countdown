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
  seconds: 11,
};

const endTime = add(new Date(), time);

test('renders countdown', () => {
  render(<Countdown endTime={new Date(endTime)} />);
  const countdownElement = screen.getByTestId('cells-container');
  expect(countdownElement).toBeInTheDocument();
});

test('renders each time cell', () => {
  render(<Countdown endTime={new Date(endTime)} />);
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
  render(<Countdown endTime={new Date(endTime)} />);
  const cellValues: Record<string, { el: ChildNode; value: number }> = {};
  Object.entries(time).forEach(([unit, value]) => {
    if (value || unit === 'seconds' || unit === 'minutes' || unit === 'hours')
      cellValues[unit] = {
        el: screen.getByTestId(`cell-${i18n.t(unit)}`).childNodes[0],
        value,
      };
  });
  const secondsCell = cellValues.seconds;
  // the seconds will most probably alrady change by the time it is tested so it whould have a error margin of a few seconds
  expect(Number(secondsCell.el.textContent) <= secondsCell.value && Number(secondsCell.el.textContent) > secondsCell.value - 5).toBe(true);
  delete cellValues.seconds;
  Object.values(cellValues).forEach(({el, value}) => {    
    expect(Number(el.textContent) === value).toBe(true)
  })
});

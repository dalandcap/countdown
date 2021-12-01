import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '../locales/i18n';
import i18n from '../locales/i18n';

test('renders caption', () => {
  render(<App />);
  const countdownElement = screen.getByText(i18n.t('caption') as string);
  expect(countdownElement).toBeInTheDocument();
});

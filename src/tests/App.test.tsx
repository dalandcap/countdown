import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '../locales/i18n';
import i18n from '../locales/i18n';

test.skip('renders caption', () => {
  render(<App />);
  const captionEl = screen.getByText(i18n.t('caption') as string);
  expect(captionEl).toBeInTheDocument();
});

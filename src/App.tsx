import i18next from 'i18next';
import React, { FC } from 'react';
import { Countdown } from './components';
import { AppWrapper, Caption } from './components/styled';

const App: FC = () => (
  <div className="App">
    <AppWrapper>
      <Caption>{i18next.t('caption')}</Caption>
      <Countdown />
    </AppWrapper>
  </div>
);

export default App;

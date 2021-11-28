import i18next from 'i18next';
import React, { FC } from 'react';
import { Countdown } from './components';
import { AppWrapper, Caption } from './components/styled';

const END_TIME = '6 December 1998 07:14:52 GMT';

const App: FC = () => (
  <div className="App">
    <AppWrapper>
      <Caption>{i18next.t('caption')}</Caption>
      <Countdown endTime={new Date(END_TIME)} />
    </AppWrapper>
  </div>
);

export default App;

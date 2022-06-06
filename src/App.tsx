import i18next from 'i18next';
import React, { FC } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Countdown } from './components';
import { AppWrapper, Caption } from './components/styled';

export const END_TIME = '6 December 2021 07:14:52 GMT';

const App: FC = () => (
  <div className="App">
    <AppWrapper>
      <MemoryRouter initialEntries={['/countdown']}>
        <Routes>
          <Route
            path={'/countdown'}
            element={
              <>
                <Caption>{i18next.t('caption')}</Caption>
                <Countdown endTime={new Date(END_TIME)} />
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    </AppWrapper>
  </div>
);

export default App;

import i18next from 'i18next';
import React from 'react';
import TimeCell from './components/TimeCell/TimeCell';

const TIME_SEGMENTS = 'days';

function App() {
  return (
    <div className="App">
      <TimeCell value={60} label={i18next.t("days")}/>
    </div>
  );
}

export default App;

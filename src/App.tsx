import { intervalToDuration } from 'date-fns';
import i18next from 'i18next';
import React, { useState } from 'react';
import TimeCell from './components/TimeCell/TimeCell';

const END_TIME = '6 December 2021 07:14:52 GMT';

function App() {
  const [time, setTime] = useState(new Date(END_TIME));
  console.log(intervalToDuration({start: time, end: Date.now()}));

  return (
    <div className="App">
      <TimeCell value={60} label={i18next.t("days")}/>
    </div>
  );
}

export default App;

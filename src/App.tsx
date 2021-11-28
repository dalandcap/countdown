import { intervalToDuration } from 'date-fns';
import i18next from 'i18next';
import React, { useState } from 'react';
import TimeCell from './components/TimeCell/TimeCell';

const END_TIME = '6 December 2021 07:14:52 GMT';

function App() {
  const [time, setTime] = useState(intervalToDuration({start: new Date(END_TIME), end: Date.now()}));

  return (
    <div className="App">
      {Object.entries(time).map(([segment,value]) => <TimeCell label={segment} value={value}/>)}
    </div>
  );
}

export default App;

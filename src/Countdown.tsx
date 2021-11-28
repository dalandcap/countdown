import { intervalToDuration } from 'date-fns';
import i18next from 'i18next';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import TimeCell from './components/TimeCell/TimeCell';

const END_TIME = '6 December 2021 07:14:52 GMT';


const CellsContainer = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.time-cell {
  margin-left: -1px;
}
`;

const Countdown: FC = () => {
  const [time, setTime] = useState(intervalToDuration({start: new Date(END_TIME), end: Date.now()}));

  return (
    <CellsContainer>
      {Object.entries(time).map(([segment,value]) => <TimeCell label={i18next.t(segment)} value={value}/>)}
    </CellsContainer>
  );
}

export default Countdown;

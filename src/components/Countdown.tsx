import { intervalToDuration } from 'date-fns';
import i18next from 'i18next';
import React, { FC, useEffect, useState } from 'react';
import { CellsContainer } from './styled';
import Cell from './Cell';

const END_TIME = '6 December 2021 07:14:52 GMT';

const Countdown: FC = () => {
  const getCountdownDuration = () =>
    intervalToDuration({ start: new Date(END_TIME), end: Date.now() });

  const [time, setTime] = useState<Duration>(getCountdownDuration());

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(getCountdownDuration());
    }, 1000);
    return () => clearInterval(tick);
  }, [setTime]);

  return (
    <CellsContainer>
      {Object.entries(time).map(([segment, value]) => {
        // the cells for the semgments from hours and below should be shown always (presumably)
        const showCell =
          value ||
          segment === 'seconds' ||
          segment === 'minutes' ||
          segment === 'hours';
        return showCell ? (
          <Cell key={segment} label={i18next.t(segment)} value={value} />
        ) : null;
      })}
    </CellsContainer>
  );
};

export default Countdown;

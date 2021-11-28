import { intervalToDuration } from 'date-fns';
import i18next from 'i18next';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { CellsContainer } from './styled';
import Cell from './Cell';



const Countdown: FC<{endTime: Date}> = ({endTime}) => {
  const countdownDuration = useMemo(() =>
    intervalToDuration({ start: Date.now() , end: endTime }), [endTime]);

  const [time, setTime] = useState<Duration>(countdownDuration);

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(countdownDuration);
    }, 1000);
    return () => clearInterval(tick);
  }, [setTime, countdownDuration]);

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

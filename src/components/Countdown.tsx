import { intervalToDuration } from 'date-fns';
import i18next from 'i18next';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { CellsContainer } from './styled';
import Cell from './Cell';

const Countdown: FC<{ endTime: Date }> = ({ endTime }) => {
  const getCountdownDuration = useCallback(
    () => intervalToDuration({ start: Date.now(), end: endTime }),
    [endTime]
  );

  const [time, setTime] = useState<Duration>(getCountdownDuration());

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(getCountdownDuration());
    }, 1000);
    return () => clearInterval(tick);
  }, [setTime, getCountdownDuration]);

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

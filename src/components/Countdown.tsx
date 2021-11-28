import { intervalToDuration } from 'date-fns';
import i18next from 'i18next';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { CellsContainer } from './styled';
import Cell from './Cell';

type TimeUnit = 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years';

const Countdown: FC<{ endTime: Date; unitsToShow?: TimeUnit[] }> = ({
  endTime,
  unitsToShow = ['seconds', 'minutes', 'hours', 'days'],
}) => {
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
      {Object.entries(time).map(([unit, value]) => {
        const showCell = unitsToShow.includes(unit as TimeUnit);
        return showCell ? (
          <Cell key={unit} label={i18next.t(unit)} value={value} />
        ) : null;
      })}
    </CellsContainer>
  );
};

export default Countdown;

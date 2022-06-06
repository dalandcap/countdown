import { intervalToDuration } from 'date-fns';
import i18next from 'i18next';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { CellsContainer } from './styled';
import Cell from './Cell';
import { useLocation } from 'react-router-dom';

const Countdown: FC<{ endTime: Date }> = ({ endTime }) => {
  const getCountdownDuration = useCallback(
    () => intervalToDuration({ start: Date.now(), end: endTime }),
    [endTime]
  );

  const location = useLocation();

  console.log(location);

  const [time, setTime] = useState<Duration>(getCountdownDuration());

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(getCountdownDuration());
    }, 1000);
    return () => clearInterval(tick);
  }, [setTime, getCountdownDuration]);

  return (
    <>
      <div data-testid="location">{location.pathname}</div>
      <CellsContainer data-testid="cells-container">
        {Object.entries(time).map(([unit, value]) => {
          // the cells for the semgments from hours and below should be shown always (presumably)
          const showCell =
            value ||
            unit === 'seconds' ||
            unit === 'minutes' ||
            unit === 'hours';
          return showCell ? (
            <Cell key={unit} label={i18next.t(unit)} value={value} />
          ) : null;
        })}
      </CellsContainer>
    </>
  );
};

export default Countdown;

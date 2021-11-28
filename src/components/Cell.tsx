import React, { FC } from 'react';
import { CellLabel, CellValue, CellWrapper } from './styled';

const Cell: FC<{ value: number; label: string }> = ({ value, label }) => (
  <CellWrapper className="time-cell">
    <CellValue>{value}</CellValue>
    <CellLabel>{label}</CellLabel>
  </CellWrapper>
);

export default Cell;

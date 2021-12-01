import React, { FC } from 'react';
import { CellLabel, CellValue, CellWrapper } from './styled';

const Cell: FC<{ value: Number; label: string }> = ({ value, label }) => (
  <CellWrapper className="time-cell" data-testid={`cell-${label}`}>
    <CellValue>{value}</CellValue>
    <CellLabel>{label}</CellLabel>
  </CellWrapper>
);

export default Cell;

import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 8rem;
  height: 8rem;
  border: 2px solid black;
`;

const Value = styled.div`
  font-size: 4rem;
`;

const Label = styled.div`
  text-transform: uppercase;
`;

const TimeCell: FC<{ value: Number; label: string }> = ({ value, label }) => (
  <Wrapper>
    <Value>{value}</Value>
    <Label>{label}</Label>
  </Wrapper>
);

export default TimeCell;

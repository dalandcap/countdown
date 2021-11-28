import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 8rem;
  height: 8rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Value = styled.div`
  font-size: 4rem;
  font-weight: bold;
  line-height: .75em;
`;

const Label = styled.div`
  text-transform: uppercase;
  letter-spacing: .1em;
`;

const TimeCell: FC<{ value: Number; label: string }> = ({ value, label }) => (
  <Wrapper>
    <Value>{value}</Value>
    <Label>{label}</Label>
  </Wrapper>
);

export default TimeCell;

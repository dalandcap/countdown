import styled from 'styled-components';

export const CellsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* compensate from the margin-left of the fisrt cell since selecting the first child is not possible in styled-components and passing the the index to the cell wpuld be too much interference */
  margin-left: -1.5rem;

  .time-cell {
    margin-left: 1.5rem;
  }
`;

export const CellWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const CellValue = styled.div`
  font-size: 4rem;
  font-weight: bold;
  line-height: 0.75em;
`;

export const CellLabel = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 0.75em;
`;

export const AppWrapper = styled.div`
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
`;

export const Caption = styled.h3`
  margin-top: 0;
  text-transform: uppercase;
  font-weight: unset;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
`;

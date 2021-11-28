import i18next from 'i18next';
import React, { FC } from 'react';
import styled from 'styled-components';
import Countdown from './Countdown';

const Wrapper = styled.div`
height: 100vh;
margin: auto;
display: flex;
justify-content: center;
flex-direction: column;
width: fit-content;
`;

const Caption = styled.h3`
text-transform: uppercase;
font-weight: unset;
font-size: 1.5rem;
letter-spacing: .1em;
`;

const App: FC = () => (
  <div className="App">
    <Wrapper>
    <Caption>{i18next.t('caption')}</Caption>
    <Countdown />
    </Wrapper>
  </div>
);

export default App;

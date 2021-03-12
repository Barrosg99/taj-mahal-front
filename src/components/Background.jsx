import React from 'react';
import styled from 'styled-components';

export default function Background({ children }) {
  return (
    <BoxBackground>
      {children}
    </BoxBackground>
  );
}

const BoxBackground = styled.div`
  background-color: #42c3d5;
  height: 100%;
  min-height: 100vh;
  max-width: 100%;
`;

import React from 'react';
import styled from 'styled-components';

export default function Background({ children, color, url }) {
  return (
    <BoxBackground
      color={color || 'white'}
      url={url}
    >
      {children}
    </BoxBackground>
  );
}

const BoxBackground = styled.div`
  background-color: ${(props) => props.color};
  background-image: url(${(props) => `/assets/${props.url}`});
  background-repeat: no-repeat;
  background-size: cover;

  height: 100%;
  min-height: 100vh;
  max-width: 100%;
`;

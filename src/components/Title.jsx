import React from 'react';
import styled from 'styled-components';

export default function Title({ children, font }) {
  return (
    <BoxTitle
      font={font || 'TajMahal'}
    >
      {children}
    </BoxTitle>
  );
}

const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 18px 0px 0px;
  color: white;
  font-weight: 900;
  font-size: 40px;
  font-family: ${(props) => props.font}
`;

import React from 'react';
import styled from 'styled-components';

export default function ErrorContainer({ children }) {
  return <Error>{ children }</Error>;
}

const Error = styled.div`
  color: red;
  text-align:center;
  margin-top: 10px;
  font-size: 24px;
`;

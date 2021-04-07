import React from 'react';
import styled from 'styled-components';

export default function AwaitRegistration({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div`
  margin: 100px auto;
  color: white;
  font-size:40px;
  width: 60%;
  border-radius: 5px;
  text-align: center;
  font-family: TajMahal;
  font-weight: bold;

`;

import React from 'react';
import styled from 'styled-components';
import media from '../utils/mediaQuery';

export default function FormBox({ children, onSubmit, width }) {
  return (
    <FormContainer
      onSubmit={onSubmit}
      width={width}
    >
      {children}
    </FormContainer>
  );
}

const FormContainer = styled.form`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: ${(props) => (props.width ? props.width : '28%')};
  min-width: 360px;
  padding: 30px 25px 20px 25px;
  margin: 25px auto 0px auto;

  ${media}{
    width: 80%;
  }
`;

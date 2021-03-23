import React from 'react';
import styled from 'styled-components';

export default function Input({
  value, onChange, placeholder, type, background,
  required = true, display, width, margin,
}) {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      background={background || 'white'}
      type={type}
      required={required}
      width={width}
      display={display}
      margin={margin || '0px 0px 15px 0px'}
    />
  );
}

const StyledInput = styled.input`
  background: ${(props) => props.background};
  display: ${(props) => props.display || 'initial'};
  border-radius: 6px;
  width: ${(props) => props.width || '100%'};
  height: 50px;
  margin: ${(props) => props.margin};
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 2rem;
  color: #625f5f;
  border: 1px solid #B4B4B4;
  padding: 16px 21px 14px 21px;
  outline: none;

  ::placeholder {
    color: #9F9F9F;
  }
`;

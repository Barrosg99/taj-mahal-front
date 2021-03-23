import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';

export default function Button({
  onClick, type, disabledButton, children, margin, width, display,
}) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabledButton={disabledButton}
      margin={margin || '0px'}
      width={width || '100%'}
      display={display || 'initial'}
    >
      {disabledButton
        ? <Loading />
        : children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
    width: ${(props) => props.width};
    height: 50px;
    display:${(props) => props.display};
    line-height:28px;
    margin: ${(props) => props.margin};
    background: #495ec3;
    color: white;
    font-size: 22px;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

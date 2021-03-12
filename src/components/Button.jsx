import React from 'react';
import styled from 'styled-components';

export default function Button({
  onClick, type, disabledButton, children,
}) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabledButton={disabledButton}
    >
      {disabledButton
        ? 'Loading'
        : children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
    width: 100%;
    padding: 15px;
    background: #42c3d5;
    color: white;
    font-size: 22px;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

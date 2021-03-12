import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function TextLink({ to, children }) {
  return (
    <Link to={to}>
      <Text>
        {children}
      </Text>
    </Link>
  );
}

const Text = styled.h5`
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.1rem;
    text-decoration-line: underline;
    text-align: center;
    margin: 15px 0px;
    color: #787878;
`;

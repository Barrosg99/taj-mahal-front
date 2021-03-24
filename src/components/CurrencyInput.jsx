import React from 'react';
import IntlCurrencyInput from 'react-intl-currency-input';
import styled from 'styled-components';

const currencyConfig = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

export default function CurrencyInput({ onChange }) {
  return (
    <StyledInput
      currency="BRL"
      config={currencyConfig}
      onChange={onChange}
      placeholder="Valor da Compra"
      max={6000}
      margin="0px 0px 15px 0px"
    />
  );
}

const StyledInput = styled(IntlCurrencyInput)`
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

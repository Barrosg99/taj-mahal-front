/* eslint-disable no-unused-vars */
import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import styled from 'styled-components';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

import { CurrencyInput, Input } from '../../components';

export default function HistoriesComponent({
  history, index, handleHistory, removeHistory, addHistory,
}) {
  return (
    <FormContainer>
      <RadioGroup onChange={(e) => handleHistory('finality', e, index)} horizontal>
        <RadioButton
          value="reserva"
          iconSize={20}
          rootColor="#194977"
        >
          Reserva
        </RadioButton>
        <RadioButton
          value="comprasRep"
          iconSize={20}
          rootColor="#194977"
        >
          Compras Rep
        </RadioButton>
      </RadioGroup>
      <Input
        value={history.place}
        onChange={(e) => handleHistory('place', e.target.value, index)}
        placeholder="Aonde comprou?"
        margin="15px 0px 15px 0px"
        minLength={3}
      />
      <Input
        value={history.purchase}
        onChange={(e) => handleHistory('purchase', e.target.value, index)}
        placeholder="O que foi comprado?"
        minLength={3}
      />
      <CurrencyInput
        value={history.price}
        onChange={(e, value) => handleHistory('price', value, index)}
        mask={[/ [1-9]?[0-9]{1,5},[0-9]{2} /]}
      />
      <ButtonsContainer>
        <AiOutlinePlusCircle onClick={() => addHistory(index)} />
        <AiOutlineMinusCircle onClick={() => removeHistory(index)} />
      </ButtonsContainer>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 30px 25px 20px 25px;
  border-radius: 10px;
  margin-bottom:10px;
`;

const ButtonsContainer = styled.div`
  margin-bottom: 10px;

  svg {
    font-size: 28px;
  }

  svg:first-child {
    color: green;
    margin-right: 10px;
  }

  svg:nth-child(2) {
    color: red;
  }
`;

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Background, Button, FormBox, Input, Title,
} from '../../components';
import HistoriesComponent from './HistoriesComponent';
// (e) => console.log(e)
export default function RequestCard() {
  const [isCardAvailable, setIsCardAvailable] = useState(false);
  const [id, setId] = useState(1);
  const [cardHistories, setCardHistories] = useState([{
    finality: '', place: '', purchase: '', id,
  }]);
  // useEffect
  function requestCard() {
    // verificar disponibilidade do cartao
    setIsCardAvailable(true);
    // liberar ou informar quem tem
  }

  function handleHistory(name, value, index) {
    const histories = [...cardHistories];
    cardHistories[index][name] = value;
    setCardHistories(histories);
  }

  function removeHistory(index) {
    if (cardHistories.length === 1) return;

    const histories = [...cardHistories];
    histories.splice(index, 1);
    setCardHistories(histories);
  }

  function addHistory() {
    let count = id;
    count += 1;
    setId(count);
    setCardHistories([...cardHistories, {
      finality: '', place: '', purchase: '', id: count,
    }]);
  }

  return (
    <Background url="/tajsitebg.jpeg" padding="10px">
      <Title font="Roboto"> Cartão TajMahal </Title>
      {isCardAvailable
        ? (
          <FormBox width="80%" background="none" padding="0px">
            {cardHistories
              .map((history, index) => (
                <HistoriesComponent
                  key={history.id}
                  history={history}
                  index={index}
                  handleHistory={handleHistory}
                  removeHistory={removeHistory}
                  addHistory={addHistory}
                />
              ))}
            <Button type="submit">
              Liberar Cartão
            </Button>
          </FormBox>
        )
        : (
          <Button
            width="50%"
            margin="80px auto"
            display="block"
            onClick={requestCard}
          >
            Solicitar Cartão
          </Button>
        )}
    </Background>
  );
}

// const StyledDiv = styled.div`
//   background-color: #194977;
//   /* font-size: 50px; */
//   color: white;
//   width:100%;
//   height:100vh;

//   img {
//     width: 340px;
//   }
// `;

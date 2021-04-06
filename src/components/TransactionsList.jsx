/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, {
  useContext, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../context/UserContex';
import Button from './Button';
import TransactionsComponent from './TransactionsComponent';

export default function TransactionsList() {
  const { user } = useContext(UserContext);
  const [disabledButton, setDisabledButton] = useState(false);
  const [transitions, setTransitions] = useState([]);

  const getCardHistories = (days) => {
    setDisabledButton(true);

    const querry = days ? `?days=${days}` : '';

    axios.get(`${process.env.REACT_APP_URL_API}/card/histories${querry}`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then(({ data }) => {
        setTransitions(data);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 422) {
            return alert('Erro na querry string');
          }
        }
        return alert('Houve um erro desconhecido, tente novamente mais tarde');
      })
      .finally(() => setDisabledButton(false));
  };

  useEffect(getCardHistories, []);

  return (
    <Container>
      <Link to="/">Voltar</Link>
      <div>
        <Button
          width="180px"
          disabledButton={disabledButton}
          margin="0px 0px 10px"
          onClick={() => getCardHistories(7)}
        >
          Ultimos 7 dias
        </Button>
        <Button
          width="180px"
          disabledButton={disabledButton}
          margin="0px 0px 10px"
          onClick={() => getCardHistories(15)}
        >
          Ultimos 15 dias
        </Button>
        <Button
          width="180px"
          disabledButton={disabledButton}
          margin="0px 0px 10px"
          onClick={() => getCardHistories(30)}
        >
          Ultimos 30 dias
        </Button>
        <Button
          width="180px"
          disabledButton={disabledButton}
          margin="0px 0px 10px"
          onClick={() => getCardHistories()}
        >
          Todas
        </Button>
      </div>
      <TransactionsComponent transactions={transitions} />
    </Container>
  );
}
const Container = styled.main`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }

  a {
    text-align: center;
    padding: 12px;
    width: 180px;
    height: 50px;
    display: initial;
    line-height: 28px;
    margin: 0px 0px 10px;
    background: white;
    color: #495ec3;
    font-size: 22px;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  }

`;

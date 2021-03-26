/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImExit } from 'react-icons/im';
import axios from 'axios';
import { useHistory } from 'react-router';
import {
  Background, Button, FormBox, Input, Title,
} from '../../components';
import HistoriesComponent from './HistoriesComponent';
import UserContext from '../../context/UserContex';
import mediaQuery from '../../utils/mediaQuery';

export default function RequestCard() {
  const [id, setId] = useState(1);
  const [itsFilled, setItsFilled] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const [cardHistories, setCardHistories] = useState([{
    finality: '', place: '', purchase: '', price: '', id,
  }]);

  if (!user.token) {
    history.push('/');
  }

  axios.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${user.token}`;
    return req;
  });

  function requestCard() {
    setDisabledButton(true);

    axios
      .post(`${process.env.REACT_APP_URL_API}/users/card`, null)
      .then((res) => {
        if (res.status === 200) alert(`${res.data.nickname} está com o cartão`);

        else if (res.status === 202) {
          user.hasCard = true;
          setUser(user);
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            setUser({});
            return alert('Logue novamente');
          }
        }
        return alert('Houve um erro desconhecido, tente novamente mais tarde');
      })
      .finally(() => setDisabledButton(false));
  }

  function releaseCard() {
    setDisabledButton(true);

    axios
      .post(`${process.env.REACT_APP_URL_API}/users/card-release`, null)
      .then(() => {
        user.hasCard = false;
        setUser(user);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            setUser({});
            return alert('Logue novamente');
          }
        }
        return alert('Houve um erro desconhecido, tente novamente mais tarde');
      })
      .finally(() => setDisabledButton(false));
  }

  function onSubmit(e) {
    e.preventDefault();
    setDisabledButton(true);
    cardHistories.forEach((h) => delete h.id);
    axios
      .post(`${process.env.REACT_APP_URL_API}/card/histories`, cardHistories)
      .then(() => {
        user.hasCard = false;
        setUser(user);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            setUser({});
            return alert('Logue novamente');
          }
        }
        return alert('Houve um erro desconhecido, tente novamente mais tarde');
      })
      .finally(() => setDisabledButton(false));
  }

  useEffect(() => {
    cardHistories.forEach((h) => {
      if (h.finality || h.place || h.purchase || h.price) {
        return setItsFilled(true);
      }
      return setItsFilled(false);
    });
  }, [cardHistories]);

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

  function addHistory(index) {
    let count = id;
    count += 1;
    setId(count);
    const histories = [...cardHistories];
    histories.splice(index + 1, 0, {
      finality: '', place: '', purchase: '', price: '', id: count,
    });
    setCardHistories(histories);
  }

  function signOut() {
    if (window.confirm('Deseja deslogar?')) {
      axios
        .post(`${process.env.REACT_APP_URL_API}/users/sign-out`, null)
        .catch((err) => {
          if (err.response) {
            if (err.response.status === 401) {
              setUser({});
              return alert('Logue novamente');
            }
          }
          return alert('Houve um erro desconhecido, tente novamente mais tarde');
        })
        .finally(() => setUser({}));
    }
  }

  return (
    <Background url="/tajsitebg.jpeg" padding="10px">
      <TitleContainer>
        <Title font="Roboto"> Cartão TajMahal </Title>
        <ImExit onClick={signOut} />
      </TitleContainer>
      {user.hasCard
        ? (
          <FormBox
            width="80%"
            background="none"
            padding="0px"
            onSubmit={onSubmit}
            mediaWidth="100%"
          >
            {cardHistories
              .map((h, index) => (
                <HistoriesComponent
                  key={h.id}
                  history={h}
                  index={index}
                  handleHistory={handleHistory}
                  removeHistory={removeHistory}
                  addHistory={addHistory}
                />
              ))}
            {itsFilled
              ? (
                <Button type="submit" disabledButton={disabledButton}>
                  Liberar Cartão
                </Button>
              )
              : (
                <Button type="button" onClick={releaseCard} disabledButton={disabledButton}>
                  Liberar Cartão
                </Button>
              )}
          </FormBox>
        )
        : (
          <Button
            width="60%"
            margin="80px auto"
            display="block"
            onClick={requestCard}
            disabledButton={disabledButton}
          >
            Solicitar Cartão
          </Button>
        )}
    </Background>
  );
}
const TitleContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  svg {
    font-size: 26px;
    margin-top: 11px;
    color: red;
  }

  ${mediaQuery} {
    width: 100%;
    justify-content: space-evenly;
  }
`;

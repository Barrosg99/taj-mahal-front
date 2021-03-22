/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import {
  Title, FormBox, Input, Button, TextLink, ErrorContainer,
} from '../../components';
import UserContext from '../../context/UserContex';

export default function SignIn() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();
  function onSubmit(e) {
    e.preventDefault();
    setDisabledButton(true);
    setError(false);

    axios
      .post(`${process.env.REACT_APP_URL_API}/users/sign-in`, { email, password })
      .then((res) => {
        setUser(res.data);
        history.push('/cartao');
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 422) return setError('Erro ao preencher o formulário');
          if (err.response.status === 401) return setError('Email ou senha incorretos');
        }
        return setError('Houve um erro desconhecido, tente novamente mais tarde');
      })
      .finally(() => setDisabledButton(false));
  }

  return (
    <>
      <Title> República Taj Mahal</Title>
      <FormBox onSubmit={onSubmit}>
        <Input type="text" placeholder="e-mail" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" disabledButton={disabledButton}>Entrar</Button>
        {error && <ErrorContainer>{error}</ErrorContainer>}
        <TextLink to="/cadastro">
          Primeira vez? Crie uma conta!
        </TextLink>
      </FormBox>
    </>
  );
}

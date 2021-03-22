/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import {
  Title, FormBox, Input, Button, TextLink, ErrorContainer,
} from '../../components';
import UserContext from '../../context/UserContex';

export default function SignUp() {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [nickname, setNickName] = useState('');
  const [ra, setRa] = useState('');
  const [nextFields, setNextFields] = useState(false);
  const [error, setError] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    setDisabledButton(true);
    setError(false);
    if (password !== passwordConfirmation) {
      setError('As senhas não batem');
      setDisabledButton(false);
      return;
    }
    if (!ra || !nickname) {
      setNextFields(true);
      setDisabledButton(false);
      return;
    }
    axios
      .post(`${process.env.REACT_APP_URL_API}/users/sign-up`, {
        name,
        nickname,
        email,
        password,
        passwordConfirmation,
        ra,
      })
      .then(() => {
        axios
          .post(`${process.env.REACT_APP_URL_API}/users/sign-in`, { email, password })
          .then((res) => {
            setUser(res.data);
            history.push('/cartao');
          })
          .catch(() => {
            setError('Houve um erro desconhecido, tente novamente mais tarde');
          });
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 422) return setError('Erro ao preencher o formulário');
          if (err.response.status === 409) return setError('Email já está em uso');
        }
        return setError('Houve um erro desconhecido, tente novamente mais tarde');
      })
      .finally(() => setDisabledButton(false));
  }

  return (
    <>
      <Title> República Taj Mahal</Title>
      <FormBox onSubmit={onSubmit}>

        {nextFields
          ? (
            <>
              <Input
                placeholder="Apelido"
                value={nickname}
                onChange={(e) => setNickName(e.target.value)}
              />
              <Input
                placeholder="Ano que entrou na FEG"
                value={ra}
                onChange={(e) => setRa(e.target.value)}
              />
              <Button type="submit" disabledButton={disabledButton}>Cadastrar</Button>
              <Button
                onClick={() => setNextFields(false)}
                margin="8px 0px  0px"
              >
                Voltar
              </Button>
            </>
          )
          : (
            <>
              <Input
                type="email"
                placeholder="e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="password"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="confimar Senha"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              <Button type="submit" disabledButton={disabledButton}>Continuar</Button>
            </>
          )}
        {error
          && (
          <ErrorContainer>{error}</ErrorContainer>
          )}
        <TextLink to="/">
          Já tem conta? Faça seu login
        </TextLink>
      </FormBox>
    </>
  );
}

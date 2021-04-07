/* eslint-disable no-nested-ternary */
/* eslint-disable no-unreachable */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import {
  Title, FormBox, Input, Button, TextLink, ErrorContainer, AwaitRegistration,
} from '../../components';
import UserContext from '../../context/UserContex';

export default function SignUp() {
  const { user } = useContext(UserContext);
  const backButton = useRef(null);
  const [bb, setBb] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [nickname, setNickName] = useState('');
  const [ra, setRa] = useState('');
  const [phone, setPhone] = useState('');
  const [nextFields, setNextFields] = useState(false);
  const [error, setError] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const history = useHistory();

  if (user.token) {
    history.push('/cartao');
  }

  function onSubmit(e) {
    e.preventDefault();
    setDisabledButton(true);
    setError(false);

    axios
      .post(`${process.env.REACT_APP_URL_API}/users/sign-up`, {
        name,
        nickname,
        email,
        password,
        passwordConfirmation,
        ra,
        phone,
      })
      .then((res) => {
        if (res.status === 200) {
          setIsSent(true);
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 422) return setError('Erro ao preencher o formulário');
          if (err.response.status === 409) return setError('Email ou telefone já está em uso');
        }
        return setError('Houve um erro desconhecido, tente novamente mais tarde');
      })
      .finally(() => setDisabledButton(false));
  }

  function verifyFields(e) {
    e.preventDefault();
    setError(false);

    if (password !== passwordConfirmation) {
      setError('As senhas não batem');
      setDisabledButton(false);
      return;
    }

    setBb(null);
    if (e.nativeEvent.submitter === bb) return;
    setNextFields(!nextFields);
  }

  return (
    <>
      <Title> República Taj Mahal</Title>
      {isSent
        ? (<AwaitRegistration>Aguarde o email de confimarção</AwaitRegistration>)
        : nextFields
          ? (
            <FormBox onSubmit={onSubmit}>
              <Input
                placeholder="Apelido"
                value={nickname}
                onChange={(e) => setNickName(e.target.value)}
              />
              <Input
                placeholder="Ra"
                value={ra}
                onChange={(e) => setRa(e.target.value)}
                mask="99"
              />
              <Input
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                mask="99 99999-9999"
              />
              <Button type="submit" disabledButton={disabledButton}>Cadastrar</Button>
              <Button
                className="back-button"
                onClick={() => {
                  setBb(backButton.current);
                  setNextFields(false);
                }}
                margin="8px 0px  0px"
                myRef={backButton}
              >
                Voltar
              </Button>
              {error
                && (
                  <ErrorContainer>{error}</ErrorContainer>
                )}
            </FormBox>
          )
          : (
            <FormBox onSubmit={verifyFields}>
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
              <Button
                type="submit"
                disabledButton={disabledButton}
                display={nextFields && 'none'}
              >
                Continuar
              </Button>
              {error
                && (
                  <ErrorContainer>{error}</ErrorContainer>
                )}
              <TextLink to="/">
                Já tem conta? Faça seu login
              </TextLink>
            </FormBox>
          ) }
      {}
    </>
  );
}

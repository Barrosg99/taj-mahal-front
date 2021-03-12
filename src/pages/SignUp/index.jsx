/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import {
  Background, Title, FormBox, Input, Button, TextLink, SelectRep,
} from '../../components';

export default function SignUp() {
  const options = [
    { value: 'tajmahal', label: 'República TajMahal' },
    { value: 'ap', label: 'Apartamento' },
    { value: 'toid', label: 'Sou de Guará' },
  ];
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [nickName, setNickName] = useState('');
  const [ra, setRa] = useState('');
  const [place, setPlace] = useState();
  const [nextFields, setNextFields] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!ra || !place) setNextFields(true);
    console.log('entrei');
  }

  return (
    <Background>
      <Title> República Taj Mahal</Title>
      <FormBox onSubmit={onSubmit}>

        {nextFields
          ? (
            <>
              <Input
                placeholder="Apelido"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
              />
              <Input
                placeholder="Ano que entrou na FEG"
                value={ra}
                onChange={(e) => setRa(e.target.value)}
              />
              <SelectRep
                options={options}
                onChange={(e) => setPlace(e.value)}
              />
              <Button type="submit">Cadastrar</Button>
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
              <Button type="submit">Continuar Cadastro</Button>
            </>
          )}

        <TextLink to="/">
          Já tem conta? Faça seu login
        </TextLink>
      </FormBox>
    </Background>
  );
}

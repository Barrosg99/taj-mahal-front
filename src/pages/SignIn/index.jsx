import React from 'react';
// import styled from 'styled-components';

import {
  Background, Title, FormBox, Input, Button, TextLink,
} from '../../components';

export default function SignIn() {
  return (
    <Background>
      <Title> República Taj Mahal</Title>
      <FormBox>
        <Input type="text" placeholder="e-mail" />
        <Input type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <TextLink to="/cadastro">
          Primeira vez? Crie uma conta!
        </TextLink>
      </FormBox>
    </Background>
  );
}

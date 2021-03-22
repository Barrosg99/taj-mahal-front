import React from 'react';
// import styled from 'styled-components';
import { Background, FormBox, Title } from '../../components';

export default function RequestCard() {
  return (
    <Background url="/tajsitebg.jpeg">
      <Title font="Roboto"> Cartão TajMahal </Title>
      <FormBox>
        <div>
          <input type="radio" value="Male" name="gender" />
          Reserva
          <input type="radio" value="Female" name="gender" />
          Compras Rep
        </div>
      </FormBox>
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

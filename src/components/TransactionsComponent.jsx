import React from 'react';
import styled from 'styled-components';

export default function TransactionsComponent({ transactions }) {
  return (
    <List>
      <li>
        <div><span>Nome</span></div>
        <div><span>Finalidade</span></div>
        <div><span>Lugar</span></div>
        <div><span>Compra</span></div>
        <div><span>Valor</span></div>
        <div><span>Data</span></div>
      </li>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <div><span>{transaction.user.nickname}</span></div>
          <div><span>{transaction.finality}</span></div>
          <div><span>{transaction.place}</span></div>
          <div><span>{transaction.purchase}</span></div>
          <div><span>{`R$ ${transaction.price}`}</span></div>
          <div>
            <span>
              {
                `${new Date(transaction.createdAt).toLocaleDateString()}
                ${new Date(transaction.createdAt).toLocaleTimeString()}`
              }
            </span>
          </div>
        </li>
      ))}
    </List>
  );
}

const List = styled.ul`
  background-color: white;
  text-align: center;
  width: 95%;
  height: 490px;
  overflow: scroll;
  border-radius: 6px;
  box-shadow: 0px 0px 10px 4px #00000069;

  li {
    min-height: 25px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;

    div {
      width: 15%;
      border-right: 3px solid;
      padding: 3px;
      word-wrap: break-word;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    div:last-child {
      border: none;
    }
  }
`;

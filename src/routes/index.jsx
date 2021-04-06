import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  SignIn,
  SignUp,
  RequestCard,
  Transactions,
} from '../pages';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/cadastro" exact component={SignUp} />
      <Route path="/cartao" exact component={RequestCard} />
      <Route path="/transacoes" exact component={Transactions} />
    </Switch>
  );
}

export default Routes;

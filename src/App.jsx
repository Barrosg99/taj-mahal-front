import React from 'react';
import { Reset } from 'styled-reset';
import {
  BrowserRouter,
} from 'react-router-dom';
import Globalstyles from './utils/globalstyles';
import Routes from './routes';
import { UserProvider } from './context/UserContex';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Reset />
        <Globalstyles />
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

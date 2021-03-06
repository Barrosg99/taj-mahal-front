import { createGlobalStyle } from 'styled-components';

import mediaQuery from './mediaQuery';

const GlobalStyle = createGlobalStyle`

  body {
    background-image: url('/assets/tajbg.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    min-height: 100vh;
    max-width: 100%;
    font-family: 'Roboto';
  }

  @font-face {
    font-family: "TajMahal";
    src: url("/assets/pt-taj-mahal/pt-taj-mahal-webfont.woff") format("woff");
    src: url("/assets/pt-taj-mahal/pt-taj-mahal-webfont.woff2") format("woff2"),
  }

  button {
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid inherit;
    text-shadow: 0px 0px 0px transparent;
  }
  button:active {
    outline: none;
    border: none;
  }
  button:focus {
    outline: 0;
  }
  svg {
    cursor: pointer;
    color: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  html{
    font-size: 18px;
    ${mediaQuery}{
      font-size: 14px;
    }
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-border-radius: 10px;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #5B5B5B; 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #5B5B5B; 
  }
  `;
export default GlobalStyle;

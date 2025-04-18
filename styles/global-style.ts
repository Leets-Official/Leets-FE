import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
    background: black;
    font-size: 62.5%;
  }
`;

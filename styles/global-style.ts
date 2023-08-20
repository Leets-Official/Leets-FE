import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
    background: black;
  }
`;

export const PointerWrapper = styled.main`
  width: 100%;
  height: auto;

  cursor: none;
`;

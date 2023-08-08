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
  }

  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/dm-sans-v11-latin-regular.woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff2');
  }
`;

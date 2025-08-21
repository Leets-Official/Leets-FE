import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    background: black;
    font-size: 62.5%;
    overflow: -moz-scrollbars-none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    height: 100%;
    background: black;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  #__next {
    height: 100%;
  }
`;

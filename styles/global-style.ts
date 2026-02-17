import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    background: #F4F8FE;
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
    background: #F4F8FE;
    color: #153464;
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    letter-spacing: -0.02em;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  #__next {
    height: 100%;
  }
`;

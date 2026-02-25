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

  /* View Transition API - 페이지 전환 fade 효과 (JS에서 startViewTransition으로 트리거) */
  ::view-transition-old(root) {
    animation: vt-fade-out 0.15s ease forwards;
  }

  ::view-transition-new(root) {
    animation: vt-fade-in 0.15s ease forwards;
  }

  @keyframes vt-fade-out {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes vt-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* SweetAlert2 모달 border-radius */
  .swal-custom-popup {
    border-radius: 12px !important;
  }

  /* SweetAlert2 toast 텍스트 크기 */
  .swal2-toast.swal-custom-popup {
    padding: 16px 20px !important;

    .swal2-title {
      font-size: 17px !important;
      font-weight: 600 !important;
    }

    .swal2-html-container {
      font-size: 15px !important;
      margin-top: 2px !important;
    }

    .swal2-icon {
      width: 28px !important;
      height: 28px !important;
      margin: 0 10px 0 0 !important;
    }
  }
`;

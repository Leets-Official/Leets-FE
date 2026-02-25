import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    cursor: none !important;
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

  /* SweetAlert2: html font-size 62.5% 보정 (em 단위 기반 아이콘/텍스트 깨짐 방지) */
  .swal2-container {
    font-size: 1.6rem !important;
  }

  /* SweetAlert2는 body 직접 하위에 append되어 AdminContainer cursor: auto 범위 밖 */
  /* admin-mode 클래스일 때만 커서 복원 */
  html.admin-mode .swal2-container,
  html.admin-mode .swal2-container * {
    cursor: auto !important;
  }

  /* Ant Design DatePicker 드롭다운도 body에 포탈로 렌더링되므로 커서 복원 */
  html.admin-mode .ant-picker-dropdown,
  html.admin-mode .ant-picker-dropdown * {
    cursor: auto !important;
  }

  /* SweetAlert2 toast 스타일 */
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
  }
`;

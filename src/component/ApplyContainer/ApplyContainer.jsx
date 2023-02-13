/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const divStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 20vh;
  background-color: blue;
`;

export default function Apply() {
  return <div css={divStyle}>지원 페이지입니다.</div>;
}

import { css } from '@emotion/react';

export default (x, y, size) => css`
  transform: translate(${x}px, ${y}px);
  position: fixed;

  background-color: red;
  border-radius: 50%;
  width: ${size}rem;
  height: ${size}rem;
  left: -${size / 2}rem;
  top: -${size / 2}rem;

  opacity: 0.4;

  pointer-events: none;
`;

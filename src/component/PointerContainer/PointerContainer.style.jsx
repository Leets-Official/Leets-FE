import { css } from '@emotion/react';

export const containerStyle = css`
  width: 100vw;
  height: 100vh;
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const pointerStyle = (x, y, size) => css`
  transform: translate(${x}px, ${y}px);
  position: absolute;
  background-color: red;
  border-radius: 50%;
  width: ${size}rem;
  height: ${size}rem;
  left: -${size / 2}rem;
  top: -${size / 2}rem;
  opacity: 50%;
`;

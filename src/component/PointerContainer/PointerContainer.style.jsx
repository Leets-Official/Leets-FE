import { css } from '@emotion/react';

export const pointerContainerStyle = css`
  width: 100vw;
  height: 100vh;
  background-color: black;
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
  opacity: 0.4;

  pointer-events: none;
`;

export const sectionContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const linkStyle = css`
  width: 100px;
  height: 50px;

  text-align: center;
  line-height: 50px;

  border: none;
  border-radius: 8px;

  font-weight: 400;

  color: black;
  background: #f89b00;

  &:hover {
    color: black;
    background: white;
  }
  cursor: pointer;
  text-decoration: none;
`;

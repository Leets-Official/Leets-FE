import { css } from '@emotion/react';

export const pointerContainerStyle = css`
  width: 100vw;
  height: auto;
  background-color: black;
`;

export const pointerStyle = (x, y, size) => css`
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

export const titleContainer = css`
  width: 100%;
  height: 200px;

  margin-top: 150px;
  margin-bottom: 50px;
`;

export const titleStyle = css`
  color: white;
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 11vw;
  letter-spacing: -0.03em;

  line-height: 220px;
  text-align: center;
`;

export const applyContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: black;
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

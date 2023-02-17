import { css } from '@emotion/react';

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

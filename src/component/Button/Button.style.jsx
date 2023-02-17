import { css } from '@emotion/react';

export const applyContainer = css`
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: black;
`;

export const linkStyle = css`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;

  width: 150px;
  height: 60px;

  text-align: center;
  line-height: 60px;

  border: none;
  border-radius: 8px;

  color: black;
  background: #29b69a;

  &:hover {
    color: white;
    background: #29b69a;
  }
  cursor: pointer;
  text-decoration: none;
`;

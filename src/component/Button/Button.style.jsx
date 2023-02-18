import { css } from '@emotion/react';

export const applyContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: black;

  height: 200px;

  @media screen and (min-width: 768px) {
    height: 400px;
  }

  @media screen and (min-width: 1024px) {
    height: 400px;
  }
`;

export const linkStyle = css`
  font-family: 'Pretendard';
  font-weight: 500;

  font-size: 16px;
  width: 100px;
  height: 40px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 150px;
    height: 60px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

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

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
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  width: 30%;
  height: 5.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: #10dab2;
  border-radius: 40px;

  color: #1a1a1a;

  &:hover {
    color: white;
    background: #29b69a;
  }
  cursor: pointer;
  text-decoration: none;
`;

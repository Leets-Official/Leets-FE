import { css } from '@emotion/react';

export const formContainer = css`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: white;
`;

export const formStyle = css`
  width: 45%;
  height: auto;

  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  // border: 1px solid black;

  padding-bottom: 260px;
`;

export const headStyle = css`
  width: content;
  height: auto;
  background: white;
  text-align: center;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 8.8vw;

  letter-spacing: -0.03em;

  padding-bottom: 148px;
`;

export const writeStyle = css`
  background: white;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  text-align: center;
  letter-spacing: 0;
`;

export const fieldsetStyle = css`
  width: 100%;
  height: content;
  border: none;
  border-radius: 10px;
  background: white;

  padding: 0;
`;

export const ulStyle = css`
  padding: 0;
`;

export const buttonContainer = css`
  display: flex;
  justify-content: center;
  background: white;
`;

export const buttonStyle = css`
  width: 208px;
  height: 64px;

  background: #1a1a1a;
  border-radius: 40px;
  border: none;

  color: white;
  cursor: pointer;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    background: #29b69a;
  }
`;

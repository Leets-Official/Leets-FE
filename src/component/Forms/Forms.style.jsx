import { css } from '@emotion/react';

const backgrounds = {
  blue: '#3685FC',
  green: '#29B69A',
  yellow: '#FCB836',
};

export const formContainer = css`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: white;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 45%;
  height: auto;

  background: white;
  padding-bottom: 260px;
`;

export const headStyle = css`
  width: content;
  height: auto;

  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 8.8vw;
  text-align: center;

  background: white;
  letter-spacing: -0.03em;
  padding-bottom: 148px;
`;

export const writeStyle = css`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0;

  background: white;
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
  margin-top: 60px;
`;

export const buttonStyle = color => css`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 16px;

  width: 208px;
  height: 64px;

  border-radius: 40px;
  border: none;

  background: #1a1a1a;
  color: white;
  cursor: pointer;

  &:hover {
    background: ${backgrounds[color]};
  }
`;

export const guideStyle = css`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  justify-content: center;

  background: white;
  color: #666666;
  margin-top: 40px;
`;

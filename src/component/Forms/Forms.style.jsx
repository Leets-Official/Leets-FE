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

export const listStyle = css`
  list-style: none;

  display: flex;
  flex-direction: column;
  justyfi-content: center;

  background: white;
  padding-bottom: 40px;
`;

export const labelStyle = css`
  margin-bottom: 8px;
  background: white;

  display: flex;
  align-items: center;

  // border: 1px solid blue;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #666666;
`;

export const pStyle = css`
  background: white;

  margin-right: 8px;
`;

export const requireStyle = css`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #e15241;
`;

export const inputStyle = css`
  width: 100%;
  height: 56px;
  padding-left: 5px;
  background: white;

  &::placeholder {
    color: #adb1bd;
  }

  border: 1px solid #eaeaea;
  border-radius: 10px;
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

export const textareaStyle = css`
  width: 100%;
  height: 168px;
  background: white;

  &::placeholder {
    color: #adb1bd;
  }

  border: 1px solid #e6e6e6;
  border-radius: 8px;

  padding-left: 5px;
  padding-top: 15px;

  resize: none;
`;

import { css } from '@emotion/react';

export const formContainer = css`
  display: flex;
  justify-content: center;
  // align-items: center;

  width: 100%;
  height: 100vh;

  border-top: 1px solid blue;
`;

export const formStyle = css`
  width: 80%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const headStyle = css`
  width: 100%;
  height: 10vh;

  margin-left: 90px;
`;

export const fieldsetStyle = css`
  width: 80%;
  height: content;
  border: 1px solid blue;
  border-radius: 10px;

  padding: 50px;
`;

export const listStyle = css`
  list-style: none;

  display: flex;
  flex-direction: column;

  justyfi-content: center;
  padding: 10px;

  margin-left: 80px;
  margin-bottom: 5px;
`;

export const labelStyle = css`
  margin-bottom: 8px;
`;

export const inputStyle = css`
  width: 400px;
  height: 15px;

  &::placeholder {
    color: #adb1bd;
  }

  border: 1px solid #eaeaea;
  border-radius: 10px;

  padding: 15px;
`;

export const buttonContainer = css`
  display: flex;
  justify-content: center;

  margin: 40px 0;
`;

export const buttonStyle = css`
  width: 100px;
  height: 40px;

  border: none;
  border-radius: 8px;

  color: black;
  background: #f89b00;

  cursor: pointer;
`;

export const textareaStyle = css`
  width: 600px;
  height: 300px;

  &::placeholder {
    color: #adb1bd;
  }

  border: 1px solid #eaeaea;
  border-radius: 10px;

  padding: 15px;

  resize: none;
`;

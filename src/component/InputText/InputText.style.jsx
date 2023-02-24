import { css } from '@emotion/react';

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

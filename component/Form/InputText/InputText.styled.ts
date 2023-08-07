import { css } from '@emotion/react';

export const listStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: white;
  list-style: none;
  padding-bottom: 40px;
`;

export const labelStyle = css`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;

  background: white;
  margin-bottom: 8px;
  color: #666666;
`;

export const pStyle = css`
  background: white;

  margin-right: 8px;
`;

export const requireStyle = css`
  width: 8px;
  height: 8px;

  background: #e15241;
  border-radius: 8px;
`;

export const inputStyle = css`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  width: 100%;
  height: 56px;

  border: 1px solid #eaeaea;
  border-radius: 10px;

  padding-left: 5px;
  background: white;

  &::placeholder {
    color: #adb1bd;
  }
`;

import { css } from '@emotion/react';

export const listStyle = css`
  display: flex;
  flex-direction: column;
  justyfi-content: center;

  list-style: none;

  background: white;
  padding-bottom: 40px;
`;

export const labelStyle = css`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;

  margin-bottom: 8px;
  background: white;

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

export const textareaStyle = css`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  width: 100%;
  height: 168px;

  &::placeholder {
    color: #adb1bd;
  }

  border: 1px solid #e6e6e6;
  border-radius: 8px;

  background: white;
  padding-left: 8px;
  padding-top: 8px;
  resize: none;
`;

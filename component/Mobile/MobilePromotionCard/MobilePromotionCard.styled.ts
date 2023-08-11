import { css } from '@emotion/react';

export const sectionContainer = css`
  width: 100%;

  margin-top: 80px;
`;

export const contentContainer = css`
  width: 100%;
  height: 100%;

  padding-left: 16px;
  padding-right: 16px;
`;

export const topContainer = css`
  padding-bottom: 64px;
`;

export const subjectStyle = css`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 42px;
  line-height: 100%;

  color: #ffffff;
`;

export const imgContianer = css`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
`;

export const imgStyle = (height: number) => css`
  width: 240px;
  height: ${height}px;
`;

export const bottomContainer = css`
  width: 100%;
  height: 100%;
`;

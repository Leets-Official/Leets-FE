import { css } from '@emotion/react';

export const sectionContainer = css`
  margin-top: 80px;

  width: 100%;
  // height: 1098px;

  // border: 1px solid white;
`;

export const contentContainer = css`
  width: 100%;
  height: 100%;

  padding-left: 16px;
  padding-right: 16px;

  // border: 1px solid red;
`;

export const topContainer = css`
  padding-bottom: 64px;

  // border: 1px solid blue;
`;
export const subjectStyle = css`
  font-family: 'DM Sans';
  font-style: normal;
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
  // border: 1px solid white;
`;

export const imgStyle = height => css`
  width: 240px;
  height: ${height}px;

  // border: 1px solid yellow;
`;

export const bottomContainer = css`
  width: 100%;
  height: 100%;

  // border: 1px solid green;
`;

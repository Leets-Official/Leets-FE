import { css } from '@emotion/react';

export const sectionContainer = css`
  font-family: 'DM Sans';
  width: 100%;
  height: 1000px;

  background: black;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: 1px solid white;
`;

export const subjectStyle = css`
  font-weight: 500;
  font-size: 6.6vw; // 96px

  color: white;

  border: 1px solid skyblue;
`;

export const describeStyle = css`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 1rem;

  color: white;

  border: 1px solid red;

  margin-bottom: 100px;
`;

export const textStyle = css`
  margin-top: 10px;
`;

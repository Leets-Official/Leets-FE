import { css } from '@emotion/react';

export const sectionContainer = css`
  font-family: 'DM Sans';
  width: 100%;
  height: 1000px;

  background: black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  // border-bottom: 6px double #29b69a;

  // border: 2px solid pink;
`;

export const subjectStyle = css`
  font-weight: 500;
  font-size: 6.6vw; // 96px

  color: white;

  padding-left: 120px;

  // border: 1px solid skyblue;
`;

export const describeStyle = css`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 1.2rem;

  color: white;

  padding-left: 120px;
  margin-top: 50px;

  // border: 1px solid red;
`;

export const listStyle = css`
  margin-top: 10px;
  margin-bottom: 5px;
  list-style: none;
`;

export const imgStyle = size => css`
  width: ${size}px;
  height: ${size}px;

  // border: 1px solid blue;
`;

export const infoContainer = css`
  width: 60%;
  height: auto;

  display: flex;
  flex-direction: column;
  // border: 3px solid yellow;
`;
export const imgContainer = css`
  width: 40%;
  height: 600px;

  display: flex;
  // border: 3px solid yellow;
`;

export const hrStyle = css`
  // height: 1px;
  border: 0;
  background: #29b69a;

  width: 100%;
`;

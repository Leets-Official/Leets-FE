import { css } from '@emotion/react';

export const sectionContainer = css`
  font-family: 'DM Sans';
  width: 100%;
  height: 1000px;

  background: black;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const subjectStyle = css`
  font-weight: 500;
  font-size: 6.6vw; // 96px

  color: white;

  padding-left: 120px;
`;

export const describeStyle = css`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 1.2rem;

  color: white;

  padding-left: 120px;
  margin-top: 50px;
`;

export const listStyle = css`
  margin-top: 10px;
  margin-bottom: 5px;
  list-style: none;
`;

export const imgStyle = size => css`
  width: ${size}px;
  height: ${size}px;
`;

export const infoContainer = css`
  width: 60%;
  height: auto;

  display: flex;
  flex-direction: column;
`;
export const imgContainer = css`
  width: 40%;
  height: 600px;

  display: flex;
`;

export const hrStyle = css`
  border: 0;
  background: #29b69a;

  width: 100%;
`;

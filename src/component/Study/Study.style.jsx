import { css } from '@emotion/react';

export const contentContainer = css`
  width: 100%;
  height: 100%;

  // border: 1px solid white;

  color: white;
`;

export const gridContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2%;

  height: content;

  // border: 3px solid blue;
`;

export const blockStyle = css`
  width: 100%;
  height: 11.6vw;

  // border: 1px solid red;

  background: #0f0f0f;
  border-radius: 24px;
`;

export const benefitContainer = css`
  display: flex;
  flex-direction: column;
  background: #0f0f0f;
  border-radius: 24px;

  height: 11.6vw;

  padding-left: 2vw;
  padding-top: 0.8vw;
`;

export const numberStyle = css`
  background: #0f0f0f;
  border-radius: 24px;

  width: 30%;
  height: auto;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;

  color: #666666;
`;
export const textStyle = css`
  background: #0f0f0f;

  margin-top: 1.1%;
  // border: 1px solid white;
  width: 80%;
`;

export const flexContainer = css`
  width: 100%;
  // border: 1px solid yellow;

  display: flex;
  justify-content: center;
`;

export const flexBlockStyle = css`
  width: 33%;
  height: 11.6vw;

  // border: 1px solid red;

  background: #0f0f0f;
  border-radius: 24px;

  margin: 1%;
  margin-top: 1.5%;
`;

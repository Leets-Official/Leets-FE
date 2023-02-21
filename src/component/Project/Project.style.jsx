import { css } from '@emotion/react';
// import mq from '../../utils/viewports';

export const contentContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;

  height: 100%;
  gap: 2%;

  // border: 1px solid white;
`;

export const blockStyle = css`
  width: 100%;
  height: 11.6vw;

  display: flex;
`;

export const numberContainer = css`
  width: 32.5%;

  background: #0f0f0f;
  border-radius: 24px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;

  padding-top: 1.9vw;

  color: #666666;
`;

export const numberStyle = css`
  background: #0f0f0f;
  border-radius: 24px;

  padding-left: 13%;

  width: 50%;
  height: auto;
`;

export const benefitContainer = css`
  width: 67.5%;

  display: flex;
  background: #0f0f0f;
  border-radius: 24px;

  padding-left: 7%;
  padding-top: 6.5%;

  justify-content: space-between;
`;

export const textStyle = css`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  background: #0f0f0f;

  width: 65%;
  height: 72px;
`;

export const iconContainer = css`
  background: #0f0f0f;

  display: flex;
  align-items: end;
  padding-bottom: 3.7%;
  padding-right: 3.7%;

  border-radius: 24px;
`;

export const imgStyle = css`
  background: #0f0f0f;
  width: 5vw;
  height: 5vw;
`;

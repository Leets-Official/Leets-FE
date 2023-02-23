import { css } from '@emotion/react';

export const contentContainer = css`
  // border: 1px solid white;
  width: 100%;
`;

export const bottomContainer = css`
  // border: 1px solid green;

  width: 100%;
`;

export const balloon = index => css`
  width: 100%;
  height: 140px;

  margin-bottom: 24px;

  // border: 1px solid olive;

  background: #0f0f0f;
  border-radius: 76px;

  position: relative;

  ::after {
    content: '';
    position: absolute;

    margin-left: ${index % 2 ? 6.6 : 75}%;
    bottom: -8px;

    transform: rotate(${index % 2 ? '-22deg' : '22deg'});

    width: 0px;
    height: 0px;

    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    // border-bottom: 50px solid olive;
    border-bottom: 50px solid #0f0f0f;
  }
`;

export const textContainer = css`
  color: white;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 65%;

  white-space: pre-wrap;
  background: #0f0f0f;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  // border: 1px solid white;
  text-align: center;
`;

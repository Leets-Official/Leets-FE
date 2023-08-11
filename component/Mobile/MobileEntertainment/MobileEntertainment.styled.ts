import { css } from '@emotion/react';

export const contentContainer = css`
  width: 100%;
`;

export const balloon = (index: number) => css`
  position: relative;

  width: 100%;
  height: 140px;

  background: #0f0f0f;
  margin-bottom: 24px;
  border-radius: 76px;

  ::after {
    content: '';
    position: absolute;

    bottom: -8px;

    margin-left: ${index % 2 ? 6.6 : 75}%;
    transform: rotate(${index % 2 ? '-22deg' : '22deg'});

    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    border-bottom: 50px solid #0f0f0f;
  }
`;

export const textContainer = css`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 65%;

  background: #0f0f0f;
  white-space: pre-wrap;
  color: white;
`;

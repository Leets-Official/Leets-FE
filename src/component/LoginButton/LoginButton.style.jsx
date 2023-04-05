import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const loginBackground = css`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;

  background: white;
`;

export const loginContainer = css`
  width: 45%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: white;
`;

export const buttonContainer = css`
  width: 100%;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const buttonStyle = css`
  width: 320px;
  height: 60px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 5px;
  border: 1px solid #d3d3d3;

  background: white;
  cursor: pointer;
`;

export const imageStyle = css`
  width: 30px;
  height: 30px;

  background: white;
`;

export const textStyle = css(
  mq({
    fontFamily: 'Pretendard',
    fontWeight: '700',
    fontSize: [13, 18, 18, 20.0],
    lineHeight: '24px',

    background: 'white',
  })
);

export const headStyle = css`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 8.8vw;
  text-align: center;

  width: content;
  height: auto;

  background: white;
  letter-spacing: -0.03em;
  padding-bottom: 148px;
`;

export const writeStyle = css`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 24px;
  text-align: center;

  background: white;
  letter-spacing: 0;
`;

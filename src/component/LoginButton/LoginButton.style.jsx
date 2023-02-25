import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const loginBackground = css`
  width: 100%;
  height: 100vh;

  background: white;

  display: flex;
  justify-content: center;
  // border: 1px solid black;
`;

export const loginContainer = css`
  width: 45%;
  height: 100%;

  background: white;

  display: flex;
  align-items: center;
  flex-direction: column;

  // border: 1px solid blue;
`;

export const buttonContainer = css`
  width: 100%;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;

  // border: 1px solid red;
`;

export const buttonStyle = css`
  width: 320px;
  height: 60px;

  border-radius: 5px;

  background: white;

  cursor: pointer;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border: 1px solid #d3d3d3;
`;

export const imageStyle = css`
  width: 30px;
  height: 30px;
  background: white;

  // border: 1px solid black;
`;

export const textStyle = css(
  mq({
    background: 'white',

    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: [13, 18, 18, 20.0],
    lineHeight: '24px',

    // border: 1px solid blue,
  })
);

export const headStyle = css`
  width: content;
  height: auto;
  background: white;
  text-align: center;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 8.8vw;

  letter-spacing: -0.03em;

  padding-bottom: 148px;
`;

export const writeStyle = css`
  background: white;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  text-align: center;
  letter-spacing: 0;
`;

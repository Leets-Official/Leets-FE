import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const navStyle = css`
  background-color: black;

  // border: 1px solid black;
`;

export const home = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: white;
  padding-left: 3.81vw;

  width: 100%;
  height: 80px;

  // border: 1px solid blue;
`;

export const welcomeContainer = userName => css`
  background: white;

  display: flex;
  justify-content: ${userName ? 'space-between' : 'flex-end'};

  margin-right: 3.81vw;

  // border: 1px solid red;
`;

export const linkStyle = css`
  font-family: 'DM Sans';
  font-style: normal;

  text-decoration: none;
  background: white;

  font-weight: 400px;
  font-size: 26px;
  color: black;

  // border: 1px solid red;
`;

export const welcomeStyle = css`
  background: white;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  // border: 1px solid red;
`;

export const buttonStyle = userName =>
  css(
    mq({
      fontFamily: 'Pretendard',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '14px',

      padding: 0,

      display: userName ? '' : 'none',

      color: '#29b69a',
      background: 'white',

      cursor: 'pointer',

      border: 'none',

      paddingLeft: [17.1, 17.1, 24.6, 30.0],
      // border: 1px solid blue;
    })
  );

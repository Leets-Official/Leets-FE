import { css } from '@emotion/react';
import mq from '../../utils/viewports';

const backgrounds = {
  blue: '#3685FC',
  green: '#29B69A',
  yellow: '#FCB836',
};

export const navStyle = css`
  background-color: black;
`;

export const home = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;

  background: white;
  padding-left: 3.81vw;
`;

export const welcomeContainer = userName => css`
  display: flex;
  justify-content: ${userName ? 'space-between' : 'flex-end'};

  background: white;
  margin-right: 3.81vw;
`;

export const linkStyle = css`
  font-family: 'DM Sans';
  font-weight: 400px;
  font-size: 26px;

  background: white;
  text-decoration: none;
  color: black;
`;

export const welcomeStyle = css`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  background: white;
`;

export const buttonStyle = (userName, color) =>
  css(
    mq({
      fontFamily: 'Pretendard',
      fontWeight: '600',
      fontSize: '14px',

      display: userName ? '' : 'none',

      color: backgrounds[color],
      background: 'white',
      padding: 0,
      cursor: 'pointer',
      marginLeft: [17.1, 17.1, 24.6, 30.0],

      border: 'none',
    })
  );

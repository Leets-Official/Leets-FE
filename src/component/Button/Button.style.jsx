import { css } from '@emotion/react';
import mq from '../../utils/viewports';

const backgrounds = {
  green: '#10DAB2',
  blue: '#3685FC',
  yellow: '#FCB836',
};

const colors = {
  green: 'black',
  blue: 'white',
  yellow: 'black',
};

export const applyContainer = css(
  mq({
    display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',

    background: 'black',

    width: '100%',
    height: [193.4, 193.6, 278.6, 340.0],

    // border: '1px solid white',
  })
);

export const linkStyle = color =>
  css(
    mq({
      fontFamily: 'Pretendard',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: [11.4, 11.4, 16.4, 20.0],

      width: [245.7, 246.0, 354.0, 432.0],
      height: [45.5, 45.6, 65.6, 80.0],

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      border: 'none',
      background: backgrounds[color],
      borderRadius: '40px',

      color: colors[color],

      '&:hover': {
        color: 'white',
        background: '#29b69a',
      },

      cursor: 'pointer',
      textDecoration: 'none',
    })
  );

import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const contentContainer = css(
  mq({
    width: '100%',
    height: '100%',

    // border: '1px solid blue',
  })
);

export const gridContainer = css(
  mq({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: [9.1, 9.1, 13.1, 16.0],

    // display: 'flex',
    width: '90%',
    height: [122.8, 123.0, 177.0, 216.0],

    margin: '0 auto',

    // border: '1px solid white',

    textAlign: 'center',
  })
);

export const balloon = index =>
  css(
    mq({
      width: '100%',
      height: [86.5, 86.6, 124.6, 152.0],
      // width: [230.3, 230.6, 331.9, 405.0],
      // height: [95.5, 95.7, 137.7, 168.0],
      position: 'relative',

      // border: '1px solid white',

      background: '#0f0f0f',
      borderRadius: [43.2, 43.3, 62.3, 76.0],

      '&:after': {
        content: '""',
        position: 'absolute',
        marginLeft: index % 2 ? '-45%' : '15.8%',
        transform: `rotate(${index % 2 ? '-22deg' : '22deg'})`,
        bottom: [-4.9, -4.9, -7.1, -8.6],
        // left: index % 2 ? [-11.4, -11.4, -16.4, -20.0] : 0,

        width: '0px',
        height: '0px',

        borderRight: [
          '20px solid transparent',
          '32.8px solid transparent',
          '47.2px solid transparent',
          '57.6px solid transparent',
        ],

        borderLeft: [
          '20px solid transparent',
          '32.8px solid transparent',
          '47.2px solid transparent',
          '57.6px solid transparent',
        ],

        borderBottom: ['40px solid #0f0f0f', '57px solid #0f0f0f', '81.9px solid #0f0f0f', '100px solid #0f0f0f'],
        // borderBottom: ['45px solid olive', '57px solid olive', '81.9px solid olive', '100px solid olive'],
      },

      ':nth-of-type(2)': {
        alignSelf: 'end',
      },
    })
  );

export const textStyle = css(
  mq({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '3',

    width: '80%',
    whiteSpace: 'pre-wrap',
    lineHeight: 1.5,

    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: [9, 11, 16, 20],

    background: '#0f0f0f',
  })
);

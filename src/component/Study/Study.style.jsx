import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const contentContainer = css`
  width: 100%;
  height: 100%;

  color: white;

  // border: 1px solid white;
`;

export const gridContainer = css(
  mq({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: [9.1, 9.1, 13.1, 16.0],

    height: 'content',
    // border: '3px solid blue',
  })
);

export const benefitContainer = css(
  mq({
    display: 'flex',
    flexDirection: 'column',
    background: '#0f0f0f',
    borderRadius: '24px',

    // width: [245.7, 246.0, 354.0, 432.0],
    height: [97, 100, 140, 172],

    paddingLeft: [18, 18.2, 26.2, 32.0],
    paddingTop: [6.8, 6.8, 9.8, 12.0],

    // border: '1px solid yellow',
  })
);

export const numberStyle = css(
  mq({
    width: '20%',
    height: 'auto',

    background: '#0f0f0f',
    borderRadius: '24px',

    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: [27, 27, 39, 48],

    color: '#666666',

    // border: '1px solid white',
  })
);

export const textStyle = css(
  mq({
    background: '#0f0f0f',
    width: '90%',

    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: [9, 11, 16, 18],
    marginTop: [1, 1, 3, 8.0],

    whiteSpace: 'pre-wrap',

    lineHeight: 1.5,

    // border: '1px solid red',
  })
);

export const flexContainer = css`
  width: 100%;

  display: flex;
  justify-content: center;

  // border: 1px solid yellow;
`;

export const flexBlockStyle = css(
  mq({
    width: '33%',
    height: [97, 100, 140, 172],

    background: '#0f0f0f',
    borderRadius: '24px',

    margin: [4.5, 4.6, 6.6, 8.0],
    marginTop: [9.1, 9.1, 13.1, 16.0],

    // border: '1px solid white',
  })
);

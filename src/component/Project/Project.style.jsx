import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const contentContainer = css(
  mq({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',

    width: '100%',
    height: '100%',
    gap: [18, 18, 26, 32],
    // border: '1px solid white';
  })
);

export const blockStyle = css(
  mq({
    width: '100%',
    height: [95, 96, 137, 168],

    display: 'flex',
  })
);

export const numberContainer = css(
  mq({
    width: '32.5%',
    // width: [117, 118, 170, 208],

    background: '#0f0f0f',
    borderRadius: '24px',

    padding: [15, 16, 22, 28],

    // border: '1px solid red',
  })
);

export const numberStyle = css(
  mq({
    width: '50%',
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

export const benefitContainer = css(
  mq({
    width: '67.5%',

    display: 'flex',
    justifyContent: 'space-between',

    background: '#0f0f0f',
    borderRadius: '24px',
    // border: '1px solid white',
  })
);

export const textStyle = css(
  mq({
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: [9, 13, 14, 16],
    background: '#0f0f0f',

    width: '100%',
    height: 'content',

    marginTop: [20, 21, 27, 33],
    marginLeft: [18, 18, 26, 32],

    // border: '1px solid blue',
  })
);

export const iconContainer = css`
  background: #0f0f0f;

  display: flex;
  align-items: end;

  border-radius: 24px;
  // border: 1px solid white;
`;

export const imgStyle = css(
  mq({
    background: '#0f0f0f',
    borderRadius: '24px',

    width: [41, 41, 59, 72],
    height: [41, 41, 59, 72],

    marginRight: [9, 9, 13, 16],
    marginBottom: [9, 9, 13, 16],
  })
);

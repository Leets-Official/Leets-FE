import { css } from '@emotion/react';
import mq from '@/utils/viewports';

export const contentContainer = css(
  mq({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: [18, 18, 26, 32],

    width: '100%',
    height: '100%',
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
    fontFamily: 'DM Sans',
    fontWeight: '400',
    fontSize: [27, 27, 39, 48],

    width: '32.5%',

    backgroundColor: '#0f0f0f',
    borderRadius: '24px',
    paddingTop: [12.5, 12.5, 12.0, 22.0],
    paddingLeft: [15, 16, 22, 28],
  })
);

export const numberStyle = css`
  width: 50%;
  height: auto;

  background: #0f0f0f;
  color: #666666;
`;

export const benefitContainer = css(
  mq({
    width: '67.5%',

    display: 'flex',
    justifyContent: 'space-between',

    background: '#0f0f0f',
    borderRadius: '24px',
  })
);

export const textStyle = css(
  mq({
    fontFamily: 'Pretendard',
    fontWeight: '500',
    fontSize: [9, 11, 16, 18],
    lineHeight: 1.5,

    width: '100%',
    height: 'content',

    background: '#0f0f0f',
    whiteSpace: 'pre-wrap',
    marginTop: [16, 18, 22, 33],
    marginLeft: [18, 18, 26, 32],
  })
);

export const iconContainer = css`
  display: flex;
  align-items: flex-end;

  background: #0f0f0f;
  border-radius: 24px;
`;

export const imgStyle = css(
  mq({
    width: [41, 41, 59, 72],
    height: [41, 41, 59, 72],

    background: '#0f0f0f',
    marginRight: [9, 9, 13, 16],
    marginBottom: [9, 9, 13, 16],
  })
);

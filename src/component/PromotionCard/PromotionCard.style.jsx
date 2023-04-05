import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const sectionContainer = css(
  mq({
    fontFamily: 'DM Sans',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: [700, 800, 900, 1200],

    color: 'white',
  })
);

export const contentContainer = css`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const topContainer = css`
  width: 92%;
  height: auto;

  display: flex;
  justify-content: space-between;
`;

export const subjectStyle = css(
  mq({
    fontWeight: '500',
    fontSize: [54.7, 54.7, 78.7, 96],

    width: 'auto',
    height: 'content',

    color: 'white',
  })
);

export const imgStyle = height =>
  css(
    mq({
      width: ['36.25vw', 297, 427, 522],
      height: [({ height } / 1440) * 820, ({ height } / 1440) * 820, ({ height } / 1440) * 1180, { height }],
    })
  );

export const bottomContainer = css(
  mq({
    width: '92%',
    height: [209, 210, 301, 368],
    marginTop: [58, 59, 84, 103],
  })
);

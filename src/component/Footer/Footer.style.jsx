import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const sectionContainer = css`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  // border: 1px solid white;
`;

export const footerContainer = css(
  mq({
    width: '92%',
    height: [45.5, 45.6, 65.6, 80.0],
    // height: [56.9, 56.9, 81.9, 100.0],
    // height: [91.0, 91.1, 131.1, 160.0],

    display: 'flex',
    justifyContent: 'center',

    // border: '1px solid blue',
  })
);

export const textStyle = css(
  mq({
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: [13, 14, 14, 18],

    lineHeight: '100%',

    color: '#666666',
  })
);

export const hrStyle = css`
  border: 0;
  height: 1px;
  background: white;
`;

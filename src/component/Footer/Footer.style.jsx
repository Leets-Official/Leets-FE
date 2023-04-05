import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const sectionContainer = css`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const footerContainer = css(
  mq({
    width: '92%',
    height: [45.5, 45.6, 65.6, 80.0],

    display: 'flex',
    justifyContent: 'center',
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

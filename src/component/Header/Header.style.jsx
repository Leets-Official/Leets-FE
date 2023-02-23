import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const headContainer = css(
  mq({
    width: '100%',
    height: [300, 400, 350, 400],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  })
);

export const titleStyle = css`
  color: white;

  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 10vw;

  width: content;
  height: content;

  letter-spacing: -0.03em;
`;

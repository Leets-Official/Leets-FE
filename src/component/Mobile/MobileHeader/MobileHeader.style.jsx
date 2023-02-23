import { css } from '@emotion/react';
import mq from '../../../utils/mobileViewports';

export const headContainer = css(
  mq({
    width: '100%',
    height: [100, 400, 350, 420, 470],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

    marginBottom: [50, 100, 50, 150],
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

  // border: 1px solid green;
`;

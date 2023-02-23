import { css } from '@emotion/react';
import mq from '../../../utils/mobileViewports';

export const headContainer = css(
  mq({
    width: '100%',
    height: [100, 350, 450],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

    marginBottom: [50, 50, 150],

    // border: '3px solid wthie',
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

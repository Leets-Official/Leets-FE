import { css } from '@emotion/react';
import mq from '../../../utils/mobileViewports';

export const headContainer = css(
  mq({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

    width: '100%',
    height: [100, 420, 380, 455, 510],

    marginBottom: [50, 100, 50, 150],
  })
);

export const titleStyle = css`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 10vw;

  width: content;
  height: content;

  color: white;
  letter-spacing: -0.03em;
`;

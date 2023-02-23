import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const headContainer = css(
  mq({
    width: '100%',
    height: [500, 550, 450, 400, 300],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

    marginBottom: [100, 200, 0, 0],
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

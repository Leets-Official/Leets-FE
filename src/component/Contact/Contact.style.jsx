import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const sectionContainer = css(
  mq({
    fontFamily: 'DM Sans',
    width: '100%',

    height: [159.3, 159.4, 229.4, 280.0],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: 'white',

    marginBottom: '100px',

    // border: '1px solid white',
  })
);

export const contentContainer = css`
  width: 92%;
  height: 100%;

  // border: 1px solid red;
`;

export const hrStyle = css`
  border: 0;
  height: 1px;
  background: #666666;
`;

export const headContainer = css(
  mq({
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: [27.3, 27.3, 39.3, 48.0],
    lineHeight: '100%',

    color: '#ffffff',

    marginTop: [36.4, 36.4, 52.4, 64.0],

    display: 'flex',
    justifyContent: 'space-between',
  })
);

export const gridContainer = css(
  mq({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',

    rowGap: [22.8, 22.8, 32.8, 40.0],
    colGap: [95.5, 95.7, 137.7, 168.0],

    width: 'content',
    height: '100%',

    // border: '1px solid blue',

    marginRight: [54.6, 54.7, 78.7, 96.0],
  })
);

export const infoContainer = css`
  // border: 1px solid pink;
`;

export const titleStyle = css(
  mq({
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px',
    fontSize: [15, 15, 16.4, 20.0],

    marginBottom: [1, 2, 6.6, 8.0],

    color: '#666666',

    // border: 1px solid pink;
  })
);

export const infoStyle = css(
  mq({
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px',
    fontSize: [13, 13, 16.4, 20.0],
    letterSpacing: '-0.01em',
    color: '#e6e6e6',

    // border: 1px solid pink;
  })
);

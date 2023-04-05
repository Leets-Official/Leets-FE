import { css } from '@emotion/react';
import mq from '../../utils/viewports';

export const sectionContainer = css(
  mq({
    width: '100%',
    height: [159.3, 159.4, 229.4, 280.0],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: 'white',
    marginBottom: '100px',
  })
);

export const contentContainer = css`
  width: 92%;
  height: 100%;
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

    display: 'flex',
    justifyContent: 'space-between',

    color: '#ffffff',
    marginTop: [36.4, 36.4, 52.4, 64.0],
  })
);

export const gridContainer = css(
  mq({
    fontFamily: 'Pretendard',
    fontWeight: '500',

    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    rowGap: [22.8, 22.8, 32.8, 40.0],
    colGap: [95.5, 95.7, 137.7, 168.0],

    width: 'content',
    height: '100%',

    marginRight: [54.6, 54.7, 78.7, 96.0],
  })
);

export const infoContainer = css(
  mq({
    fontWeight: '500',
    lineHeight: '24px',

    width: [163.2, 163.4, 235.2, 287.0],
    height: [31.9, 31.9, 45.9, 56.0],
  })
);

export const titleStyle = css(
  mq({
    fontSize: [15, 15, 16.4, 20.0],
    marginBottom: [1, 2, 6.6, 8.0],
    color: '#666666',
  })
);

export const infoStyle = css(
  mq({
    fontSize: [13, 13, 16.4, 20.0],
    letterSpacing: '-0.01em',
    color: '#e6e6e6',
  })
);

export const linkStyle = css`
  color: #e6e6e6;
  cursor: pointer;
  text-decoration-line: none;
`;

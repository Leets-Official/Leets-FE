import { css } from '@emotion/react';
import mq from '../../../utils/mobileViewports';

export const sectionContainer = css`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  // border: 1px solid blue;

  margin-bottom: 72px;
`;
export const footerContainer = css`
  margin-left: 16px;
  margin-right: 16px;

  // border: 1px solid white;
`;
export const textStyle = css(
  mq({
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: [13, 13, 14, 14, 16],
    lineHeight: '100%',

    color: '#666666',
  })
);

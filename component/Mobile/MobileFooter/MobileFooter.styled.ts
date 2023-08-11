import { mobileMQ } from '@/constants';
import { css } from '@emotion/react';

export const sectionContainer = css`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin-bottom: 72px;
`;

export const footerContainer = css`
  margin-left: 16px;
  margin-right: 16px;
`;

export const textStyle = css(
  mobileMQ({
    fontFamily: 'Pretendard',
    fontWeight: '500',
    fontSize: [13, 13, 14, 14, 16],
    lineHeight: '100%',

    color: '#666666',
  })
);

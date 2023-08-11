import { ThemeColor } from '@/types';
import { css } from '@emotion/react';

const backgrounds = {
  green: '#10DAB2',
  blue: '#3685FC',
  yellow: '#FCB836',
};

const colors = {
  green: '#1A1A1A',
  blue: 'white',
  yellow: '#1A1A1A',
};

export const buttonContainer = css`
  width: 100%;
  height: 48px;

  padding-left: 16px;
  padding-right: 16px;

  margin-bottom: 100px;
`;

export const buttonStyle = (color: ThemeColor) => css`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${backgrounds[color]};
  color: ${colors[color]};

  border: none;
  border-radius: 24px;
`;

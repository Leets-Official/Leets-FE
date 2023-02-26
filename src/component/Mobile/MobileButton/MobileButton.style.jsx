import { css } from '@emotion/react';

const backgrounds = {
  green: '#10DAB2',
  blue: '#3685FC',
  yellow: '#FCB836',
};

const colors = {
  green: 'black',
  blue: 'white',
  yellow: 'black',
};

export const buttonContainer = css`
  width: 100%;
  height: 48px;

  padding-left: 16px;
  padding-right: 16px;

  margin-bottom: 100px;

  // border: 1px solid white;
`;

export const buttonStyle = color => css`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${backgrounds[color]};
  border-radius: 24px;

  border: none;
  color: ${colors[color]};

  // border: 1px solid blue;
`;

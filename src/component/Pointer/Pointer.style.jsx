import { css } from '@emotion/react';

const backgrounds = {
  blue: '#3685FC',
  green: '#29B69A',
  yellow: '#FCB836',
};

export default (x, y, size, color) => css`
  transform: translate(${x}px, ${y}px);
  position: fixed;

  width: ${size}rem;
  height: ${size}rem;
  left: -${size / 2}rem;
  top: -${size / 2}rem;

  opacity: 0.7;
  pointer-events: none;
  z-index: 4;
  background-color: ${backgrounds[color]};
  border-radius: 50%;
`;

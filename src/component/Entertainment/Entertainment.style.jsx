import { css } from '@emotion/react';

export const contentContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  // border: 1px solid red;

  height: 15vw;
`;

export const balloon = index => css`
  width: 26.1vw;
  height: 10.5vw;
  position: relative;

  background: #0f0f0f;
  border-radius: 5.27vw;

  &:after {
    content: '';
    position: absolute;
    margin-left: -2vw;
    transform: rotate(${index % 2 ? '-22deg' : '22deg'});
    left: ${index % 2 ? '15%' : '70%'};
    bottom: -0.6vw;

    width: 0px;
    height: 0px;
    border-right: 4vw solid transparent;
    border-left: 4vw solid transparent;
    border-bottom: 7vw solid #0f0f0f;
    // border-bottom: 7vw solid olive;
  }

  :nth-child(2) {
    align-self: end;
  }
`;

export const textStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  width: 55%;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  background: #0f0f0f;
`;

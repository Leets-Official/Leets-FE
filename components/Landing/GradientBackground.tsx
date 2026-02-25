'use client';

import styled from 'styled-components';

const GradientBackground = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      100vw 80vh at 50% 0%,
      rgba(53, 132, 251, 1) 0%,
      rgba(53, 132, 251, 0) 100%
    );
    z-index: 0;
    pointer-events: none;
  }
`;

export default GradientBackground;

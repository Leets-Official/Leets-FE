'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/theme';

const FAB = styled.button<{ $visible: boolean }>`
  position: fixed;
  bottom: 32px;
  right: 24px;
  z-index: 100;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(53, 132, 251, 0.25);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 16px rgba(53, 132, 251, 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '12px')});
  transition: opacity 250ms ease, transform 250ms ease, background 200ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.92);
    border-color: rgba(53, 132, 251, 0.4);
  }

  &:active {
    background: rgba(53, 132, 251, 0.08);
  }

  @media (min-width: 820px) {
    bottom: 40px;
    right: 40px;
    width: 52px;
    height: 52px;
  }
`;

const ArrowUp = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 15V5M10 5L5 10M10 5L15 10"
      stroke={colors.blue[500]}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <FAB
      $visible={visible}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="페이지 상단으로 이동">
      <ArrowUp />
    </FAB>
  );
};

export default ScrollToTop;

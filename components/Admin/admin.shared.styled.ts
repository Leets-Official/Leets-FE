'use client';

import { styled } from 'styled-components';

/* ── 어드민 공통 Mobile UI (FAB + Bottom Sheet) ── */

export const MobileFab = styled.button`
  display: none;

  @media (max-width: 819px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 24px;
    right: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #3584fb;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(53, 132, 251, 0.4);
    z-index: 90;
  }
`;

export const MobileOverlay = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 819px) {
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: rgba(21, 52, 100, 0.4);
    z-index: 100;
  }
`;

export const SheetHandle = styled.div`
  width: 40px;
  height: 4px;
  background: rgba(21, 52, 100, 0.2);
  border-radius: 2px;
  margin: 12px auto 20px;
  flex-shrink: 0;
`;

export const SheetTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #153464;
  letter-spacing: -0.36px;
  margin: 0 0 16px 0;
`;

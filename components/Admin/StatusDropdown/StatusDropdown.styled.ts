'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

/* Figma 2498-6154: button-outline, state=default */
export const Trigger = styled.button<{ $open: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid ${({ $open }) => ($open ? '#3584fb' : 'rgba(21, 52, 100, 0.40)')};
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 0.15s;

  &:hover {
    border-color: #3584fb;
  }
`;

export const TriggerText = styled.span`
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #152564;
`;

export const DropdownPanel = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 100%;
  background: #ffffff;
  border: 1px solid rgba(21, 52, 100, 0.15);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(21, 52, 100, 0.12);
  z-index: 100;
  overflow: hidden;
`;

export const DropdownItem = styled.button<{ $selected: boolean }>`
  all: unset;
  display: block;
  width: 100%;
  padding: 10px 14px;
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  font-weight: ${({ $selected }) => ($selected ? 600 : 500)};
  color: ${({ $selected }) => ($selected ? '#3584fb' : '#152564')};
  background: ${({ $selected }) => ($selected ? 'rgba(53, 132, 251, 0.06)' : 'transparent')};
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  transition: background 0.1s;

  &:hover {
    background: rgba(53, 132, 251, 0.08);
  }
`;

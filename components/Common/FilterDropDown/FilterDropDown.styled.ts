import styled from 'styled-components';
import { colors, radius } from '@/styles/theme';

type DropdownIconProp = {
  $isOpen: boolean;
};

type WidthProp = {
  width: number;
};

export const DropdownWrapper = styled.div<WidthProp>`
  position: relative;

  width: ${({ width }) => `${width}%`};
  height: 48px;

  display: flex;
  align-items: center;

  border-radius: ${radius.input};
  border: 1px solid rgba(21, 52, 100, 0.2);
  background: white;
  color: ${colors.blue[800]};
  cursor: pointer;
  transition: border-color 150ms;

  &:hover {
    border-color: rgba(21, 52, 100, 0.4);
  }

  @media (max-width: 820px) {
    height: 40px;
  }
`;

export const DropdownContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

export const TextContainer = styled.div`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  width: fit-content;

  white-space: pre-wrap;
  color: ${colors.blue[800]};

  @media (max-width: 820px) {
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div<DropdownIconProp>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s;
  transform: rotate(0deg);

  ${({ $isOpen }) => $isOpen && 'transform: rotate(180deg);'}

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const DropdownContent = styled.div`
  width: 100%;

  position: absolute;
  top: calc(100% + 4px);
  z-index: 10;
`;

export const Ul = styled.ul`
  width: 100%;

  list-style: none;

  border: 1px solid ${colors.blue[800]};
  border-radius: ${radius.input};
  background: #ffffff;
  overflow: hidden;
`;

export const List = styled.li`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.28px;

  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  padding: 0 16px;

  cursor: pointer;
  white-space: pre-wrap;

  color: ${colors.blue[800]};
  transition: background 150ms;

  &:hover {
    background: #E4EFFF;
  }

  @media (max-width: 820px) {
    height: 40px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.24px;
  }
`;

import styled from 'styled-components';
import { BUTTON_COLOR, TEXT_COLOR } from '@/constants';
import { ThemeColor } from '@/types';
import Link from 'next/link';

export const ButtonContainer = styled.div`
  width: 100%;
  height: 48px;

  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 100px;
`;

export const ApplyButton = styled(Link)<{ color: ThemeColor }>`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ color }) => BUTTON_COLOR[color]};
  color: ${({ color }) => TEXT_COLOR[color]};

  border: none;
  border-radius: 24px;
  cursor: pointer;
  text-decoration: none;
`;

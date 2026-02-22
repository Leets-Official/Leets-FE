'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { colors, spacing } from '@/styles/theme';

export const HeaderContainer = styled.header<{ $variant: 'white' | 'black' }>`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

export const HeaderInner = styled.div`
  width: ${spacing.page.contentWidth};
  max-width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 32px;

  @media (max-width: 820px) {
    padding: 8px ${spacing.page.mobilePadding};
  }
`;

export const LogoLink = styled(Link)<{ $variant: 'white' | 'black' }>`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoImage = styled.img`
  width: 84px;
  height: 20px;

  @media (max-width: 541px) {
    width: 67px;
    height: 16px;
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MenuItem = styled(Link)<{ $variant: 'white' | 'black' }>`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: -0.02em;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background 0.2s ease;

  color: ${({ $variant }) => ($variant === 'white' ? colors.neutral.white : colors.blue[800])};

  &:hover {
    background: ${({ $variant }) =>
      $variant === 'white' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(53, 132, 251, 0.08)'};
  }

  @media (max-width: 541px) {
    font-size: 12px;
    padding: 6px 8px;
  }
`;

export const MenuButton = styled.button<{ $variant: 'white' | 'black' }>`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: -0.02em;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s ease;

  color: ${({ $variant }) => ($variant === 'white' ? colors.neutral.white : colors.blue[800])};

  &:hover {
    background: ${({ $variant }) =>
      $variant === 'white' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(53, 132, 251, 0.08)'};
  }

  @media (max-width: 541px) {
    font-size: 12px;
    padding: 6px 8px;
  }
`;

export const AuthButton = styled.button<{ $variant: 'white' | 'black' }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.02em;
  cursor: pointer;
  transition: opacity 0.2s ease;
  white-space: nowrap;

  padding: 8px 16px;
  border-radius: 100px;

  background: ${({ $variant }) =>
    $variant === 'white' ? colors.neutral.white : colors.neutral.lightBg};
  color: ${({ $variant }) =>
    $variant === 'white' ? colors.blue[800] : colors.blue[800]};
  border: 1px solid ${({ $variant }) =>
    $variant === 'white' ? 'rgba(255, 255, 255, 0.2)' : '#E4EEFF'};
  box-shadow: 0 5px 35px rgba(18, 18, 18, 0.05);

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 541px) {
    font-size: 0;
    padding: 8px;
    border-radius: 50%;
    min-width: 32px;
    min-height: 32px;
    justify-content: center;

    span {
      display: none;
    }
  }
`;

export const UserName = styled.span<{ $variant: 'white' | 'black' }>`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: -0.02em;
  padding: 8px 12px;
  color: ${({ $variant }) => ($variant === 'white' ? colors.neutral.white : colors.blue[800])};

  @media (max-width: 541px) {
    font-size: 12px;
    padding: 6px 8px;
  }
`;

export const GoogleIcon = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  object-fit: contain;
`;

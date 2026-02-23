'use client';

import { styled } from 'styled-components';
import Logo from '@/public/assets/image/Logo/Logo_blue.svg';
import Link from 'next/link';

export const HeaderContainer = styled(Link)`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
`;

export const LogoContainer = styled(Logo)`
  width: 67px;
  height: 16px;
  flex-shrink: 0;
`;

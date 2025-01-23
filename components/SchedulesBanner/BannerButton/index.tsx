'use client';

import React from 'react';
import { StyledBannerButton } from './BannerButton.styled';

interface BannerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'white';
}

export function BannerButton({ children, variant = 'primary', ...props }: BannerButtonProps) {
  return <StyledBannerButton {...props}>{children}</StyledBannerButton>;
}

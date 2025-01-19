import React from 'react';
import { StyledBannerInput } from './BannerInput.styled';

interface BannerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function BannerInput(props: BannerInputProps) {
  return <StyledBannerInput {...props} />;
}

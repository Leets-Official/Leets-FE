'use client';

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import * as S from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost' | 'outline';
  colorScheme?: 'blue' | 'white';
  size?: 'large' | 'medium' | 'small';
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', colorScheme = 'blue', size = 'medium', children, ...props }, ref) => {
    return (
      <S.StyledButton ref={ref} $variant={variant} $colorScheme={colorScheme} $size={size} {...props}>
        {children}
      </S.StyledButton>
    );
  },
);

Button.displayName = 'Button';

export default Button;

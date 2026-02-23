'use client';

import { ReactNode } from 'react';
import * as S from './CardInfo.styled';

interface CardInfoProps {
  variant?: 'icon' | 'number';
  size?: 'small' | 'large';
  number?: number;
  icon?: ReactNode;
  text: string;
}

const CardInfo = ({ variant = 'number', size = 'small', number, icon, text }: CardInfoProps) => {
  return (
    <S.CardContainer $variant={variant} $size={size}>
      {variant === 'number' && number !== undefined && (
        <S.CardNumber $size={size}>{String(number).padStart(2, '0')}</S.CardNumber>
      )}
      {variant === 'icon' && icon && <S.CardIcon>{icon}</S.CardIcon>}
      <S.CardText>{text}</S.CardText>
    </S.CardContainer>
  );
};

export default CardInfo;

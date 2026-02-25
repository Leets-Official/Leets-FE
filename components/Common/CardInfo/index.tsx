'use client';

import { ReactNode, useRef } from 'react';
import * as S from './CardInfo.styled';

interface CardInfoProps {
  variant?: 'icon' | 'number';
  size?: 'small' | 'large';
  number?: number;
  icon?: ReactNode;
  text: string;
}

const CardInfo = ({ variant = 'number', size = 'small', number, icon, text }: CardInfoProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--shine-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--shine-y', `${e.clientY - rect.top}px`);
  };

  return (
    <S.CardContainer ref={cardRef} $variant={variant} $size={size} onMouseMove={handleMouseMove}>
      {variant === 'number' && number !== undefined && (
        <S.CardNumber $size={size}>{String(number).padStart(2, '0')}</S.CardNumber>
      )}
      {variant === 'icon' && icon && <S.CardIcon>{icon}</S.CardIcon>}
      <S.CardText>{text}</S.CardText>
      <S.ShineOverlay />
    </S.CardContainer>
  );
};

export default CardInfo;

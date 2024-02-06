'use client';

import { useViewport } from '@/hooks';
import * as S from './Entertainment.styled';

const Entertainment = ({ benefits }: { benefits: string[] }) => {
  const { isDesktop } = useViewport();

  return (
    <S.ContentContainer>
      {isDesktop && (
        <S.GridContainer>
          {benefits.map((benefit, index) => (
            <S.Balloon key={benefit} $index={index}>
              <S.TextStyle>{benefit}</S.TextStyle>
            </S.Balloon>
          ))}
        </S.GridContainer>
      )}
      {!isDesktop &&
        benefits.map((benefit, index) => (
          <S.BalloonMobile key={benefit} $index={index}>
            <S.TextStyle>{benefit}</S.TextStyle>
          </S.BalloonMobile>
        ))}
    </S.ContentContainer>
  );
};

export default Entertainment;

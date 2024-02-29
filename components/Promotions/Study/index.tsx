'use client';

import { NUMBER } from '@/constants';
import { useViewport } from '@/hooks';
import * as S from './Study.styled';

const Study = ({ benefits }: { benefits: string[] }) => {
  const { isDesktop } = useViewport();

  return (
    <S.ContentContainer>
      {isDesktop && (
        <>
          <S.GridContainer>
            {benefits.slice(NUMBER.ZERO, NUMBER.DIVIDER).map((benefit, index) => (
              <S.BenefitContainer key={benefit}>
                <S.NumberStyle>{`${NUMBER.ZERO}${index + NUMBER.ONE}`}</S.NumberStyle>
                <S.TextStyle>{benefit}</S.TextStyle>
              </S.BenefitContainer>
            ))}
          </S.GridContainer>
          <S.FlexContainer>
            {benefits.slice(NUMBER.DIVIDER).map((benefit, index) => (
              <S.FlexBlockStyle key={benefit}>
                <S.BenefitContainer>
                  <S.NumberStyle>{`${NUMBER.ZERO}${index + NUMBER.DIVIDER + NUMBER.ONE}`}</S.NumberStyle>
                  <S.TextStyle>{benefit}</S.TextStyle>
                </S.BenefitContainer>
              </S.FlexBlockStyle>
            ))}
          </S.FlexContainer>
        </>
      )}
      {!isDesktop &&
        benefits.map((benefit, index) => (
          <S.BenefitContainerMobile key={benefit}>
            <S.HeadContainer>{`0${index + 1}`}</S.HeadContainer>
            <S.Benefit>{benefit}</S.Benefit>
          </S.BenefitContainerMobile>
        ))}
    </S.ContentContainer>
  );
};

export default Study;

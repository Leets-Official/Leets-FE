'use client';

import Image from 'next/image';
import { useViewport } from '@/hooks';
import * as S from './Project.styled';

const Project = ({ benefits }: { benefits: string[] }) => {
  const { isDesktop } = useViewport();

  return (
    <S.ContentContainer>
      {isDesktop &&
        benefits.map((benefit, index) => (
          <S.BenefitContainer key={benefit}>
            <S.NumberContainer>
              <S.NumberStyle>{`${0}${index + 1}`}</S.NumberStyle>
            </S.NumberContainer>
            <S.Benefit>
              <S.TextStyle>{benefit}</S.TextStyle>
              <S.IconContainer>
                <S.IconWrapper>
                  <Image src={`/assets/image/Project/star${index + 1}.svg`} alt={`title${index + 1}`} fill />
                </S.IconWrapper>
              </S.IconContainer>
            </S.Benefit>
          </S.BenefitContainer>
        ))}
      {!isDesktop &&
        benefits.map((benefit, index) => (
          <S.BenefitContainer key={benefit}>
            <S.HeadContainer>
              {`0${index + 1}`}
              <Image src={`/assets/image/Project/star${index + 1}.svg`} alt="Project" width={40} height={40} />
            </S.HeadContainer>
            <S.Benefit>{benefit}</S.Benefit>
          </S.BenefitContainer>
        ))}
    </S.ContentContainer>
  );
};

export default Project;

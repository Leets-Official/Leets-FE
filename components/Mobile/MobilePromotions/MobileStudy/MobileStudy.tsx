import * as S from './MobileStudy.styled';

export default function MobileStudy({ benefits }: { benefits: string[] }) {
  return (
    <S.ContentContainer>
      {benefits.map((benefit, index) => (
        <S.BlockStyle key={benefit}>
          <S.HeadContainer>{`0${index + 1}`}</S.HeadContainer>
          <S.BenefitContainer>{benefit}</S.BenefitContainer>
        </S.BlockStyle>
      ))}
    </S.ContentContainer>
  );
}

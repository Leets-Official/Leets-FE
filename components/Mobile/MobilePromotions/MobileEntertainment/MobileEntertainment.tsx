import * as S from './MobileEntertainment.styled';

export default function MobileEntertainment({ benefits }: { benefits: string[] }) {
  return (
    <S.ContentContainer>
      {benefits.map((benefit, index) => (
        <S.Balloon key={benefit} $index={index}>
          <S.TextContainer>{benefit}</S.TextContainer>
        </S.Balloon>
      ))}
    </S.ContentContainer>
  );
}

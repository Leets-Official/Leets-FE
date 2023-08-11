import * as S from './Study.styled';

const Study = ({ benefits }: { benefits: any[] }) => {
  const DIVIDER = 3;
  const ONE_INDEX = 1;
  const ZERO = 0;

  return (
    <S.ContentContainer>
      <S.GridContainer>
        {benefits.slice(ZERO, DIVIDER).map((benefit, index) => (
          <S.BenefitContainer key={benefit}>
            <S.NumberStyle>{`${ZERO}${index + ONE_INDEX}`}</S.NumberStyle>
            <S.TextStyle>{benefit}</S.TextStyle>
          </S.BenefitContainer>
        ))}
      </S.GridContainer>
      <S.FlexContainer>
        {benefits.slice(DIVIDER).map((benefit, index) => (
          <S.FlexBlockStyle key={benefit}>
            <S.BenefitContainer>
              <S.NumberStyle>{`${ZERO}${index + DIVIDER + ONE_INDEX}`}</S.NumberStyle>
              <S.TextStyle>{benefit}</S.TextStyle>
            </S.BenefitContainer>
          </S.FlexBlockStyle>
        ))}
      </S.FlexContainer>
    </S.ContentContainer>
  );
};

export default Study;

import { NUMBER } from '@/constants';
import * as S from './Study.styled';

const Study = ({ benefits }: { benefits: string[] }) => (
  <S.ContentContainer>
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
  </S.ContentContainer>
);

export default Study;

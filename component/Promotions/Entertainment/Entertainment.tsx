/** @jsxImportSource @emotion/react */
import * as S from './Entertainment.styled';

const Entertainment = ({ benefits }) => {
  return (
    <S.ContentContainer>
      <S.GridContainer>
        {benefits.map((benefit, index) => (
          <S.Balloon key={benefit} index={index}>
            <S.TextStyle>{benefit}</S.TextStyle>
          </S.Balloon>
        ))}
      </S.GridContainer>
    </S.ContentContainer>
  );
};
export default Entertainment;

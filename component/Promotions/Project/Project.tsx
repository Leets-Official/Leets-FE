import * as S from './Project.styled';

const Project = ({ imageSrc, benefits }) => {
  return (
    <S.ContentContainer>
      {benefits.map((benefit, index) => (
        <S.BlockStyle key={benefit}>
          <S.NumberContainer>
            <S.NumberStyle>{`${0}${index + 1}`}</S.NumberStyle>
          </S.NumberContainer>
          <S.BenefitContainer>
            <S.TextStyle>{benefit}</S.TextStyle>
            <S.IconContainer>
              <S.ImgStyle src={`${imageSrc}/star${index + 1}.png`} alt={`title${index + 1}`} />
            </S.IconContainer>
          </S.BenefitContainer>
        </S.BlockStyle>
      ))}
    </S.ContentContainer>
  );
};

export default Project;

import * as S from './MobileProject.styled';

const MobileProject = ({ benefits, imageSrc }: { benefits: string[]; imageSrc: string }) => {
  return (
    <S.ContentContainer>
      {benefits.map((benefit, index) => (
        <S.BlockStyle key={benefit}>
          <S.HeadContainer>
            {`0${index + 1}`}
            <S.ImgStyle src={`${imageSrc}/star${index + 1}.png`} alt="Project" />
          </S.HeadContainer>
          <S.BenefitContainer>{benefit}</S.BenefitContainer>
        </S.BlockStyle>
      ))}
    </S.ContentContainer>
  );
};

export default MobileProject;

import Image from 'next/image';
import * as S from './Project.styled';

const Project = ({ imageSrc, benefits }: { benefits: string[]; imageSrc: string }) => (
  <S.ContentContainer>
    {benefits.map((benefit, index) => (
      <S.BlockStyle key={benefit}>
        <S.NumberContainer>
          <S.NumberStyle>{`${0}${index + 1}`}</S.NumberStyle>
        </S.NumberContainer>
        <S.BenefitContainer>
          <S.TextStyle>{benefit}</S.TextStyle>
          <S.IconContainer>
            <S.IconWrapper>
              <Image src={`${imageSrc}/star${index + 1}.svg`} alt={`title${index + 1}`} fill />
            </S.IconWrapper>
          </S.IconContainer>
        </S.BenefitContainer>
      </S.BlockStyle>
    ))}
  </S.ContentContainer>
);

export default Project;

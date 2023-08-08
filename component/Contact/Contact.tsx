import datas from '@/utils/contactData';
import * as S from './Contact.styled';

export default function Contact() {
  return (
    <S.SectionContainer>
      <S.ContentContainer>
        <S.HrStyle />
        <S.HeadContainer>
          Contact
          <S.GridContainer>
            {datas.map(({ title, value, hasLink }) => (
              <S.InfoContainer key={title}>
                <S.TitleStyle>{title}</S.TitleStyle>
                <S.InfoStyle>
                  {hasLink ? (
                    <S.LinkStyle href={value} target="_blank">
                      {value}
                    </S.LinkStyle>
                  ) : (
                    value
                  )}
                </S.InfoStyle>
              </S.InfoContainer>
            ))}
          </S.GridContainer>
        </S.HeadContainer>
      </S.ContentContainer>
    </S.SectionContainer>
  );
}

import { CONTACT_LAYOUT } from '@/constants';
import * as S from './Contact.styled';

const Contact = () => (
  <S.SectionContainer>
    <S.ContentContainer>
      <S.HrStyle />
      <S.HeadContainer>
        Contact
        <S.GridContainer>
          {CONTACT_LAYOUT.map(({ title, value, hasLink }) => (
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

export default Contact;

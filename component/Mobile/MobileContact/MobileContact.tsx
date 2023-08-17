import { CONTACT_LAYOUT } from '@/constants';
import * as S from './MobileContact.styled';

const MobileContact = () => (
  <S.SectionContainer>
    <S.HeadContainer>Contact</S.HeadContainer>
    <S.FlexContainer>
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
    </S.FlexContainer>
  </S.SectionContainer>
);

export default MobileContact;

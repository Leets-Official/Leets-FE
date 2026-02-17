import { memo } from 'react';
import { CONTACT_LAYOUT } from '@/constants';
import * as S from './FooterTemplate.styled';

const FooterTemplate = () => (
  <S.FooterContainer>
    <S.FooterInner>
      <S.Divider />
      <S.ContactSection>
        <S.ContactContent>
          <S.ContactHeading>Contact</S.ContactHeading>
          <S.ContactGrid>
            {CONTACT_LAYOUT.map(({ title, value, hasLink }) => (
              <S.ContactItem key={title}>
                <S.ContactTitle>{title}</S.ContactTitle>
                {hasLink ? (
                  <S.ContactLink href={value} target="_blank" rel="noopener noreferrer">
                    {value}
                  </S.ContactLink>
                ) : (
                  <S.ContactValue>{value}</S.ContactValue>
                )}
              </S.ContactItem>
            ))}
          </S.ContactGrid>
        </S.ContactContent>
      </S.ContactSection>
      <S.Divider />
      <S.CopyrightSection>
        <S.CopyrightText>Copyright 2023-2026. Leets All rights reserved.</S.CopyrightText>
      </S.CopyrightSection>
    </S.FooterInner>
  </S.FooterContainer>
);

export default memo(FooterTemplate);

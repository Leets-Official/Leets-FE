import React, { memo } from 'react';
import { CONTACT_LAYOUT } from '@/constants';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiKakaotalk } from 'react-icons/si';
import * as S from './Contact.styled';

const ICON_MAP: Record<string, React.ReactNode> = {
  Github: <FaGithub />,
  Mail: <MdEmail />,
  'Open Kakao': <SiKakaotalk />,
  Insta: <FaInstagram />,
};

const Contact = () => (
  <S.SectionContainer>
    <S.ContentContainer>
      <S.HrStyle />
      <S.Content>
        <S.HeadContainer>Contact</S.HeadContainer>
        <S.IconRow>
          {CONTACT_LAYOUT.map(({ title, value, hasLink }) => (
            <S.IconWrapper key={title} title={title}>
              <S.IconLink href={hasLink ? value : `mailto:${value}`} target="_blank" rel="noopener noreferrer">
                {ICON_MAP[title]}
              </S.IconLink>
            </S.IconWrapper>
          ))}
        </S.IconRow>
      </S.Content>
    </S.ContentContainer>
  </S.SectionContainer>
);

export default memo(Contact);

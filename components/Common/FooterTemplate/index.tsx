'use client';

import { memo } from 'react';
import Swal from 'sweetalert2';
import { CONTACT_LAYOUT } from '@/constants';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiKakaotalk } from 'react-icons/si';
import * as S from './FooterTemplate.styled';

const ICON_MAP: Record<string, React.ReactNode> = {
  Github: <FaGithub />,
  Mail: <MdEmail />,
  'Open Kakao': <SiKakaotalk />,
  Insta: <FaInstagram />,
};

const handleEmailClick = (e: React.MouseEvent, email: string) => {
  e.preventDefault();
  navigator.clipboard.writeText(email);
  Swal.fire({
    icon: 'success',
    title: '이메일 주소가 복사됐어요!',
    text: 'contact@leets.land',
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    customClass: { popup: 'swal-custom-popup' },
  });
};

const FooterTemplate = () => (
  <S.FooterContainer>
    <S.FooterInner>
      <S.Divider />
      <S.ContactSection>
        <S.ContactContent>
          <S.ContactHeading>Contact</S.ContactHeading>
          <S.IconRow>
            {CONTACT_LAYOUT.map(({ title, value, hasLink }) => (
              <S.IconWrapper key={title} title={hasLink ? title : value}>
                <S.IconLink
                  href={hasLink ? value : `mailto:${value}`}
                  target={hasLink ? '_blank' : undefined}
                  rel={hasLink ? 'noopener noreferrer' : undefined}
                  onClick={!hasLink ? (e) => handleEmailClick(e, value) : undefined}
                >
                  {ICON_MAP[title]}
                </S.IconLink>
              </S.IconWrapper>
            ))}
          </S.IconRow>
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

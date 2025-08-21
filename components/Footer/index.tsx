import { memo } from 'react';
import * as S from './Footer.styled';

const Footer = () => (
  <S.FooterContainer>
    <S.ContentContainer>
      <S.HrStyle />
      <S.CopyrightText>Copyright 2023-2025. Leets All rights reserved.</S.CopyrightText>
    </S.ContentContainer>
  </S.FooterContainer>
);

export default memo(Footer);

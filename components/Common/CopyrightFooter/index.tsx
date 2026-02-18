'use client';

import { memo } from 'react';
import * as S from './CopyrightFooter.styled';

const CopyrightFooter = () => (
  <S.FooterBar>
    <S.Divider />
    <S.Copyright>Copyright 2023-2026. Leets All rights reserved.</S.Copyright>
  </S.FooterBar>
);

export default memo(CopyrightFooter);

'use client';

import { memo } from 'react';
import * as S from './CopyrightFooter.styled';

interface CopyrightFooterProps {
  variant?: 'white' | 'dark';
}

const CopyrightFooter = ({ variant = 'dark' }: CopyrightFooterProps) => (
  <S.FooterBar>
    <S.Divider $variant={variant} />
    <S.Copyright $variant={variant}>
      Copyright 2023-2026. Leets All rights reserved.
    </S.Copyright>
  </S.FooterBar>
);

export default memo(CopyrightFooter);

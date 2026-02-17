'use client';

import styled from 'styled-components';
import { gradients, spacing } from '@/styles/theme';

const DividerBar = styled.div`
  width: 100%;
  max-width: ${spacing.page.contentWidth};
  height: 5px;
  background: ${gradients.borderDivider};
  margin: 0 auto;
`;

const BorderDivider = () => <DividerBar />;

export default BorderDivider;

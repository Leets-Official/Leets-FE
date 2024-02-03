import { BACKGROUND_COLOR } from '@/constants';
import { KeyOf } from '@/types';
import styled from 'styled-components';

export const Pointer = styled.div<{ color: KeyOf<typeof BACKGROUND_COLOR> }>`
  opacity: 0.7;
  pointer-events: none;
  z-index: 4;
  border-radius: 50%;
  position: fixed;

  background: ${({ color }) => BACKGROUND_COLOR[color]};
`;

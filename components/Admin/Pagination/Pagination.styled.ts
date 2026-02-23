'use client';

import styled from 'styled-components';
import PrevPageImage from '@/public/assets/image/Pagination/PrevPageImage.svg';
import NextPageImage from '@/public/assets/image/Pagination/NextPageImage.svg';
import FirstPageImage from '@/public/assets/image/Pagination/FirstPageImage.svg';
import LastPageImage from '@/public/assets/image/Pagination/LastPageImage.svg';

type SelectProp = {
  selected?: boolean;
};

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 12px 0;
`;

export const ButtonBox = styled.button<SelectProp>`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  background: ${({ selected }) => (selected ? '#3584fb' : 'rgba(31,79,150,0.06)')};
  color: ${({ selected }) => (selected ? '#ffffff' : 'rgba(21,52,100,0.6)')};
  cursor: pointer;
  transition:
    background 0.12s,
    color 0.12s;

  &:hover:not(:disabled) {
    background: ${({ selected }) => (selected ? '#3584fb' : 'rgba(53,132,251,0.12)')};
    color: ${({ selected }) => (selected ? '#ffffff' : '#153464')};
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

export const FirstPage = styled(FirstPageImage)`
  width: 14px;
  height: 14px;
`;

export const LastPage = styled(LastPageImage)`
  width: 14px;
  height: 14px;
`;

export const PrevPage = styled(PrevPageImage)`
  width: 14px;
  height: 14px;
`;

export const NextPage = styled(NextPageImage)`
  width: 14px;
  height: 14px;
`;

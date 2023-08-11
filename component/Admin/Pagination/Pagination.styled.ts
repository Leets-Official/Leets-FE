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

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonBox = styled.button<SelectProp>`
  width: 28px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: none;
  background: ${({ selected }) => (selected ? '#4a93ff' : '#f1f2f6')};
  color: ${({ selected }) => (selected ? 'white' : '#4a93ff')};
  cursor: pointer;
`;

export const FirstPage = styled(FirstPageImage)`
  width: 16px;
  height: 16px;
`;

export const LastPage = styled(LastPageImage)`
  width: 16px;
  height: 16px;
`;

export const PrevPage = styled(PrevPageImage)`
  width: 16px;
  height: 16px;
`;

export const NextPage = styled(NextPageImage)`
  width: 16px;
  height: 16px;
`;

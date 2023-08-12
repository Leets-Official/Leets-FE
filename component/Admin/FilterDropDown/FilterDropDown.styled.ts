import styled from 'styled-components';

type DropdownIconProp = {
  isOpen: boolean;
};

type WidthProp = {
  width: number;
};

export const DropdownWrapper = styled.div<WidthProp>`
  position: relative;

  width: ${({ width }) => `${width}%`};
  height: 45px;

  display: flex;
  align-items: center;

  border-radius: 6px;
  border: 1px solid #d9d9d9;
  color: #667080;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: fit-content;
  font-size: 16px;

  white-space: pre-wrap;
`;

export const ImageContainer = styled.div<DropdownIconProp>`
  width: 24px;
  height: 24px;

  transition: transform 0.3s;
  transform: rotate(0deg);

  ${({ isOpen }) => isOpen && 'transform: rotate(180deg);'}
`;

export const DropdownDiv = styled.div`
  width: 100%;

  position: absolute;
  top: 48px;
  z-index: 1;
`;

export const Ul = styled.ul`
  width: 100%;

  list-style: none;

  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background: #ffffff;
`;

export const List = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  width: 100%;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  white-space: pre-wrap;

  color: #808080;
  :hover {
    color: #fa9625;
  }
`;

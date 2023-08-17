import { styled } from 'styled-components';

type EnableMenu = {
  $enable?: Boolean;
};

export const FilterContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 15px 0 15px 0;
`;

export const FilterByPosition = styled.div`
  width: 240px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid #e0e2e7;
  background: #ffffff;
  :hover {
    background: #f5f4f5;
  }
`;

export const FilterBackground = styled.div<EnableMenu>`
  width: 60px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border-radius: 6px;
  background: ${({ $enable }) => ($enable ? '#f5f4f5' : 'white')};
`;

export const FilterText = styled.div<EnableMenu>`
  font-size: 14px;
  font-weight: ${({ $enable }) => ($enable ? 600 : 400)};

  color: ${({ $enable }) => ($enable ? '#4a93ff' : '#667085')};
`;

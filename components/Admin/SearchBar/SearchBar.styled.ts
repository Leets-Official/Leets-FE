import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 60%;

  display: flex;
  align-items: center;

  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e0e2e7;
  background: #ffffff;
  margin-right: 15px;
`;

export const SearchBarImageContainer = styled.div`
  width: 15px;
  height: 15px;

  display: flex;
  align-items: center;
`;

export const SearchDiv = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  font-size: 14px;

  width: inherit;
  height: 20px;

  border: none;
  margin-left: 9px;
  padding-left: 3px;
  outline: none;

  &::placeholder {
    font-size: 14px;

    color: #94a3b8;
  }
`;

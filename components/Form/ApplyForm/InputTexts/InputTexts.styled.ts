import styled from 'styled-components';

export const ListStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  list-style: none;
  background: white;
  padding-bottom: 40px;
`;

export const LabelStyle = styled.label`
  font-family: 'Pretendard' sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;

  background: white;
  margin-bottom: 8px;
  color: #666666;
`;

export const PStyle = styled.p`
  background: white;
  margin-right: 8px;
`;

export const RequireStyle = styled.div`
  width: 8px;
  height: 8px;

  background: #e15241;
  border-radius: 8px;
`;

export const InputStyle = styled.input`
  font-family: 'Pretendard' sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  width: 100%;
  height: 56px;

  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;
  background: white;

  &::placeholder {
    color: #adb1bd;
  }
  &:focus {
    outline: none;
    border: 1px solid #3685fc;
  }
`;

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
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;

  margin-bottom: 8px;
  background: white;
  color: #666666;
`;

export const PStyle = styled.p`
  background: white;
  margin-right: 8px;
`;

export const RequireStyle = styled.div`
  width: 8px;
  height: 8px;

  border-radius: 8px;
  background: #e15241;
`;

export const TextareaStyle = styled.textarea`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  width: 100%;
  height: 168px;

  &::placeholder {
    color: #adb1bd;
  }
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background: white;
  padding-left: 8px;
  padding-top: 8px;
  resize: none;
`;

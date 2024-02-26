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
  white-space: pre-wrap;
`;

export const RequireStyle = styled.div`
  width: 8px;
  height: 8px;

  border-radius: 8px;
  background: #e15241;
`;

export const TextareaStyle = styled.textarea`
  font-family: 'Pretendard' sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  width: 100%;
  height: 168px;

  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background: white;
  padding: 8px;
  resize: none;

  &::placeholder {
    color: #adb1bd;
  }
  &:focus {
    outline: none;
    border: 1px solid #3685fc;
  }
`;

export const TextLengthContainer = styled.div`
  font-size: 14px;

  display: flex;
  justify-content: flex-end;

  margin-top: 10px;
  color: #777980;
`;

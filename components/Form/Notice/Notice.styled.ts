import { styled } from 'styled-components';

export const NoticeContainer = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: white;
  color: #666666;
  margin-top: 60px;
`;

export const NoticeTitle = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  text-align: left;

  color: black;
  cursor: pointer;
  border-bottom: 1px solid #e9e7fd;
  padding-bottom: 5px;
`;

export const NoticeTextContainer = styled.div`
  padding: 10px;
`;

export const Notice = styled.div`
  line-height: 2;
`;

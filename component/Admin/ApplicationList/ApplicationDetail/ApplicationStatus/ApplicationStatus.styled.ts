import { DatePicker } from 'antd';
import { styled } from 'styled-components';

export const ApplicationStatusContainer = styled.section`
  width: 20%;
  height: 412px;

  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 14px;

  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 30px 0px rgba(46, 45, 116, 0.05);
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;

  color: #1d1f2c;
`;

export const SubHeader = styled.div`
  font-size: 14px;
  font-weight: 700;

  color: #000;
`;

export const ApplicationStatus = styled.div<{ isPass: boolean }>`
  font-size: 14px;
  font-weight: 600;

  width: 75px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: ${({ isPass }) => (isPass ? '#e9faf7' : '#feecee')};
  color: ${({ isPass }) => (isPass ? '#1a9882' : '#eb3d4d')};
`;

export const DateContainer = styled.div`
  font-size: 14px;
  font-weight: 500;

  color: #777980;
`;

export const RangePicker = styled(DatePicker)`
  color: black;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ChangeButton = styled.button`
  font-size: 14px;
  font-weight: 600;

  all: unset;

  width: 98px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 14px;
  border-radius: 8px;
  background: #4a93ff;
  color: white;
  cursor: pointer;
`;

import { styled } from 'styled-components';
import RestButtonImage from '@/public/assets/image/ResetButtonImage.svg';
import { InterviewStatusType } from '@/types';

export const ApplicationContainer = styled.section`
  width: 100%;
  height: 73vh;

  border-radius: 12px;
`;

export const ApplicationColumn = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.07px;

  width: 100%;
  height: 8%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 14px;
  color: #777980;
  border-bottom: 1px solid #f0f1f3;
  background: white;
  border-radius: 10px 10px 0 0;
  padding-left: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DropDownContainer = styled.div`
  width: 60%;

  display: flex;
  justify-content: flex-end;

  gap: 10px;
`;

export const ImageContainer = styled(RestButtonImage)`
  width: 18px;
  height: 18px;

  margin-left: 8px;
`;

export const InitFilterButton = styled.button`
  width: 8%;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #8b909a;
  background: #f9f9fc;
  border-radius: 6px;

  border: none;
  cursor: pointer;

  &:hover ${ImageContainer} {
    @keyframes exampleAnimation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    animation-name: exampleAnimation;
    animation-play-state: running;
    animation-duration: 0.3s;
  }
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;

export const Name = styled.div`
  width: 11%;

  display: flex;
  align-items: center;
`;

export const GPA = styled.div`
  width: 7.5%;
`;

export const Grade = styled.div`
  width: 7%;
`;

export const Position = styled.div`
  width: 10%;
`;

export const InterviewDate = styled.div`
  width: 40%;
`;

export const InterviewStatus = styled.div`
  width: 12%;
`;

export const CheckInterview = styled.div<{ $hasInterview: InterviewStatusType }>`
  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  background: ${({ $hasInterview }) =>
    $hasInterview === 'CHECK' ? '#4a93ff' : $hasInterview === 'UNCHECK' ? '#f3758b' : '#e9e8e8'};
`;

export const Status = styled.div`
  width: 12%;
`;

export const AapplicationComponentContainer = styled.section`
  width: 100%;
  height: 80%;

  background: white;
`;

export const Application = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.07px;

  width: 100%;
  height: 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: black;
  background: white;
  padding-left: 10px;
  border-bottom: 1px solid #f0f1f3;
  cursor: pointer;

  &:hover {
    background: #cfe1fd;
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: 8%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #777980;
  border-bottom: 1px solid #f0f1f3;
  background: white;
  border-radius: 0 0 10px 10px;
  padding-left: 10px;
`;

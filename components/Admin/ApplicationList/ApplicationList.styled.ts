import { styled } from 'styled-components';
import RestButtonImage from '@/public/assets/image/Admin/ResetButtonImage.svg';
import { InterviewStatusType, ApplicationStatusType } from '@/types';
import { INTERVIEW_ATTEND_STATUS_COLOR, APPLICATION_STATUS_TEXT_COLOR, APPLICATION_STATUS_BG_COLOR } from '@/constants';
import Link from 'next/link';

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
  background: ${({ $hasInterview }) => INTERVIEW_ATTEND_STATUS_COLOR[$hasInterview]};
`;

export const StatusContainer = styled.div`
  width: 12%;
`;

export const Status = styled.div<{ $applicationStatus: ApplicationStatusType }>`
  width: 70%;
  padding: 4px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: ${({ $applicationStatus }) => APPLICATION_STATUS_BG_COLOR[$applicationStatus]};
  color: ${({ $applicationStatus }) => APPLICATION_STATUS_TEXT_COLOR[$applicationStatus]};
`;

export const ApplicationComponentContainer = styled.section`
  width: 100%;
  height: 80%;

  background: white;
`;

export const Application = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.07px;

  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: black;
  background: white;
  padding-left: 10px;
  border-bottom: 1px solid #f0f1f3;
  cursor: pointer;
  text-decoration: none;

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

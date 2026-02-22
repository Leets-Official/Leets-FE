'use client';

import dynamic from 'next/dynamic';
import { styled } from 'styled-components';
import { ApplicationStatusType } from '@/types';
import { APPLICATION_STATUS_TEXT_COLOR, APPLICATION_STATUS_BG_COLOR } from '@/constants';

const DatePicker = dynamic(() => import('antd').then((mod) => mod.DatePicker));

export const ApplicationStatusContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 24px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(53, 132, 251, 0.2);
  /* 모바일에서만 DatePicker 팝업을 컨테이너 안에 고정 */
  @media (max-width: 819px) {
    position: relative;

    .ant-picker-dropdown {
      position: absolute !important;
      left: 0 !important;
      right: auto !important;
      width: 100% !important;
      min-width: 0 !important;
    }

    .ant-picker-panel-container {
      width: 100% !important;
      max-width: 100% !important;
      overflow-x: auto !important;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #153464;
  letter-spacing: -0.4px;
`;

export const ApplicationStatus = styled.div<{ $applicationStatus: ApplicationStatusType }>`
  font-size: 12px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 8px;
  background: ${({ $applicationStatus }) => APPLICATION_STATUS_BG_COLOR[$applicationStatus]};
  color: ${({ $applicationStatus }) => APPLICATION_STATUS_TEXT_COLOR[$applicationStatus]};
  white-space: nowrap;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(53, 132, 251, 0.12);
  margin: 4px 0;
`;

export const SubHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #153464;
  letter-spacing: -0.32px;
  margin-bottom: 2px;
`;

export const DateContainer = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #153464;
  letter-spacing: -0.28px;
  background: #e4eeff;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  padding: 0 16px;
  height: 44px;
  display: flex;
  align-items: center;
`;

export const Place = styled.input`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #153464;
  width: 100%;
  height: 44px;
  background: #fcfdff;
  border: 1px solid rgba(31, 79, 150, 0.4);
  border-radius: 8px;
  padding: 0 16px;
  outline: none;

  &::placeholder {
    color: rgba(31, 79, 150, 0.3);
  }

  &:focus {
    border-color: #3584fb;
  }
`;

export const DateInput = styled(DatePicker)`
  width: 100%;
  height: 44px;
  border: 1px solid rgba(31, 79, 150, 0.4) !important;
  border-radius: 8px !important;
  background: #fcfdff !important;
  color: #153464 !important;
  font-family: 'Pretendard Variable', Pretendard, sans-serif !important;

  &:hover,
  &:focus {
    border-color: #3584fb !important;
    box-shadow: none !important;
  }

  .ant-picker-input > input {
    font-size: 14px;
    color: #153464;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
`;

export const ChangeButton = styled.button`
  all: unset;
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  width: 100%;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background: #3584fb;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: #2a69c8;
  }
`;

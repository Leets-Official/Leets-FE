import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlockStyle = styled.div`
  width: 100%;
  height: 168px;

  background: #0f0f0f;
  margin-top: 16px;
  border-radius: 24px;
`;

export const HeadContainer = styled.div`
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;

  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #666666;
  margin-top: 16px;
  margin-left: 24px;
  margin-right: 16px;
  background: #0f0f0f;
`;

export const BenefitContainer = styled.div`
  line-height: 1.5;

  background: #0f0f0f;
  white-space: pre-wrap;
  color: white;
  margin-left: 24px;
  margin-right: 26px;
  margin-top: 27.63px;
`;

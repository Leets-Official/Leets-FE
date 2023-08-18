import Link from 'next/link';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  margin-top: 120px;
  margin-bottom: 72px;
`;

export const HeadContainer = styled.div`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
  display: flex;
  justify-content: center;
  color: white;
`;

export const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-bottom: 64px;
`;

export const InfoContainer = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding-top: 48px;
`;

export const TitleStyle = styled.div`
  color: #666666;
`;

export const InfoStyle = styled.div`
  letter-spacing: -0.01em;
  color: #e6e6e6;
`;

export const LinkStyle = styled(Link)`
  letter-spacing: -0.01em;
  color: #e6e6e6;
  cursor: pointer;
  text-decoration: none;
`;

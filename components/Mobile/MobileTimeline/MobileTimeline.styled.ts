import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;

  margin-top: 120px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  padding-left: 16px;
  padding-right: 16px;
`;

export const Subject = styled(motion.div)`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 42px;
  line-height: 100%;

  color: #ffffff;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  margin-top: 48px;
  padding-left: 16px;
`;

export const InfoStyle = styled.div`
  margin-top: 44px;
  margin-left: 20px;
`;

export const DateStyle = styled(motion.div)`
  font-family: 'Pretendard';

  margin-bottom: 76px;
`;

export const KeyStyle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #cccccc;
  margin-bottom: 4px;
`;

export const ValueStyle = styled.div`
  font-weight: 700;
  font-size: 20px;

  line-height: 24px;
  color: #cccccc;
`;

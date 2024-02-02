import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;

  margin-top: 80px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  padding-left: 16px;
  padding-right: 16px;
`;

export const TopContainer = styled.div`
  padding-bottom: 64px;
`;

export const SubjectStyle = styled(motion.div)`
  font-weight: 500;
  font-size: 42px;
  line-height: 100%;

  color: #ffffff;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 100%;
`;

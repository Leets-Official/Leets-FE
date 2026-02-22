import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors, radius } from '@/styles/theme';

export const ListStyle = styled(motion.li)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  gap: 12px;

  & + & {
    margin-top: 36px;
  }

  @media (max-width: 820px) {
    & + & {
      margin-top: 30px;
    }
  }
`;

export const LabelStyle = styled.label`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;

  display: flex;
  align-items: flex-start;

  color: ${colors.blue[800]};

  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.28px;
  }
`;

export const PStyle = styled.p`
  margin-right: 8px;
  white-space: pre-wrap;
`;

export const RequireStyle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: ${colors.state.errorText};
`;

export const TextareaStyle = styled.textarea`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  width: 100%;
  height: 133px;

  transition: border-color 150ms;

  border: 1px solid rgba(21, 52, 100, 0.2);
  border-radius: ${radius.input};
  background: white;
  padding: 12px 16px;
  resize: none;

  &::placeholder {
    color: ${colors.neutral.disabledText};
  }
  &:hover {
    border-color: rgba(21, 52, 100, 0.4);
  }
  &:focus {
    outline: none;
    border-color: ${colors.blue[500]};
  }

  @media (max-width: 820px) {
    height: 120px;
    font-size: 14px;
  }
`;

export const TextLengthContainer = styled.div`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;

  display: flex;
  justify-content: flex-end;

  color: rgba(21, 52, 100, 0.4);

  @media (max-width: 820px) {
    font-size: 11px;
  }
`;

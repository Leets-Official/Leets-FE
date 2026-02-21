'use client';

import styled, { css } from 'styled-components';
import { colors, radius, spacing } from '@/styles/theme';

/* ========== Page Layout ========== */

export const PageContainer = styled.div`
  min-height: 100vh;
  background: ${colors.neutral.lightBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${spacing.page.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

export const Section = styled.div`
  width: ${spacing.page.contentWidth};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 32px;
  gap: 40px;
  flex: 1;

  @media (max-width: 820px) {
    padding: 60px ${spacing.page.mobilePadding};
  }
`;

/* ========== Title ========== */

export const SectionText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;

  @media (max-width: 820px) {
    gap: 4px;
  }
`;

export const TitleText = styled.h1`
  font-size: 80px;
  font-weight: 700;
  color: ${colors.blue[500]};
  letter-spacing: -1.6px;
  line-height: 96px;

  @media (max-width: 820px) {
    font-size: 36px;
    line-height: 43px;
  }
`;

export const SubtitleText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.blue[500]};
  letter-spacing: -0.4px;
  line-height: 24px;

  @media (max-width: 820px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

/* ========== Form ========== */

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const FieldsetStyle = styled.fieldset`
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

/* ========== Form Card ========== */

export const FormCard = styled.div`
  background: #ffffff;
  border-radius: ${radius.formCard};
  padding: 50px;
  width: 720px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap.formField};

  @media (max-width: 820px) {
    width: 100%;
    padding: 28px 24px;
    gap: 30px;
  }
`;

/* ========== Stepper (PC - dots with dashed lines) ========== */

export const StepperPC = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 100px;

  @media (max-width: 820px) {
    display: none;
  }
`;

export const StepDotWrapper = styled.div<{ $clickable?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 92px;
  position: relative;
  z-index: 1;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
`;

export const StepDot = styled.div<{ $status: 'completed' | 'current' | 'upcoming' }>`
  width: 12px;
  height: 12px;
  border-radius: ${radius.pill};
  position: relative;
  flex-shrink: 0;

  ${({ $status }) => {
    if ($status === 'completed')
      return css`
        background: ${colors.blue[500]};
        box-shadow: 0 0 4px rgba(53, 132, 251, 0.7);
      `;
    if ($status === 'current')
      return css`
        background: transparent;
        border: 1.4px solid ${colors.blue[500]};
        box-shadow: 0 0 4px rgba(53, 132, 251, 0.7);
        &::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: ${radius.pill};
          background: ${colors.blue[500]};
        }
      `;
    return css`
      background: transparent;
      border: 1.4px solid rgba(53, 132, 251, 0.2);
    `;
  }}
`;

export const StepDashedLine = styled.div<{
  $variant: 'completed' | 'transitioning' | 'upcoming';
}>`
  flex: 1;
  height: 1.4px;
  margin-top: 5.3px;
  margin-left: -40px;
  margin-right: -40px;
  min-width: 40px;

  ${({ $variant }) => {
    const blue = colors.blue[500];
    const faded = 'rgba(53, 132, 251, 0.2)';

    if ($variant === 'completed')
      return css`
        background: repeating-linear-gradient(to right, ${blue} 0 4px, transparent 4px 9px);
      `;
    if ($variant === 'transitioning')
      return css`
        background: repeating-linear-gradient(to right, ${blue} 0 4px, transparent 4px 9px);
        -webkit-mask-image: linear-gradient(to right, black, rgba(0, 0, 0, 0.2));
        mask-image: linear-gradient(to right, black, rgba(0, 0, 0, 0.2));
      `;
    return css`
      background: repeating-linear-gradient(to right, ${faded} 0 4px, transparent 4px 9px);
    `;
  }}
`;

export const StepLabelPC = styled.span<{ $status: 'completed' | 'current' | 'upcoming' }>`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  line-height: 120%;
  color: ${({ $status }) => ($status === 'upcoming' ? 'rgba(53, 132, 251, 0.2)' : colors.blue[500])};
`;

/* ========== Stepper (Mobile - segmented bar) ========== */

export const StepperMobile = styled.div`
  display: none;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const MobileSegmentBar = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
`;

export const MobileSegment = styled.div<{ $active: boolean; $clickable?: boolean }>`
  flex: 1;
  height: 3px;
  border-radius: 10px;
  background: ${({ $active }) => ($active ? colors.blue[500] : 'rgba(21, 52, 100, 0.2)')};
  transition: background 0.3s ease;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
`;

export const MobileStepLabel = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.blue[500]};
  letter-spacing: -0.32px;
`;

/* ========== Field Styles ========== */

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.gap.formField} 40px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const FieldItem = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      grid-column: 1 / -1;
    `}
`;

export const FieldLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.blue[800]};
  letter-spacing: -0.32px;
  line-height: 19px;

  @media (max-width: 820px) {
    font-size: 14px;
    letter-spacing: -0.28px;
    line-height: 17px;
  }
`;

export const FieldInput = styled.input`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  width: 100%;
  height: 48px;
  border: 1px solid rgba(21, 52, 100, 0.2);
  border-radius: ${radius.input};
  padding: 0 16px;
  background: white;
  transition: border-color 150ms;

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
    height: 40px;
    font-size: 14px;
  }
`;

export const FieldNote = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: rgba(21, 52, 100, 0.4);
  letter-spacing: -0.24px;
  line-height: 14px;

  @media (max-width: 820px) {
    font-size: 11px;
    letter-spacing: -0.22px;
  }
`;

/* ========== Step 2 Input Fields ========== */

export const Step2Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap.formField};

  @media (max-width: 820px) {
    gap: 30px;
  }
`;

/* ========== Input Container (for textareas) ========== */

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/* ========== Temporary Save Link ========== */

export const TempSaveLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 auto;
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: rgba(21, 52, 100, 0.8);
  letter-spacing: -0.4px;
  line-height: 120%;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-underline-offset: 25%;
  text-underline-position: from-font;
  transition: color 0.2s;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: ${colors.blue[500]};
  }

  @media (max-width: 820px) {
    font-size: 14px;
    letter-spacing: -0.28px;
    line-height: 120%;
    color: rgba(21, 52, 100, 0.6);
    text-underline-offset: 25%;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

/* ========== Buttons ========== */

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (max-width: 820px) {
    gap: 16px;
    width: 100%;
  }
`;

const ButtonBase = css`
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.56px;
  line-height: 34px;
  height: 66px;
  border-radius: ${radius.button};
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 820px) {
    font-size: 20px;
    letter-spacing: -0.4px;
    line-height: 24px;
    height: 48px;
  }
`;

export const PrevButton = styled.button`
  ${ButtonBase}
  width: 200px;
  background: transparent;
  color: ${colors.blue[500]};
  border: 1.4px solid ${colors.blue[500]};

  &:hover {
    background: ${colors.blue[500]};
    color: ${colors.blue[500]};
  }

  &:active {
    background: ${colors.blue[500]};
    color: #ffffff;
  }

  @media (max-width: 820px) {
    width: 108px;
  }
`;

export const NextButton = styled.button<{ $active: boolean }>`
  ${ButtonBase}
  border: none;

  ${({ $active }) =>
    $active
      ? css`
          background: ${colors.blue[500]};
          color: #ffffff;
          &:hover {
            background: ${colors.blue[400]};
          }
          &:active {
            background: ${colors.blue[600]};
          }
        `
      : css`
          background: ${colors.neutral.disabledBg};
          color: ${colors.neutral.disabledText};
          pointer-events: none;
        `}
`;

export const NextButtonSingle = styled(NextButton)`
  width: 360px;

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const NextButtonPaired = styled(NextButton)`
  width: 300px;

  @media (max-width: 820px) {
    width: 196px;
  }
`;

export const SubmitButton = styled.button<{ $active: boolean }>`
  ${ButtonBase}
  width: 300px;
  border: none;

  ${({ $active }) =>
    $active
      ? css`
          background: ${colors.blue[500]};
          color: #ffffff;
          &:hover {
            background: ${colors.blue[400]};
          }
          &:active {
            background: ${colors.blue[600]};
          }
        `
      : css`
          background: ${colors.neutral.disabledBg};
          color: ${colors.neutral.disabledText};
          pointer-events: none;
        `}

  @media (max-width: 820px) {
    width: 196px;
  }
`;

/* ========== Step 3 Confirmation ========== */

export const ConfirmContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 20px;
  text-align: center;
  gap: 16px;

  @media (max-width: 820px) {
    padding: 0;
    gap: 16px;
  }
`;

export const ConfirmTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.blue[800]};
  letter-spacing: -0.48px;
  line-height: 1.5;
  white-space: pre-line;

  @media (max-width: 820px) {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
  }
`;

export const ConfirmDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.blue[800]};
  letter-spacing: -0.28px;
  line-height: 1.7;

  @media (max-width: 820px) {
    font-size: 12px;
    line-height: 1.6;
  }
`;

export const ConfirmCheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  cursor: pointer;

  @media (max-width: 820px) {
    margin-top: 8px;
  }
`;

export const ConfirmCheckbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 1px solid #4a92fe;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  background: white;

  &:checked {
    background: #4a92fe;
    border-color: #4a92fe;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 6px;
    width: 5px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const ConfirmCheckboxText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.blue[800]};
  letter-spacing: -0.28px;
`;

/* ========== Copyright Footer ========== */

export const Copyright = styled.footer`
  width: ${spacing.page.contentWidth};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 0 32px 36px;

  @media (max-width: 820px) {
    padding: 0 ${spacing.page.mobilePadding} 24px;
  }
`;

export const CopyrightBorder = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(21, 52, 100, 0.2);
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: rgba(21, 52, 100, 0.2);
  letter-spacing: -0.24px;
  line-height: 14px;

  @media (max-width: 820px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.2px;
  }
`;

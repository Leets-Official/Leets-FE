import { styled } from 'styled-components';
import { BACKGROUND_COLOR } from '@/constants';
import { ThemeColor } from '@/types';
import Link from 'next/link';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: white;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 45%;
  height: auto;

  background: white;
  padding-bottom: 260px;
`;

export const FieldsetStyle = styled.fieldset`
  width: 100%;
  height: content;

  border: none;
  border-radius: 10px;

  background: white;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const HeadStyle = styled.div`
  width: content;
  height: auto;

  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 8.8vw;
  text-align: center;

  background: white;
  letter-spacing: -0.03em;
  padding-bottom: 148px;
`;

export const WriteStyle = styled.div`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0;

  background: white;
`;

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 25px;
`;

export const PositionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-right: 15px;
  color: gray;
`;

export const PrivacyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PrivacyCheckBox = styled.input``;

export const Text = styled.div`
  font-size: 12px;

  display: flex;
  align-items: center;
`;
export const LinkConatiner = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  background: white;
  margin-top: 60px;
`;

export const SubmitButton = styled.button<{ color: ThemeColor }>`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 16px;

  width: 208px;
  height: 64px;

  border-radius: 40px;
  border: none;

  background: #1a1a1a;
  color: white;
  cursor: pointer;

  &:hover {
    background: ${({ color }) => BACKGROUND_COLOR[color]};
  }
`;

export const NoticeContainer = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  justify-content: center;

  background: white;
  color: #666666;
  margin-top: 40px;
`;

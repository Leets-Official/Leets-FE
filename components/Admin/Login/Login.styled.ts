import { styled } from 'styled-components';

export const ApplyListContainer = styled.main`
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f9f9fc;
  color: black;
`;

export const ContentContainer = styled.section`
  width: 95%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 55px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputSection = styled.section`
  width: 100%;
  height: 128px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputStyle = styled.input`
  width: 100%;
  height: 56px;
  font-size: 16px;

  ::placeholder {
    color: #94a3b8;
    ${({ placeholder }) => placeholder}
  }

  &:focus {
    outline: none;
    border-color: #4a93ff;
  }

  padding: 12px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;

  box-sizing: border-box;
  margin-bottom: 13px;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 16px;

  width: 100%;
  height: 52px;

  border: none;
  border-radius: 8px;

  cursor: pointer;
  margin-top: 55px;
  color: white;
  background: #4a93ff;
`;

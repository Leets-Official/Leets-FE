import { styled } from 'styled-components';

export const ApplicationListContainer = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f9f9fc;
  color: black;
`;

export const ContentContainer = styled.section`
  width: 95%;
  height: 100%;
`;

export const NavContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 15px;
`;

export const LogoutContainer = styled.div`
  width: 60px;

  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.button`
  all: unset;

  color: #4a93ff;
  cursor: pointer;
`;

export const Title = styled.section`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;

  width: 100%;
  height: 32px;

  display: flex;
  align-items: center;

  margin-top: 15px;
  margin-bottom: 15px;
`;

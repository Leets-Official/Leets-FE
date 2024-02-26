'use client';

import styled from 'styled-components';

export const PageContainer = styled.main`
  display: flex;
  justify-content: center;
`;

export const PageWrapper = styled.div`
  width: 92%;

  padding-bottom: 15 vh;
`;

export const Header = styled.header`
  font-size: 9vw;

  @media screen and (min-width: 1440px) {
    font-size: 120px;
  }

  width: 100%;

  color: white;
  margin-top: 30px;
  text-align: center;
`;

export const TabContainer = styled.div`
  margin-top: 60px;
  list-style: none;

  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const Tab = styled.button<{ selected: boolean }>`
  all: unset;

  width: 50px;
  height: 40px;

  text-align: center;
  color: ${({ selected }) => (selected ? 'white' : '#969696')};
  padding-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: white;
  }

  transition: all 250ms;
`;

export const Underline = styled.div`
  width: 100%;

  border-top: 1px solid #3685fc;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 50px;
`;

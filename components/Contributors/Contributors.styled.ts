'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '@/styles/theme';

export const Teams = styled.div`
  font-size: 30px;
  color: ${colors.blue[800]};

  @media screen and (max-width: 680px) {
    font-size: 24px;
  }
`;

export const Part = styled.div`
  font-size: 24px;
  color: ${colors.blue[800]};

  @media screen and (max-width: 680px) {
    font-size: 18px;
  }
  margin-top: 6vw;
  margin-bottom: 3vw;
`;

export const ContributorsContainer = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
`;

export const ContributorsWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 50px;

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(auto-fill, 100px);
    gap: 20px;
  }
`;

export const Contributor = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  border-radius: 30px;
  color: ${colors.blue[800]};
`;

export const ContributorImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease;

  &:hover {
    filter: drop-shadow(0 0 0.5rem rgba(53, 132, 251, 0.3));
    scale: 1.02;
  }
`;

export const ContributorImage = styled.img`
  width: 240px;
  height: 240px;

  @media screen and (max-width: 680px) {
    width: 100px;
    height: 100px;
  }

  border-radius: 12px;
  object-position: center center;
`;

export const NameAndPosition = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: ${colors.blue[800]};

  @media screen and (max-width: 680px) {
    font-size: 12px;
  }
`;

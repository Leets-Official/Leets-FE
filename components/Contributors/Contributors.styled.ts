'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const Teams = styled.div`
  font-size: 30px;

  @media screen and (max-width: 680px) {
    font-size: 24px;
  }
`;

export const Part = styled.div`
  font-size: 24px;

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
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 50px;
`;

export const Contributor = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  border-radius: 30px;
  color: white;
`;

export const ContributorImageWrapper = styled.div`
  position: relative;

  transition: all 250ms ease;

  &:hover {
    filter: drop-shadow(0 0 0.5rem white);
    scale: 1.02;
  }
`;

export const ContributorImage = styled.img`
  width: 240px;
  height: 240px;

  border-radius: 12px;
  object-position: center center;
`;

export const NameAndPosition = styled.div`
  display: flex;
  justify-content: center;
`;

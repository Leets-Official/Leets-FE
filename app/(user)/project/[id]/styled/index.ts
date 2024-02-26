'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
`;

export const LogoContainer = styled.div`
  position: relative;

  width: 40%;
  height: 15vw;
`;

export const LogoImage = styled(Image)`
  object-fit: scale-down;
`;

export const Summary = styled.p`
  font-size: 24px;

  margin-top: 35px;

  @media screen and (max-width: 541px) {
    margin-top: 60px;
  }
`;

export const ShortInformation = styled.div`
  font-size: 16px;

  width: 70%;

  display: flex;
  gap: 50px;

  margin-top: 10vw;
  margin-bottom: 15px;
  padding-left: 3%;

  @media screen and (min-width: 1280px) {
    margin-top: 140px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 680px) {
    padding-left: 0;
    font-size: 14px;
    flex-direction: column;
    gap: 10px;
  }

  @media screen and (max-width: 541px) {
    margin-top: 60px;
  }
`;

export const Information = styled.div`
  display: flex;

  gap: 10px;
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 70%;
  height: 30vw;

  @media screen and (max-width: 541px) {
    height: 230px;
  }

  border-radius: 30px;
`;

export const MainImage = styled(Image)`
  object-fit: cover;
  border-radius: 30px;

  transition: all 250ms ease;

  @media screen and (max-width: 1024px) {
    border-radius: 16px;
  }

  &:hover {
    filter: drop-shadow(0 0 0.5rem white);
  }
`;

export const Hr = styled.div`
  width: 70%;

  border-top: 1px solid #666666;
  margin: 8vw 0;

  @media screen and (max-width: 541px) {
    margin-top: 60px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const DescriptionTitle = styled.div`
  font-size: 30px;

  @media screen and (max-width: 680px) {
    font-size: 24px;
  }
`;

export const Description = styled.div`
  font-size: 20px;
  white-space: pre-wrap;

  line-height: 2;

  @media screen and (max-width: 680px) {
    font-size: 14px;
  }
`;

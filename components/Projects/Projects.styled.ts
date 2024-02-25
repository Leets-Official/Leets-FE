'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const Title = styled.p`
  font-size: 24px;
`;

export const Project = styled(Link)`
  position: relative;

  width: 300px;
  height: 300px;

  color: white;

  margin: 0 auto;

  &:hover img {
    filter: drop-shadow(0 0 0.5rem white) blur(2px) brightness(0.4);
  }

  &:hover div {
    opacity: 1;
  }
`;

export const ImageStyle = styled(Image)`
  width: 300px;
  height: 300px;

  border-radius: 30px;

  object-fit: cover;
  object-position: center;
`;

export const Blur = styled.div`
  font-family: 'Pretendard';
  font-size: 24px;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 24px;
  transition: opacity 0.3s ease;
  opacity: 0;
`;

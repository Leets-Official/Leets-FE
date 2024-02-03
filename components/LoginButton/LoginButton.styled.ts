import styled from 'styled-components';
import { MQ } from '@/constants';
import Image from 'next/image';

export const LoginBackground = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  background: white;
`;

export const LoginContainer = styled.div`
  width: 45%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
`;

export const ButtonStyle = styled.button`
  width: 320px;
  height: 60px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 5px;
  border: 1px solid #d3d3d3;
  background: white;
  cursor: pointer;
`;

export const ImageStyle = styled(Image)`
  width: 30px;
  height: 30px;

  background: white;
`;

export const TextStyle = styled.div`
  ${MQ({
    fontFamily: 'Pretendard',
    fontWeight: '400',
    fontSize: [13, 18, 18, 20.0],
    lineHeight: '24px',
    background: 'white',
  })}
`;

export const HeadStyle = styled.h1`
  font-weight: 500;
  font-size: 8.8vw;
  letter-spacing: -0.03em;

  width: content;
  height: auto;

  background: white;
  text-align: center;
  padding-bottom: 148px;
`;

export const WriteStyle = styled.p`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0;

  text-align: center;
  background: white;
`;

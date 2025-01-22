import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: white;
  margin-top: 4rem;
  @media (max-width: 1440px) {
    margin-top: 2rem;
  }
  @media (max-width: 1024px) {
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 0.7rem;
  }
  @media (max-width: 480px) {
    margin-top: 0.2rem;
  }
  @media (max-width: 320px) {
    margin-top: 0.1rem;
  }
`;

export const TimeBox = styled.div`
  text-align: center;

  .time {
    font-size: 6vw;
    width: 12vw;
    display: inline-block;
    text-align: center;
  }

  .label {
    font-size: 1.5vw;
    font-weight: normal;
    margin-top: 0.25rem;
  }
`;

export const Separator = styled.div`
  font-size: 1.5vw;
  font-weight: normal;
  height: 9vw;
  display: flex;
  align-items: center;
  margin-bottom: 2vw;
`;

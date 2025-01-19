import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: white;
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

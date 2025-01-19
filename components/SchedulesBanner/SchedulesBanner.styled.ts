import styled, { css } from 'styled-components';

export const BannerContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: 5vw;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 10;
`;

export const BannerContent = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;
`;

export const BannerTextBlock = styled.div<{ id: number }>`
  width: 100%;
  .title {
    font-size: 3vw;
    font-weight: bold;
    ${({ id }) =>
      id === 1 &&
      css`
        font-size: 4vw;
      `}
  }

  .subtitle {
    width: 100%;
    display: inline-block;
    margin-top: 1rem;
  }

  .notice {
    font-size: 1vw;
    display: inline-block;
    margin-top: 1rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fcb936;
    border-radius: 4px;
    padding: 0.5rem 1rem;
  }

  .phaseTitle {
    font-size: 1.5vw;
    margin-bottom: 3rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 60%;
  padding: 1vw;
  margin-top: 3vw;
  background-color: #000000;
  border-radius: 9999px;
  outline: none;
  border: none;
  display: flex;
  justify-content: space-between;
`;

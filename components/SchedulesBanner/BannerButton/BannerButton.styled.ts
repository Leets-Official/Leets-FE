import styled from 'styled-components';

export const StyledBannerButton = styled.button`
  padding: 1em;
  width: 12em;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  transform: scale(1);
  border: none;
  cursor: pointer;

  background: #ffffff;
  color: #fcb936;

  &:hover {
    transform: scale(1.05);
    background: #fcb936;
    color: #ffffff;
  }

  font-size: 2.5rem;
  @media (max-width: 1920px) {
    font-size: 1.6rem;
  }
  @media (max-width: 1440px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 960px) {
    font-size: 1rem;
  }
  @media (max-width: 780px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
  @media (max-width: 430px) {
    font-size: 0.5rem;
  }
`;

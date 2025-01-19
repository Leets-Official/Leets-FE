import styled from 'styled-components';

export const StyledBannerButton = styled.button`
  padding: 1vw 1.8vw;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 1vw;
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
`;

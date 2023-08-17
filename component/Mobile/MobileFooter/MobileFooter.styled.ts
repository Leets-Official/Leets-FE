import styled from 'styled-components';
import { mobileMQ } from '@/constants';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  padding-bottom: 72px;
`;

export const ContentContainer = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`;

export const TextStyle = styled.p`
  ${mobileMQ({
    fontFamily: 'Pretendard',
    fontWeight: '500',
    fontSize: [13, 13, 14, 14, 16],
    lineHeight: '100%',

    color: '#666666',
  })}
`;

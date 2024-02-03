import styled from 'styled-components';
import { MQ } from '@/constants';

export const FooterContainer = styled.footer`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  ${MQ({
    width: '92%',
    height: [45.5, 45.6, 65.6, 80.0],

    display: 'flex',
    justifyContent: 'center',
  })}
`;

export const HrStyle = styled.hr`
  border: 0;
  height: 1px;
  background: white;
`;

export const CopyrightText = styled.div`
  ${MQ({
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: [13, 14, 14, 18],
    lineHeight: '100%',

    color: '#666666',
  })}
`;

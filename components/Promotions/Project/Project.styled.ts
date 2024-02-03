import styled from 'styled-components';
import { MQ } from '@/constants';

export const ContentContainer = styled.div`
  ${MQ({
    width: '100%',
    height: '100%',

    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: [18, 18, 26, 32],
  })}
`;

export const BlockStyle = styled.div`
  ${MQ({
    width: '100%',
    height: [95, 96, 137, 168],

    display: 'flex',
  })}
`;

export const NumberContainer = styled.div`
  ${MQ({
    fontFamily: 'DM Sans',
    fontWeight: '400',
    fontSize: [27, 27, 39, 48],

    width: '32.5%',

    backgroundColor: '#0f0f0f',
    borderRadius: '24px',
    paddingTop: [12.5, 12.5, 12.0, 22.0],
    paddingLeft: [15, 16, 22, 28],
  })}
`;

export const NumberStyle = styled.div`
  width: 50%;
  height: auto;

  background: #0f0f0f;
  color: #666666;
`;

export const BenefitContainer = styled.div`
  ${MQ({
    width: '67.5%',

    display: 'flex',
    justifyContent: 'space-between',

    background: '#0f0f0f',
    borderRadius: '24px',
  })}
`;

export const TextStyle = styled.div`
  ${MQ({
    fontFamily: 'Pretendard',
    fontWeight: '500',
    fontSize: [9, 11, 16, 18],
    lineHeight: 1.5,

    width: '70%',
    height: 'content',

    background: '#0f0f0f',
    whiteSpace: 'pre-wrap',
    marginTop: [16, 18, 22, 33],
    marginLeft: [18, 18, 26, 32],
  })}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;

  background: #0f0f0f;
  border-radius: 24px;
  height: 100%;
`;

export const IconWrapper = styled.div`
  ${MQ({
    width: [41, 41, 59, 72],
    height: [41, 41, 59, 72],
    marginRight: [9, 9, 13, 16],
    marginBottom: [9, 9, 13, 16],
  })}
  position: relative;
`;

import styled from 'styled-components';
import Link from 'next/link';
import { MQ } from '@/constants';

export const Container = styled.div`
  ${MQ({
    width: '100%',
    height: [193.4, 193.6, 278.6, 340.0],

    display: 'flex',
    justifyContent: 'center',

    background: 'black',
    marginTop: [18.2, 18.2, 26.2, 32.0],
  })}

  @media screen and (max-width: 541px) {
    width: 100%;
  }
`;

export const ApplyButton = styled(Link)`
  ${MQ({
    fontFamily: 'Pretendard',
    fontWeight: 600,
    fontSize: [11.4, 11.4, 16.4, 20.0],

    width: [245.7, 246.0, 354.0, 432.0],
    height: [45.5, 45.6, 65.6, 80.0],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    border: 'none',
    borderRadius: '40px',

    background: '#3685FC',
    color: '#3685FC',
    '&:hover': {
      color: 'black',
    },
    cursor: 'pointer',
    textDecoration: 'none',
  })}
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  @media screen and (max-width: 541px) {
    width: 92%;
    font-size: 16px;
  }
`;

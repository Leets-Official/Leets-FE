import styled from 'styled-components';
import { MQ } from '@/constants';

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const GridContainer = styled.div`
  ${MQ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: [9.1, 9.1, 13.1, 16.0],

    width: '90%',
    height: [122.8, 123.0, 177.0, 216.0],

    margin: '0 auto',
    textAlign: 'center',
  })}
`;

export const Balloon = styled.div<{ $index: number }>`
  ${({ $index }) =>
    MQ({
      width: '100%',
      height: [86.5, 86.6, 124.6, 152.0],
      position: 'relative',

      background: '#0f0f0f',
      borderRadius: [43.2, 43.3, 62.3, 76.0],

      '&:after': {
        content: '""',
        position: 'absolute',
        marginLeft: $index % 2 ? '-45%' : '15.8%',
        transform: `rotate(${$index % 2 ? '-22deg' : '22deg'})`,
        bottom: [-4.9, -4.9, -7.1, -8.6],

        width: '0px',
        height: '0px',

        borderRight: [
          '20px solid transparent',
          '32.8px solid transparent',
          '47.2px solid transparent',
          '57.6px solid transparent',
        ],

        borderLeft: [
          '20px solid transparent',
          '32.8px solid transparent',
          '47.2px solid transparent',
          '57.6px solid transparent',
        ],

        borderBottom: ['40px solid #0f0f0f', '57px solid #0f0f0f', '81.9px solid #0f0f0f', '100px solid #0f0f0f'],
      },

      ':nth-of-type(2)': {
        alignSelf: 'end',
      },
    })}
`;

export const TextStyle = styled.div`
  ${MQ({
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: [9, 11, 16, 20],
    lineHeight: 1.5,

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '3',

    width: '80%',

    whiteSpace: 'pre-wrap',
    background: '#0f0f0f',
  })}
`;

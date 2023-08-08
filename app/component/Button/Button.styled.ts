import styled from 'styled-components';
import Link from 'next/link';
import mq from '../../utils/viewports';

const backgrounds = {
  green: '#10DAB2',
  blue: '#3685FC',
  yellow: '#FCB836',
};

const colors = {
  green: 'black',
  blue: 'white',
  yellow: 'black',
};

export const Container = styled.div`
  ${mq({
    display: 'flex',
    justifyContent: 'center',

    background: 'black',

    width: '100%',
    height: [193.4, 193.6, 278.6, 340.0],
    marginTop: [18.2, 18.2, 26.2, 32.0],
  })}
`;

export const ApplyButton = styled(Link)`
  ${mq({
    fontFamily: 'Pretendard',
    fontWeight: 700,
    fontSize: [11.4, 11.4, 16.4, 20.0],

    width: [245.7, 246.0, 354.0, 432.0],
    height: [45.5, 45.6, 65.6, 80.0],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    border: 'none',
    borderRadius: '40px',

    background: (props: any) => backgrounds[props.color],
    color: (props: any) => colors[props.color],

    '&:hover': {
      color: (props: any) => (props.color === 'blue' ? 'black' : 'white'),
    },
  })}
  cursor: pointer;
  text-decoration: none;
`;

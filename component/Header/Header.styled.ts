import styled from 'styled-components';
import mq from '@/utils/viewports';

export const HeadContainer = styled.div`
  ${mq({
    width: '100%',
    height: [500, 550, 450, 400],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

    marginBottom: [100, 200, 0, 0],
    background: 'black',
  })}
`;

export const TitleStyle = styled.h1`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 10vw;
  letter-spacing: -0.03em;

  width: content;
  height: content;

  color: white;
`;

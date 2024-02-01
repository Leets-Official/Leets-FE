import { mobileMQ } from '@/constants';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeadContainer = styled(motion.header)`
  ${mobileMQ({
    width: '100%',
    height: [100, 420, 380, 455, 510],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

    marginBottom: [50, 100, 50, 150],
  })}
`;

export const TitleStyle = styled.div`
  font-weight: 500;
  font-size: 10vw;
  letter-spacing: -0.03em;

  color: white;
`;

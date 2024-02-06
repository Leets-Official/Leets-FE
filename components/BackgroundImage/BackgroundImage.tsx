import { ThemeColor } from '@/types';
import { memo } from 'react';
import { Blue, Green, Yellow } from './Image';

const BackgroundImage = ({ color }: { color: ThemeColor }) => {
  const BACKGROUND_IMAGE = {
    green: <Green />,
    blue: <Blue />,
    yellow: <Yellow />,
  } as const;

  return BACKGROUND_IMAGE[color];
};

export default memo(BackgroundImage);

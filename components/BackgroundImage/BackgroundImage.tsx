import Green from '@/public/assets/image/Background/Green.svg';
import Blue from '@/public/assets/image/Background/Blue.svg';
import Yellow from '@/public/assets/image/Background/Yellow.svg';
import { ThemeColor } from '@/types';
import { memo } from 'react';

const BackgroundImage = ({ color }: { color: ThemeColor }) => {
  const BACKGROUND_IMAGE = {
    green: <Green />,
    blue: <Blue />,
    yellow: <Yellow />,
  } as const;

  return BACKGROUND_IMAGE[color];
};

export default memo(BackgroundImage);

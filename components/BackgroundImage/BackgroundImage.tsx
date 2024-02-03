import Green from '@/public/assets/image/Background/Green.svg';
import Blue from '@/public/assets/image/Background/Blue.svg';
import Yellow from '@/public/assets/image/Background/Yellow.svg';
import { ThemeColor } from '@/types';
import { THEME_COLOR } from '@/constants';
import { memo } from 'react';

const BackgroundImage = ({ color }: { color: ThemeColor }) => {
  if (color === THEME_COLOR.GREEN) {
    return <Green />;
  }
  return color === THEME_COLOR.BLUE ? <Blue /> : <Yellow />;
};

export default memo(BackgroundImage);

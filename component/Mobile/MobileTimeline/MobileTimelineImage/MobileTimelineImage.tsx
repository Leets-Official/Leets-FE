import { ThemeColor } from '@/types';
import { THEME_COLOR } from '@/constants';
import Green from './Green';
import Blue from './Blue';
import Yellow from './Yellow';

const MobileTimelineImage = ({ color }: { color: ThemeColor }) => {
  if (color === THEME_COLOR.GREEN) {
    return <Green />;
  }
  if (color === THEME_COLOR.BLUE) {
    return <Blue />;
  }
  return <Yellow />;
};

export default MobileTimelineImage;

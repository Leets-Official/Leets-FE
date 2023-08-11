/** @jsxImportSource @emotion/react */
import { ThemeColor } from '@/types';
import Green from './Green';
import Blue from './Blue';
import Yellow from './Yellow';

const backgrounds = {
  green: <Green />,
  blue: <Blue />,
  yellow: <Yellow />,
};

export default function MobileTimelineImage({ color }: { color: ThemeColor }) {
  return (
    <svg width="36" height="566" viewBox="0 0 36 566" fill="none" xmlns="http://www.w3.org/2000/svg">
      {backgrounds[color]}
    </svg>
  );
}

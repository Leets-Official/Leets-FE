import Green from './Green';
import Blue from './Blue';
import Yellow from './Yellow';

const backgrounds = {
  green: <Green />,
  blue: <Blue />,
  yellow: <Yellow />,
};

export default function BackgroundImage({ color }) {
  return backgrounds[color];
}

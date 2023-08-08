/** @jsxImportSource @emotion/react */
import imageStyle from './TimelineImage.styled';

import Green from './Green';
import Blue from './Blue';
import Yellow from './Yellow';

const backgrounds = {
  green: <Green />,
  blue: <Blue />,
  yellow: <Yellow />,
};

export default function TimelineImage({ color }) {
  return (
    <svg css={imageStyle} viewBox="0 0 36 978" fill="none" xmlns="http://www.w3.org/2000/svg">
      {backgrounds[color]}
    </svg>
  );
}

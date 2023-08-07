/** @jsxImportSource @emotion/react */
import { THEME_COLOR } from '@/constants';
import { ThemeColor } from '@/types';
import imageStyle from './TimelineImage.styled';
import Green from './Green';
import Blue from './Blue';
import Yellow from './Yellow';

export default function TimelineImage({ color }: ThemeColor) {
  return (
    <div css={imageStyle}>
      {color === THEME_COLOR.GREEN && <Green />}
      {color === THEME_COLOR.BLUE ? <Blue /> : <Yellow />}
    </div>
  );
}

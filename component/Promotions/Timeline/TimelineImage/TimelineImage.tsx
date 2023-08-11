import { THEME_COLOR } from '@/constants';
import { ThemeColor } from '@/types';
import * as S from './TimelineImage.styled';
import Green from './Green';
import Blue from './Blue';
import Yellow from './Yellow';

export default function TimelineImage({ color }: { color: ThemeColor }) {
  return (
    <S.TimelineImageContainer>
      {color === THEME_COLOR.GREEN && <Green />}
      {color === THEME_COLOR.BLUE && <Blue />}
      {color === THEME_COLOR.YELLOW && <Yellow />}
    </S.TimelineImageContainer>
  );
}

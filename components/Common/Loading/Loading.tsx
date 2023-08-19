import Green from '@/public/assets/image/Logo/Green.svg';
import Blue from '@/public/assets/image/Logo/Blue.svg';
import Yellow from '@/public/assets/image/Logo/Yellow.svg';
import { ThemeColor, BackgroundColor } from '@/types';
import { THEME_COLOR } from '@/constants';
import * as S from './Loading.styled';

const Loading = ({ color, backgroundColor = 'white' }: { color: ThemeColor; backgroundColor?: BackgroundColor }) => (
  <S.LoadingContainer $backgroundColor={backgroundColor}>
    <S.LogoContainer>
      {color === THEME_COLOR.GREEN && <Green />}
      {color === THEME_COLOR.BLUE && <Blue />}
      {color === THEME_COLOR.YELLOW && <Yellow />}
    </S.LogoContainer>
  </S.LoadingContainer>
);

export default Loading;
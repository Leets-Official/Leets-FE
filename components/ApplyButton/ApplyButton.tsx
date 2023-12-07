import { ThemeColor } from '@/types';
import { USER } from '@/constants';
import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './ApplyButton.styled';

const ApplyButton = ({ color }: { color: ThemeColor }) => {
  const router = useRouter();

  const clickHandler = (e: MouseEvent) => {
    e.preventDefault();

    router.push(USER.APPLY);
  };

  return (
    <S.Container>
      <S.ApplyButton href={USER.APPLY} color={color} onClick={clickHandler}>
        지원하기
      </S.ApplyButton>
    </S.Container>
  );
};

export default ApplyButton;

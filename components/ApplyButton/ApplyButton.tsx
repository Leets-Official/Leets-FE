import { ThemeColor } from '@/types';
import { USER, APPLICATION } from '@/constants';
import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Schedule } from '@/utils/Schedule';
import { Alert } from '@/utils';
import * as S from './ApplyButton.styled';

const ApplyButton = ({ color }: { color: ThemeColor }) => {
  const router = useRouter();

  const clickHandler = (e: MouseEvent) => {
    e.preventDefault();

    const period = Schedule.getCurrentPeriod(new Date());
    if (period === 'CLOSE') {
      Alert.error(APPLICATION.NOT_RECRUIT_PERIOD);
      return;
    }

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

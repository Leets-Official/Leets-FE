import { POSITION_LIST, POSITION_MAP } from '@/constants';
import { useRouter } from 'next/navigation';
import * as S from './PositionFilter.styled';

const PositionFilter = () => {
  const router = useRouter();

  // TODO: Query
  const onClickHandler = (link: string) => {
    router.push(link);
  };

  return (
    <S.FilterContainer>
      <S.FilterByPosition>
        {POSITION_LIST.map(({ target }) => (
          <S.FilterBackground key={target} onClick={() => onClickHandler(target)} enable={target === 'All'}>
            <S.FilterText enable={target === 'All'}>{POSITION_MAP[target]}</S.FilterText>
          </S.FilterBackground>
        ))}
      </S.FilterByPosition>
    </S.FilterContainer>
  );
};

export default PositionFilter;

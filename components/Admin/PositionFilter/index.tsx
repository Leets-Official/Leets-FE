import { POSITION_TYPES, POSITION_FILTER_MAP } from '@/constants';
import { Dispatch, SetStateAction } from 'react';
import { KeyOf } from '@/types';
import * as S from './PositionFilter.styled';

type PositionFilterProps = {
  clickHandler: Dispatch<SetStateAction<KeyOf<typeof POSITION_FILTER_MAP>>>;
  type: KeyOf<typeof POSITION_FILTER_MAP>;
};

const PositionFilter = ({ clickHandler, type }: PositionFilterProps) => {
  const isTargetEnabled = (position: string) => position === type;

  return (
    <S.FilterContainer>
      <S.FilterByPosition>
        {POSITION_TYPES.map((position) => (
          <S.FilterBackground $enable={isTargetEnabled(position)} key={position} onClick={() => clickHandler(position)}>
            <S.FilterText $enable={isTargetEnabled(position)}>
              {POSITION_FILTER_MAP[position].replace('_', '/')}
            </S.FilterText>
          </S.FilterBackground>
        ))}
      </S.FilterByPosition>
    </S.FilterContainer>
  );
};

export default PositionFilter;

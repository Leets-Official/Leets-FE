import { Dispatch, SetStateAction } from 'react';
import { KeyOf, SortByType } from '@/types';
import { useDropdown } from '@/hooks';
import DropDownArrow from '@/public/assets/image/DropDownArrow.svg';
import { DROPDOWN_MAP } from '@/constants';
import * as S from './FilterDropDown.styled';

type FilterDropdownProps = {
  list: readonly string[];
  selected: KeyOf<typeof DROPDOWN_MAP>;
  setSelected: Dispatch<SetStateAction<string>>;
  sortTarget?: string;
  setSortBy?: Dispatch<SetStateAction<SortByType>>;
  otherSortInit?: () => void;
  setToggle?: Dispatch<SetStateAction<boolean>>;
};

export default function FilterDropDown({
  list,
  selected,
  setSelected,
  sortTarget,
  setSortBy,
  otherSortInit,
  setToggle,
}: FilterDropdownProps) {
  const [isOpen, toggleDropdown, dropdownRef] = useDropdown();

  const clickHandler = (type: string) => {
    setSelected(type);
    toggleDropdown();

    if (setSortBy && otherSortInit) {
      setSortBy(() => ({ target: sortTarget, method: type } as SortByType));
      otherSortInit();
    }

    if (setToggle) {
      setToggle(false);
    }
  };

  const newSelected = DROPDOWN_MAP[selected] ?? selected;
  const width = newSelected.length > 2 ? 10 : 7;

  return (
    <S.DropdownWrapper ref={dropdownRef} width={width}>
      <S.DropdownContainer onClick={toggleDropdown}>
        <S.TextContainer>{newSelected}</S.TextContainer>
        <S.ImageContainer isOpen={isOpen}>
          <DropDownArrow />
        </S.ImageContainer>
      </S.DropdownContainer>
      {isOpen && (
        <S.DropdownDiv>
          <S.Ul>
            {list.map((type) => (
              <S.List key={type} onClick={() => clickHandler(type)}>
                {DROPDOWN_MAP[type as KeyOf<typeof DROPDOWN_MAP>] || type}
              </S.List>
            ))}
          </S.Ul>
        </S.DropdownDiv>
      )}
    </S.DropdownWrapper>
  );
}

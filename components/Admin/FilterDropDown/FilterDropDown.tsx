import { Dispatch, SetStateAction } from 'react';
import { KeyOf, SortByType } from '@/types';
import DropDownArrow from '@/public/assets/image/DropDownArrow.svg';
import { DROPDOWN_MAP } from '@/constants';
import { useDropDown } from '@/hooks';
import * as S from './FilterDropDown.styled';

type FilterDropdownProps = {
  list: readonly string[];
  selected: KeyOf<typeof DROPDOWN_MAP>;
  setSelected: Dispatch<SetStateAction<any>>;
  sortTarget?: string;
  setSortBy?: Dispatch<SetStateAction<SortByType>>;
  initOtherSort?: () => void;
  setToggle?: Dispatch<SetStateAction<boolean>>;
  customWidth?: number;
};

const FilterDropDown = ({
  list,
  selected,
  setSelected,
  sortTarget,
  setSortBy,
  initOtherSort,
  setToggle,
  customWidth,
}: FilterDropdownProps) => {
  const { isOpen, toggleDropdown, dropdownRef } = useDropDown();

  const clickHandler = (type: string) => {
    setSelected(type);
    toggleDropdown();

    if (setSortBy && initOtherSort) {
      initOtherSort();
      setSortBy(() => ({ target: sortTarget, method: type } as SortByType));
    }

    if (setToggle) {
      setToggle(false);
    }
  };

  const newSelected = DROPDOWN_MAP[selected] ?? selected;
  const width = customWidth ?? (newSelected.length > 2 ? 20 : 14);

  return (
    <>
      <S.DropdownWrapper ref={dropdownRef} width={width}>
        <S.DropdownContainer onClick={toggleDropdown}>
          <S.TextContainer>{newSelected}</S.TextContainer>
          <S.ImageContainer $isOpen={isOpen}>
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
    </>
  );
};
export default FilterDropDown;

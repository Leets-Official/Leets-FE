'use client';

import { memo } from 'react';
import { KeyOf, SortByType, FilterDropdownProps } from '@/types';
import DropDownArrow from '@/public/assets/image/DropDownArrow.svg';
import { DROPDOWN_MAP } from '@/constants';
import { useDropDown } from '@/hooks';
import * as S from './FilterDropDown.styled';

const FilterDropDown = ({
  list,
  selected,
  setSelected,
  sortTarget,
  setSortBy,
  initOtherSort,
  customWidth,
  defaultValue,
}: FilterDropdownProps) => {
  const { isOpen, toggleDropdown, dropdownRef } = useDropDown();
  const value = selected || defaultValue;

  const newSelected = DROPDOWN_MAP[value] ?? value;
  const width = customWidth ?? 20;

  const initSort = (type: string) => {
    initOtherSort?.();
    setSortBy?.({ target: sortTarget, method: type } as SortByType);
  };

  const clickHandler = (type: string) => {
    setSelected(type);
    toggleDropdown();

    initSort(type);
  };

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
          <S.DropdownContent>
            <S.Ul>
              {list.map((type) => (
                <S.List key={type} onClick={() => clickHandler(type)}>
                  {DROPDOWN_MAP[type as KeyOf<typeof DROPDOWN_MAP>] || type}
                </S.List>
              ))}
            </S.Ul>
          </S.DropdownContent>
        )}
      </S.DropdownWrapper>
    </>
  );
};

export default memo(FilterDropDown);

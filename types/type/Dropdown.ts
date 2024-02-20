import { DROPDOWN_MAP } from '@/constants';
import { Dispatch, SetStateAction } from 'react';
import { KeyOf } from '../Helper';
import { SortByType } from './Search';

export type FilterDropdownProps = {
  list: readonly string[];
  selected: KeyOf<typeof DROPDOWN_MAP>;
  setSelected: Dispatch<SetStateAction<any>>;
  sortTarget?: string;
  setSortBy?: Dispatch<SetStateAction<SortByType>>;
  initOtherSort?: () => void;
  customWidth?: number;
};

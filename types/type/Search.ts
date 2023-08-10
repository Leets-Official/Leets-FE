import { ChangeEvent } from 'react';

export type SearchInput = {
  value: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type SearchList<T> = {
  list: T[];
};

export type Order = {
  ASC: string;
  DESC: string;
};

export type SortByType = {
  target: 'gpa' | 'interviewDate' | null;
  method: 'ASC' | 'DESC' | null;
};

export type FilterConditionMaker = {
  keys: string[];
  filterValueList: string[];
  defaultValueList: string[];
};

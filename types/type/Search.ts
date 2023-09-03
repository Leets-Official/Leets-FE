import { ChangeEvent } from 'react';
import { SEARCH_TARGET, SORT_METHOD, SORT_TARGET } from '@/constants';
import { ValueOf } from '../Helper';

export type SearchInput = {
  value: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type SearchList<T> = {
  applications: T[];
  searchTargets: ValueOf<typeof SEARCH_TARGET>[];
};

export type Order = {
  ASC: string;
  DESC: string;
};

export type SortByType = {
  target: ValueOf<typeof SORT_TARGET> | null;
  method: ValueOf<typeof SORT_METHOD>;
};

export type ApplicationFilterType = {
  gpa?: string;
  interviewDate?: string;
  interviewStatus?: string;
  passStatus?: string;
  applicationStatus?: string;
};

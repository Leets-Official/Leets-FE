import { SORT_TARGETS, SEARCH_TARGETS, DEFAULT_VALUE } from '@/constants';
import { KeyOf, SortByType, ApplicationFilterType } from '@/types';

const { APPLICATION_STATUS, INTERVIEW_STATUS } = SEARCH_TARGETS;

export type FilterConditionMaker = {
  defaultValueList: string[];
};

export class Search {
  static isInclude(content: string, input: string) {
    return content.includes(input) || input.includes(content);
  }

  static filter(list: any[], conditions: ApplicationFilterType, sortBy: SortByType) {
    const newList = Object.entries(conditions).reduce(
      (beforeList, [key, value]) => beforeList.filter((elem) => String(elem[key]) === value),
      list
    );
    if (sortBy.target) {
      return this.sort(newList, sortBy);
    }
    return newList;
  }

  static makeFilterConditionObj({ filterValueList }: { filterValueList: string[] }) {
    const keys = [APPLICATION_STATUS, INTERVIEW_STATUS] as string[];
    const DEFAULT_VALUES = [DEFAULT_VALUE.APPLICATION_STATUS, DEFAULT_VALUE.INTERVIEW_STATUS];

    return filterValueList.reduce((obj, filterValue, index) => {
      if (filterValue !== DEFAULT_VALUES[index]) {
        return { ...obj, [keys[index]]: filterValue };
      }
      return obj;
    }, {});
  }

  static sort<T>(list: T[], { target, method }: SortByType): T[] {
    return list.sort((elemA: T, elemB: T) => {
      if (method === SORT_TARGETS.ASC) {
        return String(elemA[target as KeyOf<T>]).localeCompare(String(elemB[target as KeyOf<T>]));
      }
      return String(elemB[target as KeyOf<T>]).localeCompare(String(elemA[target as KeyOf<T>]));
    });
  }
}

import { SORT_METHOD, FILTER_TARGET, FILTER_DEFAULT_VALUE } from '@/constants';
import { KeyOf, SortByType, ApplicationFilterType, ApplicationType } from '@/types';

const { APPLICATION_STATUS, INTERVIEW_STATUS } = FILTER_TARGET;

export class Search {
  static isInclude(content: string, input: string) {
    return content.includes(input) || input.includes(content);
  }

  static filter(list: ApplicationType[], conditions: ApplicationFilterType) {
    return (
      Object.entries(conditions)
        // .filter(([_, value]) => value)
        .reduce((beforeList, [key, value]) => {
          if (key === 'hasInterview') {
            return beforeList.filter((elem) => String(elem.interview[key]) === value);
          }
          return beforeList.filter((elem) => String(elem[key as KeyOf<ApplicationType>]) === value);
        }, list)
    );
  }

  static makeFilterConditionObj({ filterValueList }: { filterValueList: string[] }) {
    const keys = [APPLICATION_STATUS, INTERVIEW_STATUS];
    const DEFAULT_VALUES = [FILTER_DEFAULT_VALUE.APPLICATION_STATUS, FILTER_DEFAULT_VALUE.INTERVIEW_STATUS];

    return filterValueList.reduce((obj, filterValue, index) => {
      if (filterValue && filterValue !== DEFAULT_VALUES[index]) {
        return { ...obj, [keys[index]]: filterValue };
      }
      return obj;
    }, {});
  }

  static sort<T extends ApplicationType>(list: T[], { target, method }: SortByType): T[] {
    if (target === 'fixedInterviewDate') {
      return list.sort((elemA: T, elemB: T) => {
        if (method === SORT_METHOD.ASC) {
          return String(elemA.interview[target]).localeCompare(String(elemB.interview[target]));
        }
        return String(elemB.interview[target]).localeCompare(String(elemA.interview[target]));
      });
    }

    return list.sort((elemA: T, elemB: T) => {
      if (method === SORT_METHOD.ASC) {
        return String(elemA[target as KeyOf<T>]).localeCompare(String(elemB[target as KeyOf<T>]));
      }
      return String(elemB[target as KeyOf<T>]).localeCompare(String(elemA[target as KeyOf<T>]));
    });
  }
}

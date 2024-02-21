'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useQueryCreator from './useQueryCreator';

const useQuery = <T extends Record<string, string>>(defaultObject: T) => {
  const searchParams = useSearchParams().toString();
  const { push } = useRouter();
  const queryCreator = useQueryCreator();
  const params = parseQueryParams(searchParams) as T;
  const query = Object.keys(params).length > 0 ? params : defaultObject;
  const pathname = usePathname();

  const setQuery = <V extends object>(object: V, predicate: boolean = true) => {
    if (typeof object !== 'object' || Array.isArray(object)) {
      throw new Error('쿼리를 만들기 위해서는 객체가 할당되어야 합니다.');
    }

    Object.entries(object).forEach(([key, value]) => {
      if (predicate && value !== defaultObject[key]) {
        const newQuery = queryCreator(key, value);
        push(newQuery);
      }
    });
  };

  const initQuery = () => {
    push(pathname);
  };

  return { query, setQuery, initQuery };
};

export default useQuery;

function parseQueryParams(queryString: string) {
  if (!queryString) {
    return {};
  }

  const params = new URLSearchParams(queryString);
  return [...params.entries()].reduce((object, [key, value]) => {
    return { ...object, [key]: value };
  }, {});
}

'use client';

import { useCallback } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

const useQueryCreator = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const createQueryString = useCallback(
    (name: string, queryValue: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, queryValue);
      return params.toString();
    },
    [searchParams]
  );
  return (key: string, value: string) => `${pathname}?${createQueryString(key, value)}`;
};

export default useQueryCreator;

import { useCallback } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

const useQueryCreator = (): ((key: string, value: string) => string) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const createQueryString = useCallback(
    (name: string, queryValue: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, queryValue);
      return params.toString();
    },
    [searchParams]
  );
  return (key: string, value: string) => `${pathname}?${createQueryString(key, value)}`;
};

export { useQueryCreator };

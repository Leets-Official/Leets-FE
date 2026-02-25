'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useTransitionRouter() {
  const router = useRouter();

  const push = useCallback(
    (href: string) => {
      if (!('startViewTransition' in document)) {
        router.push(href);
        return;
      }
      (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(
        () => {
          router.push(href);
        },
      );
    },
    [router],
  );

  return { ...router, push };
}

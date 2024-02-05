'use client';

import { useEffect, useState } from 'react';

const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  });
  return isLoading;
};

export default useIsLoading;

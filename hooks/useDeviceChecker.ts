'use client';

import { DeviceChecker } from '@/utils';
import { useEffect, useState } from 'react';

const useDeviceChecker = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    if (DeviceChecker.isDesktop()) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [isDesktop]);
  return { isDesktop };
};

export default useDeviceChecker;

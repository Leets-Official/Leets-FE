'use client';

import { DeviceChecker } from '@/utils';
import { useEffect, useState } from 'react';

const useDeviceChecker = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    if (DeviceChecker.isDesktop()) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);
  return isDesktop;
};

export { useDeviceChecker };

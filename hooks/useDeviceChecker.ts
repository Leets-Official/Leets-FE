'use client';

import { DeviceChecker } from '@/utils';
import { useEffect, useState } from 'react';

const useDeviceChecker = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    if (!DeviceChecker.isDesktop()) {
      setIsDesktop(false);
    }
  }, []);
  return isDesktop;
};

export { useDeviceChecker };

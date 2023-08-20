'use client';

import { DeviceChecker } from '@/utils';
import { useEffect, useState } from 'react';

const useDeviceChecker = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (!DeviceChecker.isDesktop()) {
      setIsDesktop(false);
    }
    if (DeviceChecker.isMobile()) {
      setIsMobile(true);
    }
  }, []);
  return { isDesktop, isMobile };
};

export { useDeviceChecker };

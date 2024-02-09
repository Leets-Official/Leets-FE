'use client';

import { useEffect, useState } from 'react';
import useDeviceChecker from './useDeviceChecker';

const useViewport = () => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const { isDesktop } = useDeviceChecker();

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth <= 541 || !isDesktop) {
        setDevice('mobile');
      } else {
        setDevice('desktop');
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  return { isDesktop: device === 'desktop' };
};

export default useViewport;

'use client';

import { useEffect, useState } from 'react';
import useDeviceChecker from './useDeviceChecker';

const useViewport = () => {
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');
  const { isDesktop } = useDeviceChecker();

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth <= 541 && !isDesktop) {
        setViewport('mobile');
      } else {
        setViewport('desktop');
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  return { isDesktop: viewport === 'desktop' };
};

export default useViewport;

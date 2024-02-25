'use client';

import { useEffect, useState } from 'react';

const useViewport = () => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth <= 541) {
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
  });

  return { isDesktop: device === 'desktop' };
};

export default useViewport;

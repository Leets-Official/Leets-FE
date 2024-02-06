import { useEffect, useState } from 'react';

const useViewport = () => {
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth <= 541) {
        setViewport('mobile');
      } else {
        setViewport('desktop');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isDesktop: viewport === 'desktop' };
};

export default useViewport;

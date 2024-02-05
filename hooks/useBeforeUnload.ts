'use client';

import { APPLICATION } from '@/constants';
import { useState, useEffect } from 'react';

const useBeforeUnload = () => {
  const [submitClicked, setSubmitClicked] = useState<boolean>(false);

  const submitClickHandler = () => {
    setSubmitClicked(() => true);
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!submitClicked) {
        e.preventDefault();
        e.returnValue = APPLICATION.CONFIRM_MOVE;
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [submitClicked]);

  return submitClickHandler;
};

export default useBeforeUnload;

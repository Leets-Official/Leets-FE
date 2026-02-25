'use client';

import { useSession } from 'next-auth/react';
import { SUBMIT_STATUS } from '@/constants';

const useSessionData = () => {
  const session = useSession();

  // Dev 전용: ?mockSubmit=true → submitStatus를 SUBMIT으로 강제
  const mockSubmit =
    process.env.NODE_ENV === 'development' &&
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('mockSubmit') === 'true';

  return {
    accessToken: session.data?.accessToken,
    submitStatus: mockSubmit ? SUBMIT_STATUS.SUBMIT : session.data?.submitStatus,
    uid: session.data?.uid,
    userName: session.data?.user?.name,
    status: session.status,
    update: session.update,
  };
};

export default useSessionData;

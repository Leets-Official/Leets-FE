'use client';

import { useSession } from 'next-auth/react';

const useSessionData = () => {
  const session = useSession();
  return {
    accessToken: session.data?.accessToken,
    submitStatus: session.data?.submitStatus,
    uid: session.data?.uid,
    userName: session.data?.user?.name,
    status: session.status,
    update: session.update,
  };
};

export default useSessionData;

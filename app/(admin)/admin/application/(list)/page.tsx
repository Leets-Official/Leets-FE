'use client';

import { useState, useEffect, memo, Suspense } from 'react';
import { ApplicationType, KeyOf } from '@/types';
import { getApplicationList } from '@/api';
import PositionFilter from '@/components/Admin/PositionFilter';
import { POSITION_FILTER_MAP } from '@/constants';
import { ApplicationFilterProvider } from '@/app/lib';
import dynamic from 'next/dynamic';
import { isAxiosError } from 'axios';
import * as S from './styled';

const ApplicationList = dynamic(() => import('@/components/Admin/ApplicationList'));

const Page = () => {
  const [applications, setApplications] = useState<ApplicationType[]>([]);
  const [position, setPosition] = useState<KeyOf<typeof POSITION_FILTER_MAP>>(POSITION_FILTER_MAP.All);

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await getApplicationList({ position });
      if (!isAxiosError(result)) {
        setApplications(result);
      }
    };
    fetchData();
  }, [position]);

  return (
    <S.ContentContainer>
      <PositionFilter clickHandler={setPosition} type={position} />
      <S.Title>지원서 내역</S.Title>
      <Suspense>
        <ApplicationFilterProvider>
          <ApplicationList applications={applications} />
        </ApplicationFilterProvider>
      </Suspense>
    </S.ContentContainer>
  );
};

export default memo(Page);

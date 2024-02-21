'use client';

import { useState, useEffect, memo } from 'react';
import { ApplicationType, KeyOf } from '@/types';
import { getApplicationList } from '@/api';
import { isAxiosError } from 'axios';
import PositionFilter from '@/components/Admin/PositionFilter';
import { POSITION_FILTER_MAP } from '@/constants';
import ApplicationList from '@/components/Admin/ApplicationList';
import { ApplicationFilterProvider } from '@/app/lib';
import * as S from './styled';

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
      <ApplicationFilterProvider>
        <ApplicationList applications={applications} />
      </ApplicationFilterProvider>
    </S.ContentContainer>
  );
};

export default memo(Page);

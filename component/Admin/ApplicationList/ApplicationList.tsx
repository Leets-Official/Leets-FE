'use client';

import Nav from '@/component/Admin/Nav';
import { useState, useEffect } from 'react';
import { ApplicationListType, KeyOf } from '@/types';
import * as api from '@/api';
import axios from 'axios';
import PositionFilter from '@/component/Admin/PositionFilter';
import { ADMIN, POSITION_MAP } from '@/constants';
import { useRouter } from 'next/navigation';
import Loading from '@/component/Common/Loading';
import { useAppSelector } from '@/store';
import * as S from './ApplicationList.styled';
import ListComponent from './ListComponent';

const ApplicationList = () => {
  const [applications, setApplications] = useState<ApplicationListType[]>([]);
  const [position, setPosition] = useState<KeyOf<typeof POSITION_MAP>>(POSITION_MAP.All);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { name } = useAppSelector((state) => state.admin);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await api.getApplicationList({ position });
      if (!axios.isAxiosError(result)) {
        setApplications(result);
      }
      setIsLoading(false);
    };
    if (!name) {
      router.replace(ADMIN.LOGIN);
    }
    fetchData();
  }, [position]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <S.ApplicationListContainer>
      <S.ContentContainer>
        <Nav />
        <PositionFilter clickHandler={setPosition} type={position} />
        <S.Title>지원서 내역</S.Title>
        <ListComponent applications={applications} />
      </S.ContentContainer>
    </S.ApplicationListContainer>
  );
};

export default ApplicationList;

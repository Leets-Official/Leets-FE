'use client';

import Nav from '@/component/Admin/Nav';
import { useState, useEffect } from 'react';
import { ApplicationListType, KeyOf } from '@/types';
import * as api from '@/api';
import axios from 'axios';
import PositionFilter from '@/component/Admin/PositionFilter';
import { POSITION_MAP } from '@/constants';
import * as S from './ApplicationList.styled';
import ListComponent from './ListComponent';

const ApplicationList = () => {
  const [applications, setApplications] = useState<ApplicationListType[]>([]);
  const [type, setType] = useState<KeyOf<typeof POSITION_MAP>>(POSITION_MAP.All);

  useEffect(() => {
    const fetchData = async () => {
      // const { result } = await api.getApplicationList({ type });
      // if (!axios.isAxiosError(result)) {
      //   setApplications(result);
      // }
    };
    fetchData();
  }, [type]);

  return (
    <S.ApplicationListContainer>
      <S.ContentContainer>
        <Nav />
        <PositionFilter clickHandler={setType} type={type} />
        <S.Title>지원서 내역</S.Title>
        <ListComponent applications={applications} />
      </S.ContentContainer>
    </S.ApplicationListContainer>
  );
};

export default ApplicationList;

'use client';

import Nav from '@/component/Admin/Nav';
import { useEffect, useState } from 'react';
import * as api from '@/api';
import axios from 'axios';
import { ApplicationDetailType, IdRequest } from '@/types';
import { APPLICATION_DETAIL_DEFAULT } from '@/constants';
import * as S from './ApplicationDetail.styled';
import Application from './Application';

const ApplicationDetail = ({ id }: IdRequest) => {
  const [application, setApplication] = useState<ApplicationDetailType>(APPLICATION_DETAIL_DEFAULT);

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await api.getApplicationDetail({ id });
      if (!axios.isAxiosError(result)) {
        setApplication(result);
      }
    };
    fetchData();
  }, [id]);

  return (
    <S.ApplyListContainer>
      <S.ContentContainer>
        <Nav />
        <S.Title>지원서 상세</S.Title>
        <Application application={application} />
      </S.ContentContainer>
    </S.ApplyListContainer>
  );
};

export default ApplicationDetail;

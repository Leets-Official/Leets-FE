'use client';

import Nav from '@/component/Admin/Nav';
import * as S from './ApplicationDetail.styled';
import Application from './Application';

const ApplyList = () => {
  return (
    <S.ApplyListContainer>
      <S.ContentContainer>
        <Nav />
        <S.Title>지원서 상세</S.Title>
        <Application />
      </S.ContentContainer>
    </S.ApplyListContainer>
  );
};

export default ApplyList;

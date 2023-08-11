import Nav from '@/component/Admin/Nav';
import * as S from './ApplyList.styled';
import ListComponent from './ListComponent';

const ApplyList = () => {
  return (
    <S.ApplyListContainer>
      <S.ContentContainer>
        <Nav />
        <S.Title>지원서 내역</S.Title>
        <ListComponent />
      </S.ContentContainer>
    </S.ApplyListContainer>
  );
};

export default ApplyList;

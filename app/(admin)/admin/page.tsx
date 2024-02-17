import Nav from '@/components/Admin/Nav';
import LoginForm from '@/components/Form/LoginForm';
import * as S from './styled';

const Admin = () => (
  <S.MainContainer>
    <S.ContentContainer>
      <S.FormContainer>
        <Nav />
        <LoginForm />
      </S.FormContainer>
    </S.ContentContainer>
  </S.MainContainer>
);

export default Admin;

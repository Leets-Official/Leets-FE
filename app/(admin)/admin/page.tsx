import Nav from '@/components/Admin/Nav';
import LoginForm from '@/components/Form/LoginForm';
import * as S from './styled';

const Admin = () => {
  return (
    <S.ContentContainer>
      <S.FormContainer>
        <Nav />
        <LoginForm />
      </S.FormContainer>
    </S.ContentContainer>
  );
};

export default Admin;

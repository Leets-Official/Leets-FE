import Nav from '@/components/Admin/Nav';
import LoginForm from '@/components/Form/LoginForm';
import * as S from './styled';

const Page = () => (
  <S.LoginPageWrapper>
    <S.LoginHeader>
      <Nav />
    </S.LoginHeader>
    <S.LoginSection>
      <S.LoginCardWrapper>
        <S.LoginTitle>관리자 로그인</S.LoginTitle>
        <S.LoginCard>
          <LoginForm />
        </S.LoginCard>
        <S.PcLoginButton type="submit" form="admin-login-form">로그인</S.PcLoginButton>
      </S.LoginCardWrapper>
    </S.LoginSection>
    <S.LoginFooter>
      <S.FooterDivider />
      <S.Copyright>Copyright 2023-2026. Leets All rights reserved.</S.Copyright>
    </S.LoginFooter>
  </S.LoginPageWrapper>
);

export default Page;

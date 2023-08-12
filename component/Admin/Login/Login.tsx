import Nav from '@/component/Admin/Nav';
import { useLogin } from '@/hooks';
import { LOGIN_LAYOUT } from '@/constants';
import * as S from './Login.styled';

const Login = () => {
  const { changeHandler, onSubmitHandler } = useLogin();

  return (
    <S.ApplyListContainer>
      <S.ContentContainer>
        <S.LoginContainer>
          <Nav />
          <S.Form onSubmit={onSubmitHandler}>
            <S.InputSection>
              {LOGIN_LAYOUT.map(({ key, placeholder }) => (
                <S.InputStyle
                  type={key === 'id' ? 'text' : 'password'}
                  key={key}
                  onChange={(e) => changeHandler(e, key)}
                  placeholder={placeholder}
                  autoComplete={key === 'password' ? 'off' : 'on'}
                />
              ))}
            </S.InputSection>
            <S.Button>로그인</S.Button>
          </S.Form>
        </S.LoginContainer>
      </S.ContentContainer>
    </S.ApplyListContainer>
  );
};

export default Login;

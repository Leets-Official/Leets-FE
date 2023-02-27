/** @jsxImportSource @emotion/react */
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { navStyle, home, linkStyle, welcomeContainer, welcomeStyle, buttonStyle } from './Nav.style';
import persistor from '../..';
import { userSlice } from '../../features/userSlice';

export default function Nav({ color }) {
  const userName = useSelector(state => state.user.name);
  const dispatch = useDispatch();
  // console.log(userName);

  const purge = async () => {
    // window.location.reload();
    await persistor.purge();
    dispatch(userSlice.actions.logout());
  };

  return (
    <nav css={navStyle}>
      <div css={home}>
        <Link css={linkStyle} to="/">
          Leets
        </Link>
        <div css={welcomeContainer(userName)}>
          <div css={welcomeStyle}>{userName && `${userName}님 `}환영해요!</div>
          {userName && (
            <button type="button" css={buttonStyle(userName, color)} onClick={purge}>
              로그아웃
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

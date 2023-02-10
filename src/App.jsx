import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

import GlobalStyle from './GlobalStyle';
import Main from './pages/Main';

export default function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

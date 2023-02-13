import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import Main from './pages/Main';
import Apply from './pages/Apply';

export default function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Apply" element={<Apply />} />
      </Routes>
    </>
  );
}

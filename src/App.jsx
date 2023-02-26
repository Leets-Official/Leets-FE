import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import Main from './pages/Main';
import Apply from './pages/Apply';
import Calculator from './pages/Calculator';
import Login from './pages/Login';

export default function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Apply" element={<Apply />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const NavContainer = styled.header`
  width: 100%;
  background: transparent;
  height: 60px;
  flex-shrink: 0;
`;

export const NavInner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 32px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 819px) {
    padding: 0 20px;
  }
`;

/* 오른쪽: 메뉴 아이템 + 로그아웃 버튼 묶음 */
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
`;

export const NavMenuItem = styled(Link)`
  all: unset;
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #153464;
  letter-spacing: -0.28px;
  cursor: pointer;

  &:hover {
    background: rgba(53, 132, 251, 0.08);
  }
`;

export const LogoutButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #153464;
  letter-spacing: -0.28px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: rgba(53, 132, 251, 0.08);
  }
`;

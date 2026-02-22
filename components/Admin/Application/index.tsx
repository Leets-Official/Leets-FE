'use client';

import { useState, useRef } from 'react';
import { ApplicationDetailType, CommentsResponse } from '@/types';
import { APPLY_POSITION, SHORT_INFO_LAYOUT, LONG_INFO_LAYOUT, SELF_INTRODUCTION_LAYOUT } from '@/constants';
import { Validator } from '@/utils';
import ApplicationStatus from './ApplicationStatus';
import * as S from './Application.styled';
import Comments from './Comments';

/* 연필 아이콘 (Material Design edit, viewBox 0 0 24 24) */
const EditIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
  </svg>
);

const Application = ({ application, comments }: { application: ApplicationDetailType; comments: CommentsResponse }) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [dragDelta, setDragDelta] = useState(0);
  const dragStartY = useRef(0);
  const applicationWithPosition = { ...application, position: APPLY_POSITION[application.position] };

  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartY.current = e.touches[0].clientY;
    setDragDelta(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const delta = e.touches[0].clientY - dragStartY.current;
    if (delta > 0) setDragDelta(delta);
  };

  const handleTouchEnd = () => {
    if (dragDelta > 80) setSheetOpen(false);
    setDragDelta(0);
  };

  return (
    <>
      <S.ApplicationContainer>
        {/* ── Left content area ── */}
        <S.ApplicationTextContainer>
          {/* 인적 정보 */}
          <S.PersonalInformationContainer>
            <S.SubTitle>인적 정보</S.SubTitle>
            <S.PersonalInformation>
              {SHORT_INFO_LAYOUT.map(({ title, value }) => (
                <Info key={title} title={title} value={String(applicationWithPosition[value] ?? '')} />
              ))}
              {LONG_INFO_LAYOUT.map(({ title, value }) => (
                <LongInfo key={title} title={title} value={String(applicationWithPosition[value] ?? '')} />
              ))}
            </S.PersonalInformation>
          </S.PersonalInformationContainer>

          {/* 링크 */}
          <S.LinkContainer>
            <S.SubTitle>링크</S.SubTitle>
            {application.portfolio.toLowerCase().includes('github') && <S.Key>Github</S.Key>}
            {application.portfolio.toLowerCase().includes('figma') && <S.Key>Figma</S.Key>}
            {Validator.isUrl(application.portfolio) ? (
              <S.PortfolioLink href={application.portfolio} target="_blank" rel="noopener noreferrer">
                {application.portfolio}
              </S.PortfolioLink>
            ) : (
              <S.LongValue>{application.portfolio}</S.LongValue>
            )}
          </S.LinkContainer>

          {/* 자기소개 */}
          <S.SelfIntroductionContainer>
            {SELF_INTRODUCTION_LAYOUT.map(({ title, value }) => (
              <SelfIntroduction key={title} title={title} value={String(applicationWithPosition[value] ?? '')} />
            ))}
          </S.SelfIntroductionContainer>
        </S.ApplicationTextContainer>

        {/* ── Right sidebar ──
         * PC:     댓글 위, 면접정보/합격상태 아래
         * Mobile: 댓글만 표시, 면접정보는 FAB → 시트
         */}
        <S.SideBar>
          {/* PC에서만 사이드바에 표시, 모바일에서는 FAB 시트로 접근 */}
          <S.DesktopOnly>
            <ApplicationStatus {...application} />
          </S.DesktopOnly>
          <Comments comments={comments} />
        </S.SideBar>
      </S.ApplicationContainer>

      {/* ── Mobile FAB: 면접 정보 입력 ── */}
      <S.MobileFab onClick={() => setSheetOpen(true)} aria-label="면접 정보 입력">
        <EditIcon />
      </S.MobileFab>

      <S.MobileOverlay $open={sheetOpen} onClick={() => setSheetOpen(false)} />

      <S.MobileSheet
        $open={sheetOpen}
        style={dragDelta > 0 ? { transform: `translateY(${dragDelta}px)`, transition: 'none' } : undefined}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <S.SheetHandle />
        <S.SheetTitle>면접 정보</S.SheetTitle>
        <ApplicationStatus {...application} />
      </S.MobileSheet>
    </>
  );
};

export default Application;

interface ApplicationProps {
  title: string;
  value: string;
}

const Info = ({ title, value }: ApplicationProps) => (
  <S.Info>
    <S.Key>{title}</S.Key>
    <S.Value>{value}</S.Value>
  </S.Info>
);

const LongInfo = ({ title, value }: ApplicationProps) => (
  <S.Info>
    <S.Key>{title}</S.Key>
    <S.LongValue>{value}</S.LongValue>
  </S.Info>
);

const SelfIntroduction = ({ title, value }: ApplicationProps) => (
  <S.SelfIntroduction>
    <S.SubTitle>{title}</S.SubTitle>
    <S.Text>{value}</S.Text>
  </S.SelfIntroduction>
);

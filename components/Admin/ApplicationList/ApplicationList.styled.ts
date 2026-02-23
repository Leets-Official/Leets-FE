'use client';

import { styled } from 'styled-components';
import { InterviewStatusType, ApplicationStatusType } from '@/types';
import {
  INTERVIEW_ATTEND_STATUS_COLOR,
  APPLICATION_STATUS_TEXT_COLOR,
  APPLICATION_STATUS_BG_COLOR,
} from '@/constants';
import Link from 'next/link';

/* ── Container ── */

export const ApplicationContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* ── Controls row ──
 * PC:     [SearchWrapper flex:1]   [FiltersGroup →]
 * Mobile: [SearchWrapper full-width]
 *         [FiltersGroup full-width / wrap]
 */

export const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 819px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

/* Search takes remaining space on PC; full width on mobile */
export const SearchWrapper = styled.div`
  flex: 1;
  min-width: 0;

  @media (max-width: 819px) {
    width: 100%;
  }
`;

/* Filters group: right side on PC, wrapping row on mobile */
export const FiltersGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;

  @media (max-width: 819px) {
    width: 100%;
  }
`;

/* ── Segmented tab control ── */

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 8px;
  padding: 4px;
  gap: 2px;
  flex-shrink: 0;

  @media (max-width: 819px) {
    flex-wrap: wrap;
    width: fit-content;
  }
`;

export const Tab = styled.button<{ $active: boolean }>`
  all: unset;
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  color: ${({ $active }) => ($active ? '#ffffff' : 'rgba(31,79,150,0.5)')};
  background: ${({ $active }) => ($active ? '#3584fb' : 'transparent')};
  border-radius: 6px;
  padding: 7px 10px;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.15s,
    color 0.15s;

  &:hover {
    background: ${({ $active }) => ($active ? '#3584fb' : 'rgba(53,132,251,0.08)')};
    color: ${({ $active }) => ($active ? '#ffffff' : '#153464')};
  }
`;

export const InitFilterButton = styled.button`
  all: unset;
  font-size: 13px;
  font-weight: 500;
  color: rgba(21, 52, 100, 0.6);
  background: #ffffff;
  border: 1px solid rgba(21, 52, 100, 0.3);
  border-radius: 6px;
  padding: 7px 12px;
  cursor: pointer;
  flex-shrink: 0;
  white-space: nowrap;

  &:hover {
    background: #f4f8fe;
    color: #153464;
  }
`;

/* ── Table ── */

export const TableWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(31, 79, 150, 0.2);
  border-radius: 16px;
  overflow: hidden;
`;

const cellBase = `
  font-size: 13px;
  font-weight: 500;
  color: rgba(21, 52, 100, 0.6);
  letter-spacing: -0.26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  background: #ffffff;
  border-bottom: 1px solid rgba(31, 79, 150, 0.12);
  padding: 0 16px;
`;

export const TableBody = styled.div`
  width: 100%;
`;

export const TableRow = styled(Link)`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(31, 79, 150, 0.08);
  text-decoration: none;
  color: #153464;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  transition: background 0.12s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(53, 132, 251, 0.06);
  }
`;

/* ── Column widths ── */

export const ColName = styled.div`
  ${cellBase}
  width: 110px;
  flex-shrink: 0;

  @media (max-width: 819px) {
    width: 56px;
  }
`;

export const ColGrade = styled.div`
  ${cellBase}
  width: 56px;
  flex-shrink: 0;

  @media (max-width: 819px) {
    display: none;
  }
`;

export const ColPosition = styled.div`
  ${cellBase}
  width: 100px;
  flex-shrink: 0;

  @media (max-width: 819px) {
    width: 64px;
  }
`;

export const ColInterviewDate = styled.div`
  ${cellBase}
  flex: 1;
  min-width: 0;

  @media (max-width: 819px) {
    display: none;
  }
`;

/* 모바일 전용: 면접 여부 dot + 일시 텍스트 한 컬럼 */
export const ColInterviewCombined = styled.div`
  ${cellBase}
  display: none;

  @media (max-width: 819px) {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export const ColInterviewStatus = styled.div`
  ${cellBase}
  width: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  @media (max-width: 819px) {
    display: none;
  }
`;

export const ColStatus = styled.div`
  ${cellBase}
  width: 100px;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  @media (max-width: 819px) {
    width: 72px;
  }
`;

/* ── Status elements ── */

export const InterviewDot = styled.div<{ $hasInterview: InterviewStatusType }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $hasInterview }) => INTERVIEW_ATTEND_STATUS_COLOR[$hasInterview]};
  flex-shrink: 0;
`;

export const StatusBadge = styled.div<{ $applicationStatus: ApplicationStatusType }>`
  font-size: 11px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px 7px;
  border-radius: 8px;
  white-space: nowrap;
  background: ${({ $applicationStatus }) => APPLICATION_STATUS_BG_COLOR[$applicationStatus]};
  color: ${({ $applicationStatus }) => APPLICATION_STATUS_TEXT_COLOR[$applicationStatus]};
`;

/* ── Pagination ── */

export const PaginationWrapper = styled.div`
  padding: 4px 0;
  border-top: 1px solid rgba(31, 79, 150, 0.08);
`;

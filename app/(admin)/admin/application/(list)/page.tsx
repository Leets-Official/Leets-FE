'use client';

import { useEffect, memo, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { ApplicationType, KeyOf } from '@/types';
import { getApplicationList } from '@/api';
import { POSITION_FILTER_MAP } from '@/constants';
import { ApplicationFilterProvider } from '@/app/lib';
import dynamic from 'next/dynamic';
import { isAxiosError } from 'axios';
import * as S from './styled';

const ApplicationList = dynamic(() => import('@/components/Admin/ApplicationList'));

const Page = () => {
  const [applications, setApplications] = useState<ApplicationType[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  /* position은 URL searchParam에서 읽기 (기본값: 'All') */
  const position = (searchParams.get('position') as KeyOf<typeof POSITION_FILTER_MAP>) ?? 'All';

  const handlePositionChange = (pos: KeyOf<typeof POSITION_FILTER_MAP>) => {
    const params = new URLSearchParams(searchParams.toString());
    if (pos === 'All') params.delete('position');
    else params.set('position', pos);
    params.delete('pageNumber');
    router.replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (position === 'BX_BI') {
        /* D 탭: BX_BI + UX_UI 병합 */
        const [bxBi, uxUi] = await Promise.all([
          getApplicationList({ position: 'BX_BI' }),
          getApplicationList({ position: 'UX_UI' }),
        ]);
        const merged = [
          ...(!isAxiosError(bxBi.result) ? bxBi.result : []),
          ...(!isAxiosError(uxUi.result) ? uxUi.result : []),
        ];
        setApplications(merged);
      } else {
        const { result } = await getApplicationList({ position });
        if (!isAxiosError(result)) {
          setApplications(result);
        }
      }
    };
    fetchData();
  }, [position]);

  return (
    <>
      <S.PageHeader>
        <S.Title>지원서 내역</S.Title>
        <S.SubText>총 지원자 수: {applications.length}명</S.SubText>
      </S.PageHeader>
      <Suspense>
        <ApplicationFilterProvider>
          <ApplicationList
            applications={applications}
            position={position}
            onPositionChange={handlePositionChange}
          />
        </ApplicationFilterProvider>
      </Suspense>
    </>
  );
};

export default memo(Page);

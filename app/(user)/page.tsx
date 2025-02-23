import BackgroundImage from '@/components/BackgroundImage';
import Promotions from '@/components/Promotions';
import Header from '@/components/Header';
import Pointer from '@/components/Common/Pointer';
import Contact from '@/components/Contact';
import Timeline from '@/components/Promotions/Timeline';
import Footer from '@/components/Footer';
import ScheduleBanner from '@/components/SchedulesBanner';
import dynamic from 'next/dynamic';
import { getCurrentPhase } from '@/utils/ScheduleBanner';
import { Suspense } from 'react';

const ApplyButton = dynamic(() => import('@/components/ApplyButton'));

const Page = () => {
  const currentPhase = getCurrentPhase();
  return (
    <>
      <Pointer />
      <main style={{ cursor: 'none', position: 'relative' }}>
        <Header />
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
          <BackgroundImage id={currentPhase ? currentPhase.id : 1} />
          <ScheduleBanner />
        </div>
        <Promotions />
        <Timeline />

        <Suspense>
          <ApplyButton />
        </Suspense>

        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Page;

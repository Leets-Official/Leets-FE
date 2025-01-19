import BackgroundImage from '@/components/BackgroundImage';
import Promotions from '@/components/Promotions';
import Header from '@/components/Header';
import Pointer from '@/components/Common/Pointer';
import Contact from '@/components/Contact';
import Timeline from '@/components/Promotions/Timeline';
import Footer from '@/components/Footer';
import ScheduleBanner from '@/components/SchedulesBanner';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ApplyButton = dynamic(() => import('@/components/ApplyButton'));

const Page = () => {
  return (
    <>
      <Pointer />
      <main style={{ cursor: 'none', position: 'relative' }}>
        <Header />
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
          <BackgroundImage />
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

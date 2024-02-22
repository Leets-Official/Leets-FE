import BackgroundImage from '@/components/BackgroundImage';
import Promotions from '@/components/Promotions';
import Header from '@/components/Header';
import ApplyButton from '@/components/ApplyButton';
import Pointer from '@/components/Common/Pointer';
import Contact from '@/components/Contact';
import Timeline from '@/components/Promotions/Timeline';
import Footer from '@/components/Footer';

const Page = () => {
  return (
    <>
      <Pointer />
      <main style={{ cursor: 'none' }}>
        <Header />
        <BackgroundImage />
        <Promotions />
        <Timeline />
        <ApplyButton />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Page;

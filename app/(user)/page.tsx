import BackgroundImage from '@/components/BackgroundImage';
import Promotions from '@/components/Promotions';
import Header from '@/components/Header';
import ApplyButton from '@/components/ApplyButton';
import Pointer from '@/components/Common/Pointer';
import Contact from '@/components/Contact';
import Timeline from '@/components/Promotions/Timeline';
import Footer from '@/components/Footer';
import { MAIN_COLOR } from '@/constants';
import { Main } from './styled';

const Page = () => {
  const color = MAIN_COLOR;

  return (
    <>
      <Pointer size={7} color={color} />
      <Main>
        <Header />
        <BackgroundImage color={color} />
        <Promotions color={color} />
        <Timeline color={color} />
        <ApplyButton color={color} />
        <Contact />
        <Footer />
      </Main>
    </>
  );
};

export default Page;

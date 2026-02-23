import { HeroSection, CTASection, ActivitySections, TimelineSection, GradientBackground } from '@/components/Landing';
import BorderDivider from '@/components/Common/BorderDivider';
import FooterTemplate from '@/components/Common/FooterTemplate';

const Page = () => {
  return (
    <main>
      <GradientBackground>
        <HeroSection />
        <CTASection />
      </GradientBackground>
      <BorderDivider />
      <ActivitySections />
      <TimelineSection />
      <FooterTemplate />
    </main>
  );
};

export default Page;

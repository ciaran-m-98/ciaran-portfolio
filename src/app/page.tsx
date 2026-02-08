import PageSection from '@/ui/PageSection';
import HomeUi from '@/ui/home/HomeUi';
import SkillsUi from '@/ui/skills/SkillsUi';
import AboutUi from '@/ui/about/AboutUi';
import DarkVeil from '@/ui/reactbits/DarkVeil';

export default function Home() {
  return (
    <div id="main-section" className="flex flex-col bg-transparent">
      <div className="absolute inset-0 pointer-events-none">
        <DarkVeil
          hueShift={56}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <PageSection
        sectionId="home-section"
        extraClass="h-[600px] flex justify-center bg-transparent relative"
      >
        <div className="relative z-10 w-full flex justify-center items-center">
          <HomeUi />
        </div>
      </PageSection>
      <PageSection
        sectionId="about-section"
        extraClass="flex justify-center p-4 z-10"
      >
        <AboutUi />
      </PageSection>
      <PageSection
        sectionId="skills-section"
        extraClass="flex justify-center p-4 z-10"
      >
        <SkillsUi />
      </PageSection>
    </div>
  );
}

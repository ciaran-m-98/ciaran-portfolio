import PageSection from '@/ui/PageSection';
import HomeUi from '@/ui/home/HomeUi';
import SkillsUi from '@/ui/skills/SkillsUi';
import AboutUi from '@/ui/about/AboutUi';
import BackgroundVeil from '@/ui/BackgroundVeil';

export default function Home() {
  return (
    <div id="main-section" className="flex flex-col bg-transparent gap-[8rem]">
      <BackgroundVeil />
      <PageSection extraClass="h-[600px] flex justify-center bg-transparent relative">
        <div className="relative z-10 w-full flex justify-center items-center">
          <HomeUi />
        </div>
      </PageSection>
      <PageSection extraClass="flex justify-center px-4 z-10">
        <AboutUi />
      </PageSection>
      <PageSection extraClass="flex justify-center px-4 z-10">
        <SkillsUi />
      </PageSection>
    </div>
  );
}

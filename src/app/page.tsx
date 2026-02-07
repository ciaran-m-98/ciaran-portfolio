import PageSection from '@/ui/PageSection';
import HomeUi from '@/ui/home/HomeUi';
import SkillsUi from '@/ui/skills/SkillsUi';
import AboutUi from '@/ui/about/AboutUi';
export default function Home() {
  return (
    <div id="main-section" className="flex flex-col bg-transparent">
      <PageSection
        sectionId="home-section"
        extraClass="h-[600px] flex justify-center bg-transparent"
      >
        <HomeUi />
      </PageSection>
      <PageSection
        sectionId="about-section"
        extraClass="flex justify-center p-4"
      >
        <AboutUi />
      </PageSection>
      <PageSection
        sectionId="skills-section"
        extraClass="flex justify-center p-4"
      >
        <SkillsUi />
      </PageSection>
    </div>
  );
}

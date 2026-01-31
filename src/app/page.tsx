import PageSection from '@/ui/PageSection';
import HomeUi from '@/ui/home/HomeUi';
import SkillsUi from '@/ui/skills/SkillsUi';
import AboutUi from '@/ui/about/AboutUi';
export default function Home() {
  return (
    <div id="main-section" className="flex flex-col">
      <PageSection
        sectionId="home-section"
        extraClass="min-h-[calc(100vh-4rem)] flex items-center justify-center"
      >
        <HomeUi />
      </PageSection>

      <PageSection
        sectionId="about-section"
        extraClass="min-h-[calc(80vh)] flex items-center justify-center"
      >
        <AboutUi />
      </PageSection>
      <PageSection
        sectionId="skills-section"
        extraClass="min-h-[calc(100vh-8rem)] flex items-center justify-center"
      >
        <SkillsUi />
      </PageSection>
    </div>
  );
}

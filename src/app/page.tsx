import PageSection from '@/ui/PageSection';
import HomeUi from '@/ui/home/HomeUi';
import SkillsUi from '@/ui/skills/SkillsUi';
import AboutUi from '@/ui/about/AboutUi';
export default function Home() {
  return (
    <div
      id="main-section"
      className="overflow-y-hidden h-full overflow-x-hidden font-[family-name:var(--font-roboto-sans)] flex flex-col"
    >
      <PageSection
        sectionId="home-section"
        extraClass="min-h-[calc(100vh-6rem)] flex items-center justify-center tablet:min-h-[calc(100vh-6rem)]"
      >
        <HomeUi />
      </PageSection>
      <PageSection
        sectionId="about-section"
        extraClass="min-h-[100vh] flex items-center justify-center tablet:min-h-[calc(100vh-6rem)]"
      >
        <AboutUi />
      </PageSection>
      <PageSection
        sectionId="skills-section"
        extraClass="min-h-[calc(100vh-4rem)] flex items-center justify-center tablet:min-h-[calc(100vh-10rem)]"
      >
        <SkillsUi />
      </PageSection>
    </div>
  );
}

import PageSection from '@/ui/PageSection';
import HomeUi from '@/ui/home/HomeUi';
import SkillsUi from '@/ui/skills/SkillsUi';
import AboutUi from '@/ui/About/AboutUi';
import PageDivider from '@/ui/PageDivider';
export default function Home() {
  return (
    <div
      id="main-section"
      className="overflow-y-auto overflow-x-hidden font-[family-name:var(--font-roboto-sans)]"
    >
      <PageSection sectionId="home-section">
        <HomeUi />
      </PageSection>
      <PageDivider />
      <PageSection sectionId="about-section">
        <AboutUi />
      </PageSection>
      <PageSection sectionId="skills-section">
        <SkillsUi />
      </PageSection>
    </div>
  );
}

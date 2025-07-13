import PageSection from '@/ui/PageSection';
import HomeUi from '@/ui/home/HomeUi';
export default function Home() {
  return (
    <div
      id="main-section"
      className="h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden snap-y snap-mandatory font-[family-name:var(--font-roboto-sans)]"
    >
      <PageSection sectionId="home-section">
        <HomeUi />
      </PageSection>
      <PageSection sectionId="about-section">
        <div>About</div>
      </PageSection>
      <PageSection sectionId="skills-section">
        <div>Skills</div>
      </PageSection>
    </div>
  );
}

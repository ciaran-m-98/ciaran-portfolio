'use client';
import PageSection from '@/ui/PageSection';
import HomeUi from '@/ui/home/HomeUi';
import SkillsUi from '@/ui/skills/SkillsUi';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    if (!document) {
      return;
    }
    console.log(
      document.getElementById('main-section')?.getBoundingClientRect()
    );
  });
  useEffect(() => {
    const element = document.getElementById('main-section');
    if (!element) {
      return;
    }
    element.addEventListener('scroll', () => {
      console.log(element.getBoundingClientRect());
    });
  }, []);
  return (
    <div
      id="main-section"
      className="h-[calc(100vh-80px)] overflow-y-hidden overflow-x-hidden snap-y snap-mandatory font-[family-name:var(--font-roboto-sans)]"
    >
      <PageSection sectionId="home-section">
        <HomeUi />
      </PageSection>
      <PageSection sectionId="about-section">
        <div>About</div>
      </PageSection>
      <PageSection sectionId="skills-section">
        <SkillsUi />
      </PageSection>
    </div>
  );
}

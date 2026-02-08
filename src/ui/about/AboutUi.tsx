import ExpertiseBlock from './ExpertiseBlock';
export default function AboutUi() {
  return (
    <div className="flex flex-col justify-center size-full gap-8 max-w-7xl mx-auto">
      <h1
        className="text-3xl underline decoration-green-400 underline-offset-8 decoration-4"
        id="expertise-section-title"
      >
        Expertise
      </h1>
      <div className="flex md:flex-row flex-col gap-8 justify-between">
        <ExpertiseBlock
          title="Full Stack Web Development"
          description="I work as a web developer"
          tech={[
            'React',
            'TypeScript',
            'JavaScript',
            'HTML5',
            'CSS3',
            'SASS',
            'Postman',
            'MongoDB',
            'Node.js',
            'Next.js',
            'TailwindCSS',
            'Express',
            'MongoDB',
          ]}
        />

        <ExpertiseBlock
          title="DevOps"
          description="I have experience with CI/CD pipelines."
          tech={[
            'Jenkins',
            'Docker',
            'Kubernetes',
            'Git',
            'Rancher',
            'Confluence',
          ]}
        />
        <ExpertiseBlock
          title="Testing"
          description="I have experience with running test cases in test rails."
          tech={['TestRail', 'Selenium', 'Jest']}
        />
      </div>
    </div>
  );
}

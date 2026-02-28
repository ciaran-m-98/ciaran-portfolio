import ExpertiseBlock from './ExpertiseBlock';
export default function AboutUi() {
  return (
    <div className="flex flex-col justify-center size-full gap-8 max-w-7xl mx-auto">
      <h1
        className="text-3xl underline dark:decoration-green-400 decoration-purple-900 underline-offset-8 decoration-4"
        id="expertise-section-title"
      >
        Expertise
      </h1>
      <div className="flex md:flex-row flex-col gap-8 justify-between">
        <ExpertiseBlock
          title="Full Stack Web Development"
          description="I work primarily as a full stack web developer, with an emphasis on frontend development. I enjoy building responsive and user-friendly web applications."
          tech={[
            'React',
            'TypeScript',
            'JavaScript',
            'HTML5',
            'CSS3',
            'SASS',
            'Postman',
            'Node.js',
            'Next.js',
            'TailwindCSS',
            'Express',
            'MongoDB',
          ]}
        />

        <ExpertiseBlock
          title="DevOps"
          description="I have experience creating and maintaining CI/CD pipelines, as well as containerization and orchestration using Docker and Kubernetes."
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
          description="I have experience with front end testing using Jest, as well as API testing using Postman. I've also assisted QA teams in regression testing using TestRail."
          tech={['TestRail', 'Selenium', 'Jest', 'Postman']}
        />
      </div>
    </div>
  );
}

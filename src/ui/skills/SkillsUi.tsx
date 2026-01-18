import ExperienceTimeline from './ExperienceTimeline';
import SkillsMarquee from './SkillsMarquee';

export default function SkillsUi() {
  return (
    <div className="flex flex-col justify-center items-center size-full tablet:w-[600px] m-auto gap-8">
      <div className="w-full flex flex-col gap-6 items-center">
        <h1 className="text-4xl text-center">Skills & Experience</h1>
        <div className="bg-[#FFBF00] w-40 h-1 rounded-md" />
      </div>
      <div>
        <h1 className="tablet:text-4xl text-2xl mx-4">
          My Skills and experiences
        </h1>
        <h2 className="text-wrap tablet:text-xl text-l mx-4 font-extralight">
          I am skilled in many languages and technologies, here's a few of them.
        </h2>
      </div>
      <div className='flex flex-col justify-end'>
        <ExperienceTimeline
          position="Software Developer II"
          company="Solera Inc."
          time="2024 - Present"
          description='Working on new Qapter products, and continuing to enhance existing features using React, TypeScript, and Node.js.'
          location="Seville, Spain"
          topLineVisible={false}
        />
        <ExperienceTimeline
          position="Software Developer"
          company="Solera Inc."
          time="2022 - 2024"
          description='Worked on various Qapter products, implementing new features and upgrading current ones using React, JavaScript, and Node.js.'
          location="Seville, Spain"
        />
        <ExperienceTimeline
          position="Bachelor's Degree in Computer Science"
          company="Atlantic Technical University"
          time="2016 - 2020"
          description='Studied a variety of Computer Science topics including software development, systems design, etc.'
          location="Co. Donegal, Ireland"
          bottomLineVisible={false}
        />
      </div>
      <div className="flex content-center items-center mx-4">
        <SkillsMarquee />
      </div>
    </div>
  );
}

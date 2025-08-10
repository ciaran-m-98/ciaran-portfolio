import SkillsMarquee from './SkillsMarquee';

export default function SkillsUi() {
  return (
    <div className="flex flex-col justify-center align-center size-full tablet:w-[800px] m-auto gap-32">
      <div className="w-full flex flex-col gap-6 items-center">
        <h1 className="text-4xl text-center">Skills & Experience</h1>
        <div className="bg-[#FFBF00] w-40 h-1 rounded-md" />
      </div>
      <div>
        <h1 className="tablet:text-4xl text-2xl mx-4">
          My Skills and experiences
        </h1>
        <h2 className="text-wrap tablet:text-2xl text-l mx-4">
          I am skilled in many languages and technologies, here's a few of them.
        </h2>
      </div>
      <div className="flex content-center align-center mx-4">
        <SkillsMarquee />
      </div>
    </div>
  );
}

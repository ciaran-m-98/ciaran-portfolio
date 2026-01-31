import ExperienceTimeline from './ExperienceTimeline';
import { EXPERIENCES } from './constants';

export default function SkillsUi() {
  return (
    <div className="flex flex-col justify-center items-start size-full gap-8">
      <div className="w-full flex flex-col gap-6 items-center">
        <h1
          className="text-3xl text-center underline decoration-green-400 underline-offset-8 decoration-4"
          id="skills-section-title"
        >
          Skills & Experience
        </h1>
      </div>
      <div className="flex flex-col w-full pr-2">
        <span className="w-full text-center font-light">
          Here&apos;s a timeline of my prior experience and education!
        </span>
        {EXPERIENCES.map(
          (
            { position, company, time, location, description, skills },
            index,
          ) => (
            <ExperienceTimeline
              key={index}
              position={position}
              company={company}
              time={time}
              location={location}
              description={description}
              isFirst={index === 0}
              isLast={index === EXPERIENCES.length - 1}
              skills={skills}
            />
          ),
        )}
      </div>
      {/*<div className="flex w-full flex-col gap-8 mb-4">
        <span className="text-sm font-light text-center">
          Here are some of the technologies I've worked with:
        </span>
        <SkillsMarquee />
      </div>*/}
    </div>
  );
}

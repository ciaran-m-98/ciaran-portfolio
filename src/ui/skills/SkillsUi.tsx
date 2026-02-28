import ExperienceTimeline from './ExperienceTimeline';
import { EXPERIENCES } from './constants';

export default function SkillsUi() {
  return (
    <div className="flex flex-col items-start size-full max-w-7xl">
      <div className="w-full flex flex-col gap-8">
        <h1
          className="text-3xl underline dark:decoration-green-400 decoration-purple-900 underline-offset-8 decoration-4"
          id="history-section-title"
        >
          History
        </h1>
        <span className="w-full font-light">
          Here&apos;s a timeline of my prior experience and education!
        </span>
      </div>
      <div className="flex flex-col w-full justify-center">
        {EXPERIENCES.map(
          (
            { position, company, time, location, description, type },
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
              index={index}
              type={type}
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

import ExperienceTimeline from "./ExperienceTimeline"
import SkillsMarquee from "./SkillsMarquee"
import { EXPERIENCES } from "./constants"

export default function SkillsUi() {
  return (
    <div className="flex flex-col justify-center items-start size-full gap-8">
      <div className="w-full flex flex-col gap-6 items-center w-full">
        <h1 className="text-4xl text-center">Skills & Experience</h1>
        <div className="bg-green-400 w-40 h-1 rounded-md" />
      </div>
      <div className="flex flex-col w-full pr-8">
        <span className="w-full text-center font-light">
          Here's a timeline of my prior experience and education!
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
  )
}

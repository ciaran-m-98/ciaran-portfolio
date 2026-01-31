import EventLine from "./EventLine"
import { Skill } from "./constants"
export default function ExperienceTimeline({
  position,
  company,
  time,
  location,
  description,
  skills,
  isFirst = false,
  isLast = false,
}: {
  position: string
  company: string
  time: string
  location: string
  description?: string
  skills: Array<Skill>
  isFirst?: boolean
  isLast?: boolean
}) {
  const id = position.toLowerCase().replace(/\s+/g, "-")
  return (
    <div className="flex flex-row items-center justify-center">
      <EventLine isFirst={isFirst} isLast={isLast} id={id} />
      <div
        className="flex flex-col justify-center border rounded-md dark:border-zinc-800 border-l-4 !border-l-green-400 w-full p-2 gap-2 shadow-lg"
        id={id}
      >
        <span className="text-lg font-medium">
          {position} &#183; {company}
        </span>

        <span className="text-md font-light text-green-400">
          {time} &#183; {location}
        </span>

        {description && (
          <span className="font-extralight text-xs">{description}</span>
        )}

        <div className="grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-2">
          {skills.length > 0 &&
            skills.map(({ name }, index) => (
              <span
                key={index}
                className="text-[0.625rem] border rounded-xl p-1 text-center dark:border-zinc-800"
              >
                {name}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}

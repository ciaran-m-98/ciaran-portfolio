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
        className="flex flex-col justify-center border rounded-md border-zinc-800 border-l-4 border-l-green-400 w-full p-2 gap-2"
        id={id}
      >
        <span className="text-lg font-medium">
          {position} &#183; {company}
        </span>

        <span className="text-md font-light text-green-400">
          {time} &#183; {location}
        </span>

        {description && (
          <span className="font-extralight text-sm">{description}</span>
        )}

        <div className="grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-2">
          {skills.length > 0 &&
            skills.map(({name, color}, index) => (
              <span
                key={index}
                className="text-xs font-light border rounded-md p-1 text-center"
                style={{ backgroundColor: `${color}1A`, borderColor: color }}
              >
                {name}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}

export default function ExpertiseBlock({
  title,
  description,
  tech,
}: {
  title?: string
  description?: string
  tech?: string[]
}) {
  return (
    <div className="flex flex-col gap-6 flex-1">
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="font-thin text-sm">{description}</p>
      <div className="flex flex-row gap-2">
        <div className="flex flex-row flex-wrap gap-2">
          <span className="font-semib old">Tech stack:</span>
          {tech?.map((techItem, index) => (
            <div
              className="text-xs border rounded-2xl px-2 py-1 text-center dark:border-zinc-500"
              key={index}
            >
              {techItem}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

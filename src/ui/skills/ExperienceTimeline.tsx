export default function ExperienceTimeline({
  position,
  company,
  time,
  location,
  description,
  topLineVisible = true,
  bottomLineVisible = true,
}: {
  position: string;
  company: string;
  time: string;
  location: string;
  description?: string;
  topLineVisible?: boolean;
  bottomLineVisible?: boolean;
}) {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="flex flex-col justify-center items-center w-20 gap-2">
        {topLineVisible ? (
          <div className="w-1 bg-zinc-400 h-40" />
        ) : (
          <div className="w-1 h-20" />
        )}
        <div className="rounded-[50%] border-2 border-[#FFBF00] h-4 w-4" />
        {bottomLineVisible ? (
          <div className="w-1 bg-zinc-400 h-40" />
        ) : (
          <div className="w-1 h-20" />
        )}
      </div>
      <div className="flex flex-col gap-1 justify-center border-2 rounded-md border-zinc-400 w-72">
        <span className="font-extralight border-b-2 p-2">{position}</span>
        <span className="font-extralight border-b-2 p-2">{company}</span>
        {description && <span className="font-extralight border-b-2 p-2">{description}</span>} 
        <span className="font-extralight p-2">
          {time} &#183; {location}
        </span>
      </div>
    </div>
  );
}

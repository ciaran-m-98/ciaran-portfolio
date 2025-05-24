import Image from "next/image";
export default function SkillItem({
  skill,
  image,
}: {
  skill: string;
  image: string;
}) {
  return (
    <div className="w-60 h-96 flex-none rounded-md flex flex-col justify-center items-center gap-24 border">
      <div>
        <Image
          className="dark:invert"
          src={image}
          alt={`${skill} Logo`}
          width={180}
          height={38}
          priority
        />
      </div>
      <h2 className="dark:text-white">{skill}</h2>
    </div>
  );
}

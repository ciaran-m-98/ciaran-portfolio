import Image from "next/image";
export default function SkillItem({
  skill,
  image,
}: {
  skill: string;
  image: string;
}) {
  return (
    <div className="w-60 h-96 bg-white text-black flex-none rounded-md flex flex-col justify-center items-center gap-24">
      <div>
        <Image
          className="dark"
          src={image}
          alt={`${skill} Logo`}
          width={180}
          height={38}
          priority
        />
      </div>
      <div>{skill}</div>
    </div>
  );
}

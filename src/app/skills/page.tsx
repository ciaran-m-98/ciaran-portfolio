export default function Skills() {
  interface Skill {
    skill: string;
    image: string;
  }
  type SkillArray = Array<Skill>;
  const skills: SkillArray = [
    {
      skill: "React",
      image: "/next.svg",
    },
    {
      skill: "TypeScript",
      image: "/next.svg",
    },
    {
      skill: "JavaScript",
      image: "/next.svg",
    },
    {
      skill: "Next.js",
      image: "/next.svg",
    },
    {
      skill: "Java",
      image: "/next.svg",
    },
  ];
  return <>Skills</>;
}

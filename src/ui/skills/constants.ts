export interface Skill {
  name: string
  color: string
}
interface Experience {
  position: string
  company: string
  time: string
  location: string
  description: string,
  type: string
}
export const EXPERIENCES: Experience[] = [
  {
    position: "Software Developer II",
    company: "Solera Inc.",
    time: "2024 - Present",
    location: "Seville, Spain",
    description:
      "Working on new Qapter products, and continuing to enhance existing features using React, TypeScript, and Node.js.",
      type: "employment"
  },
  {
    position: "Software Developer",
    company: "Solera Inc.",
    time: "2022 - 2024",
    location: "Seville, Spain",
    description:
      "Worked on various Qapter products, implementing new features and upgrading current ones using React, JavaScript, and Node.js.",
      type: "employment"
  },
  {
    position: "BSc Computer Science",
    company: "Atlantic Technical University",
    time: "2016 - 2020",
    location: "Co. Donegal, Ireland",
    description:
      "Studied a variety of Computer Science topics including software development, systems design, etc.",
      type: "education"
  },
]

export const marqueeSkills: string[] = [
    "javascript",
    "typescript",
    "java",
    "react",
    "mongodb",
    "postgresql",
    "redux",
    "next",
    "vuejs",
    "sass",
    "vitejs",
    "tailwind",
    "webpack",
    "docker",
  ]
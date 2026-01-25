export interface Skill {
  name: string
  color: string
}
interface Experience {
  position: string
  company: string
  time: string
  location: string
  description: string
  skills: Array<Skill>
}
export const EXPERIENCES: Experience[] = [
  {
    position: "Software Developer II",
    company: "Solera Inc.",
    time: "2024 - Present",
    location: "Seville, Spain",
    description:
      "Working on new Qapter products, and continuing to enhance existing features using React, TypeScript, and Node.js.",
    skills: [
      { name: "JavaScript", color: "#ffdf20" },
      { name: "React", color: "#61dafb" },
      { name: "Sass", color: "#cc6699" },
      { name: "Node.js", color: "#339933" },
      { name: "Docker", color: "#0db7ed" },
      { name: "Git", color: "#f1502f" },
      { name: "Java", color: "#b07219" },
      { name: "Rancher", color: "#0052cc" },
      { name: "Jenkins", color: "#d24939" },
    ],
  },
  {
    position: "Software Developer",
    company: "Solera Inc.",
    time: "2022 - 2024",
    location: "Seville, Spain",
    description:
      "Worked on various Qapter products, implementing new features and upgrading current ones using React, JavaScript, and Node.js.",
    skills: [
      { name: "JavaScript", color: "#ffdf20" },
      { name: "React", color: "#61dafb" },
      { name: "Sass", color: "#cc6699" },
      { name: "Node.js", color: "#339933" },
      { name: "Docker", color: "#0db7ed" },
      { name: "Git", color: "#f1502f" },
      { name: "Java", color: "#b07219" },
      { name: "Docker", color: "#0db7ed" },
      { name: "Confluence", color: "#0052cc" },
    ],
  },
  {
    position: "BSc Computer Science",
    company: "Atlantic Technical University",
    time: "2016 - 2020",
    location: "Co. Donegal, Ireland",
    description:
      "Studied a variety of Computer Science topics including software development, systems design, etc.",
    skills: [
      { name: "JavaScript", color: "#ffdf20" },
      { name: "TypeScript", color: "#00a6f4" },
      { name: "React", color: "#61dafb" },
      { name: "Node.js", color: "#339933" },
      { name: "Express", color: "#ffffff" },
      { name: "MongoDB", color: "#4DB33D" },
      { name: "HTML", color: "#e34c26" },
      { name: "CSS", color: "#264de4" },
      { name: "Git", color: "#f1502f" },
      { name: "Python", color: "#306998" },
      { name: "Java", color: "#b07219" },
      { name: "SQL", color: "#e38c00" },
    ],
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
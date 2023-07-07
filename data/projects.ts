import { Project } from "@/types";

export const projectList: Project[] = [
  {
    name: "trackrate",
    desc: "A fullstack social media app where users can review and rate music. Inspired by Letterboxd. Built with NextJS.",
    image: "/trackrate.png",
    links: {
      github: "/trackrate",
      live: "https://trackrate.app"
    },
    stack: ['next', 'prisma', 'typescript', 'tailwind', 'react']
  },
  // {
  //   name: "worksheetai",
  //   desc: "An GPT powered SaaS that generates pdf worksheets for teachers and students based on "
  // }
]
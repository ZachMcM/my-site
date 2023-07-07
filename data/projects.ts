import { Project } from "@/types";

export const projectList: Project[] = [
  {
    name: "trackrate",
    desc: "A fullstack social media app where users can review and rate music and interact with others. Inspired by Letterboxd.",
    image: "/trackrate.png",
    links: {
      github: "/trackrate",
      live: "https://trackrate.app"
    },
    stack: ['next', 'prisma', 'typescript', 'tailwind', 'react']
  },
  {
    name: "worksheetai",
    desc: "An GPT powered fullstack web app that generates pdf worksheets for teachers and students based on subjects and topics to reduce the time spent looking for worksheets online.",
    image: "/worksheetai.png",
    links: {
      github: "/worksheet-ai",
      live: "https://worksheetai.vercel.app",
    },
    stack: ['next', 'prisma', 'typescript', 'tailwind', 'react', 'express', 'node']
  },
  {
    name: "Attack on Titan API",
    desc: "An API for the popular manga and anime Attack on Titan allowing users to connect up to date and accurate Attack on Titan data to their application. Docs site built with NextJS and Tailwind.",
    image: "/attackontitanapi.png",
    links: {
      github: "/attack-on-titan-api",
      live: "https://attackontitanapi.com"
    },
    stack: ['next', 'typescript', 'tailwind', 'react', 'express', 'node']
  },
  {
    name: "Riemann Sum Calculator Library",
    desc: "A Library that allows programmers to calculate riemann sums in javascript and typescript with full type safety.",
    image: "/riemann-sum-calculator.png",
    links: {
      github: "/riemann-sum-calculator"
    },
    stack: ['typescript']
  }
]
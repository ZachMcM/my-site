export type Project = {
  name: string,
  desc: string,
  image: string,
  links: {
    github: string,
    live?: string
  },
  stack: string[]
};
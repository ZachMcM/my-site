import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import LanguageIcon from "./LanguageIcon";
import { Project } from "@/types";
import ProjectSkeleton from "./ProjectSkeleton";

const getProject = async (id: string): Promise<Project> => {
  const res = await fetch(`https://my-site-cms-production-bc2e.up.railway.app/api/projects/${id}?populate=*`, { cache: "no-cache" })
    const data = await res.json()
    return data.data
}

export default async function ProjectData({ id }: { id: string }) {
  console.log(id)
  const project = await getProject(id)

  console.log(project.attributes.link)

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-7">
        <div className="relative aspect-video">
          <Image
            src={process.env.NEXT_PUBLIC_CMS_URL + project.attributes.image.data.attributes.url}
            alt={project.attributes.name}
            fill
            className="rounded-lg p-3 dark:border-gray-800 border shadow-2xl"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">{project.attributes.name}</h1>
        <div className="flex space-x-5 items-center text-xl">
          <a
            href={project.attributes.code}
            className="text-sky-400 hover:text-sky-400/70 duration-500 flex space-x-1.5 items-center rounded-md"
          >
            <p>Github</p>
            <FiGithub />
          </a>
          {project.attributes.link && (
            <a
              href={project.attributes.link}
              className="text-sky-400 hover:text-sky-400/70 duration-500 flex space-x-1.5 items-center rounded-md"
            >
              <p>Live Site</p>
              <FiArrowUpRight/>
            </a>
          )}
        </div>
        <ul className="text-gray-500 dark:text-gray-400 flex flex-wrap gap-2.5 text-sm max-w-sm">
          {project.attributes.techstack.map((skill: string) => {
            return (
              <li
                key={Math.floor(Math.random() * 10000)}
                className="py-2 px-3 shadow-xl rounded-md dark:bg-gray-800 flex items-center space-x-2.5"
              >
                <p>{skill}</p> <LanguageIcon language={skill} />
              </li>
            );
          })}
        </ul>
        <div className="text-xl text-gray-500 dark:text-gray-400 flex flex-col space-y-3">
          {project.attributes.content.split("\n").map((para: string, i: number) => {
            return (
              <>
                <p key={i}>{para}</p>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}
import Image from "next/image";
import Link from "next/link";
import LanguageIcon from "./LanguageIcon";
import { Project } from "@/types";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="hover:ring-2 ring-sky-400 duration-500 rounded-lg p-8 dark:border-gray-800 border shadow-2xl space-y-7"
    >
      <Image
        src={project.image}
        width={1920}
        height={1080}
        alt={project.name}
        className="rounded-md"
      />
    <ul className="text-gray-500 dark:text-gray-400 text-xs flex flex-wrap gap-2.5 max-w-3xl">
        {project.stack.map((skill: string) => {
          return (
            <li
              key={Math.random()}
              className="py-2 px-3 shadow-xl rounded-md dark:bg-gray-800 flex items-center space-x-2.5"
            >
              <p className="capitalize">{skill}</p> <LanguageIcon language={skill} />
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col space-y-1">
        <h3 className="text-2xl font-semibold">{project.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          {project.desc}
        </p>
      </div>
      <div className="flex items-center space-x-1 text-sky-400 text-2xl">
        { project.links.live && <a href={project.links.live} className="hover:bg-gray-200 dark:hover:bg-gray-800 duration-500 p-2.5 rounded-lg"><FiExternalLink/></a>}
        <a href={`https://github.com/ZachMcM/${project.links.github}`} className="hover:bg-gray-200 dark:hover:bg-gray-800 duration-500 p-2.5 rounded-lg"><FiGithub/></a>
      </div>
    </div>
  );
}

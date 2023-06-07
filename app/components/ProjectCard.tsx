import Image from "next/image";
import Link from "next/link";
import LanguageIcon from "./LanguageIcon";
import { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="hover:opacity-50 duration-500 rounded-lg p-8 dark:border-gray-800 border shadow-2xl space-y-7 hover:translate-y-[-1rem]"
    >
      <Image
        src={process.env.NEXT_PUBLIC_CMS_URL + project.attributes.image.data.attributes.url}
        width={1920}
        height={1080}
        alt={project.attributes.name}
        className="rounded-md"
      />
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-semibold">{project.attributes.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          {project.attributes.description}
        </p>
        <ul className="text-gray-500 dark:text-gray-400 text-xs flex flex-wrap gap-2.5 max-w-3xl">
          {project.attributes.techstack.map((skill: string) => {
            return (
              <li
                key={Math.random()}
                className="py-2 px-3 shadow-xl rounded-md dark:bg-gray-800 flex items-center space-x-2.5"
              >
                <p>{skill}</p> <LanguageIcon language={skill} />
              </li>
            );
          })}
        </ul>
      </div>
    </Link>
  );
}

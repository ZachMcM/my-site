"use client";

import { FiGithub, FiSearch } from "react-icons/fi";

import ProjectCard from "../components/ProjectCard";
import { Project } from "@/types";
import { redirect } from "next/navigation";
import { useState } from "react";
import { projectList } from "@/data/projects";

export default function ProjectList() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="space-y-10 w-full">
      <div className="flex flex-col space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl">
          My most notable projects.
        </p>
      </div>
      <div className="py-3 px-4 flex items-center space-x-2 focus-within:border-sky-400 dark:focus-within:ring-2 duration-500 ring-sky-400 border dark:border-gray-800 shadow-2xl rounded-lg">
        <FiSearch className="text-xl text-gray-500 dark:text-gray-400" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or technology"
          className="text-md md:text-lg w-full bg-transparent placeholder:text-gray-500 placeholder:dark:text-gray-400 outline-none border-none"
        />
      </div>
      <div className="flex flex-col space-y-10 w-full">
        {
          projectList.map((project: Project) => {
            return <ProjectCard project={project}/>
          })
        }
      </div>
      <a
        href="https://github.com/ZachMcM?tab=repositories"
        className="text-white font-medium w-fit rounded-md flex space-x-2 items-center p-2.5 bg-sky-400 hover:bg-sky-400/70 duration-500"
      >
        <p>More on GitHub</p>
        <FiGithub className="text-lg" />
      </a>
    </div>
  );
}

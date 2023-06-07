import {
    FiGithub
} from 'react-icons/fi'

import ProjectCard from './ProjectCard'
import { Project } from '@/types'

const getProjects = async (): Promise<Project[]> => {
    const res = await fetch("https://my-site-cms-production-bc2e.up.railway.app/api/projects?populate=*")
    const data = await res.json()
    return data.data
}

export default async function ProjectList() {
    const projects = await getProjects()

    return (
        <div className="space-y-10">
            <div className='flex flex-col space-y-3'>
                <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
                <p className='text-gray-500 dark:text-gray-400 md:text-xl'>My most notable projects.</p>
            </div>
            <div className='flex flex-col xl:grid grid-cols-2 gap-14'>
                {   
                    projects.map((project: Project) => {
                        return <ProjectCard project={project} key={project.id}/>
                    })
                }
            </div>
            <a href="https://github.com/ZachMcM?tab=repositories" className="text-white font-medium w-fit rounded-md flex space-x-2 items-center p-2.5 bg-sky-400 hover:bg-sky-400/70 duration-500">
                <p>More on GitHub</p>
                <FiGithub className="text-lg"/>
            </a>
        </div>
    )
}
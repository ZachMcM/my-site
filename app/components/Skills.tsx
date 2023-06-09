import skills from "../../data/skills"
import { uid } from "uid"
import LanguageIcon from "./LanguageIcon"

export default function Skills() {
    return (
        <div className='flex flex-col space-y-4'>
            <h3 className="text-3xl font-semibold">My Skills/Tech Stack ⚙️</h3>
            <p className="text-gray-500 dark:text-gray-400 text-lg flex flex-wrap gap-2.5 max-w-3xl">Here are the skills/technologies that I use and am proficient in. A lot of my projects are written in Typescript, but my favorite programming language is Java.</p>
            <ul className="text-gray-500 dark:text-gray-400 text-lg flex flex-wrap gap-2.5 max-w-3xl">
                {
                    skills.map((skill: string) => {
                        return <li key={uid()} className="py-2.5 px-5 shadow-xl rounded-md dark:bg-gray-800 flex items-center space-x-2.5"><p className="capitalize">{skill}</p> <LanguageIcon language={skill}/></li>
                    })
                }
            </ul>
        </div>
    )
}
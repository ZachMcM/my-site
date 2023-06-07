import { IconType } from "react-icons";

import { SiC, SiCplusplus, SiCsharp, SiCss3, SiExpress, SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"
import { FaJava } from "react-icons/fa";

type LanguageIconMap = Record<string, IconType>;

const languageIconMap: LanguageIconMap = {
    'javascript': SiJavascript,
    'python': SiPython,
    'java': FaJava,
    'c++': SiCplusplus,
    'c': SiC,
    'c#': SiCsharp,
    'typescript': SiTypescript,
    'next': SiNextdotjs,
    'react': SiReact,
    'tailwind': SiTailwindcss,
    'node': SiNodedotjs,
    'express': SiExpress,
    'git': SiGit,
    'css': SiCss3,
    "html": SiHtml5,
    "prisma": SiPrisma,
    "postgresql": SiPostgresql
}

export default function( {language} : { language: string }) {
    const Icon = languageIconMap[language.toLowerCase()]
    return <Icon/>
}

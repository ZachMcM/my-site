import ProjectList from "../components/ProjectList"

export default function Projects() {
    return (
        /* @ts-expect-error Async Server Component */
        <ProjectList/>
    )
}
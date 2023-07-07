import Image from "next/image";
import LanguageIcon from "@/app/components/LanguageIcon";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { Project } from "@/types";
import { Suspense } from "react";
import ProjectData from "@/app/components/ProjectData";
import ProjectSkeleton from "@/app/components/ProjectSkeleton";

export default function Project({ params }: { params: { id: string }}) {
  return (
    <Suspense fallback={<ProjectSkeleton/>}>
      <ProjectData id={params.id}/>
    </Suspense>
  )
}

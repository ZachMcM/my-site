import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="flex flex-col space-y-7">
            <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold">Hi 👋 I'm Zach McMullen!</h1>
                <p className="md:text-xl text-gray-500 dark:text-gray-400">I am a software developer and incoming freshmen studying computer science at Purdue University, welcome to my personal website! Here you can find more information about me and my projects!</p>
            </div>
            <Link href="/projects" className="text-white font-medium w-fit rounded-md flex space-x-2 items-center p-2.5 bg-sky-400 hover:bg-sky-400/70 duration-500">
                <p>Go to Projects</p>
                <FaArrowRight/>
            </Link>
        </div>
    )
}
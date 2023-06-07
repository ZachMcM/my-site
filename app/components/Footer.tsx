import {
    BiCode
} from "react-icons/bi"

export default function Footer() {
    return (
        <footer className="z-50 mt-28 flex flex-col space-y-3 w-full py-5 lg:px-28 lg:py-8 items-center justify-center text-xs text-gray-500 dark:text-gray-400">
            <div className="flex space-x-1 items-center"><BiCode className="text-lg"/> <p>By <a href="https://github.com/ZachMcM" className="text-sky-400 hover:underline">Zach McMullen</a></p></div>
        </footer>
    )
}
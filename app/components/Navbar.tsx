'use client'

import {
    RiMoonClearLine,
    RiSunLine,
} from 'react-icons/ri'

import {
    FiGithub
} from 'react-icons/fi'

import {
    FaLinkedinIn
} from "react-icons/fa"

import { useEffect, useState } from 'react'

import Link from 'next/link'

export default function Navbar() {
    const [theme, setTheme] = useState<string>('')

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setTheme('dark')
          } else {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    }, [])

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.removeItem('theme')
            setTheme('light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
            setTheme('dark')
        }
    }

    return (
        <nav className="sticky top-0 w-full bg-white bg-gradient-to-r dark:from-gray-800 dark:via-slate-900 dark:to-gray-900 from-gray-50 via-slate-100 to-sky-50 z-50 py-5 md:px-10 items-center flex justify-center dark:text-gray-400">
            <div className='flex space-x-1 lg:space-x-3 items-center'>
                <Link className='p-2.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 duration-500' href="/">Home</Link>
                <Link className='p-2.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 duration-500' href="/projects">Projects</Link>
                <Link href='https://github.com/zachmcm' className='p-2.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 duration-500'>
                    <FiGithub className='text-xl'/>
                </Link>
                <Link href="https://www.linkedin.com/in/zach-mcmullen-ba3a2621b/" className='p-2.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 duration-500'>
                    <FaLinkedinIn className='text-lg'/>
                </Link>
                <button 
                    className='p-2.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 duration-500 text-sky-400'
                    onClick={toggleTheme}
                >
                {
                    theme == 'dark' ? 
                    <RiSunLine className='text-xl lg:text-2xl'/> :
                    <RiMoonClearLine className='text-xl lg:text-2xl'/>
                }
                </button>
            </div>
        </nav>
    )
}
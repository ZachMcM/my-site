export default function SiteBuilt() {
    return (
        <div className="flex flex-col space-y-4">
            <h3 className="text-3xl font-semibold">How was this site built?</h3>
            <p className="text-xl text-gray-500 dark:text-gray-400">
                This site was built with <a href="https://nextjs.org/" className="text-sky-400 hover:text-sky-400/70 duration-500">NextJS</a> as the Javascript framework, <a href="https://tailwindcss.com/" className="text-sky-400 hover:text-sky-400/70 duration-500">TailwindCSS</a> as the CSS framework, 
                Typescript as the primary programming language.
            </p>
        </div>
    )
}
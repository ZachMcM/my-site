export default function ProjectSkeleton() {
  return (
    <div className="flex flex-col space-y-7">
      <div className="rounded-lg p-3 dark:border-gray-800 border shadow-2xl">
        <div className="relative aspect-video bg-gray-500 dark:bg-zinc-400 rounded-lg animate-pulse"></div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="h-6 rounded-lg bg-gray-500 dark:bg-zinc-400 animate-pulse w-full"></div>
        <div className="h-6 rounded-lg bg-gray-500 dark:bg-zinc-400 animate-pulse w-4/5"></div>
        <div className="h-6 rounded-lg bg-gray-500 dark:bg-zinc-400 animate-pulse w-3/5"></div>
        <div className="h-6 rounded-lg bg-gray-500 dark:bg-zinc-400 animate-pulse w-2/5"></div>
        <div className="h-6 rounded-lg bg-gray-500 dark:bg-zinc-400 animate-pulse w-1/5"></div>
      </div>
    </div>
  )
}
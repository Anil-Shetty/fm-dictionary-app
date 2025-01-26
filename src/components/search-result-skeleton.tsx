export function SearchResultSkeleton() {
  return (
    <div className="grid gap-8 md:gap-10 lg:gap-12 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="h-8 md:h-10 lg:h-12 bg-gray-300 dark:bg-gray-700 rounded mb-1 md:mb-2 lg:mb-3 w-3/4"></div>
          <div className="h-4 bg-primary rounded w-1/2"></div>
        </div>
        <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      </div>
      <div className="grid gap-8 md:gap-10 lg:gap-12">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="grid gap-8 md:gap-10 lg:gap-12">
            <div className="flex items-center gap-5 md:gap-6 lg:gap-8">
              <div className="h-6 md:h-8 lg:h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
              <hr className="flex-1 text-gray-500 dark:text-gray-900" />
            </div>
            <div className="grid gap-2 md:gap-3 lg:gap-4">
              <div className="h-4 md:h-6 lg:h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
              <ul className="list-disc pl-4">
                {[...Array(3)].map((_, index) => (
                  <li key={index} className="mb-2 md:mb-3 lg:mb-4 marker:text-primary text-base md:text-lg lg:text-xl">
                    <div className="grid gap-1 md:gap-2 lg:gap-3 ml-2 md:ml-3 lg:ml-4">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-2 md:gap-3 lg:gap-4">
              <div className="flex gap-3 text-slate-500 dark:text-slate-400 md:text-lg lg:text-2xl font-medium">
                <div className="h-4 md:h-6 lg:h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-4 bg-primary rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="text-gray-500 dark:text-slate-900" />
      <div className="grid gap-2 md:gap-3 lg:gap-4">
        <div className="h-4 md:h-6 lg:h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
        <ul className="">
          {[...Array(2)].map((_, index) => (
            <li key={index} className="mb-2 md:mb-3 lg:mb-4 text-slate-900 dark:text-foreground text-base md:text-lg lg:text-xl">
              <div className="flex items-center gap-1 underline">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-6 md:w-8 lg:w-10"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
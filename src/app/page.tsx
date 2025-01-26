import { SearchForm } from "@/components/search-form"
import { SearchResult } from "@/components/search-result"
import { SearchResultSkeleton } from "@/components/search-result-skeleton"
import { Suspense } from "react"

type SearchParams = Promise<{ [key: string]: string | undefined }>

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const searchParam = await searchParams

  return (
    <>
      <SearchForm query={searchParam.query} />
      {searchParam.query ? (
        <Suspense key={searchParam.query} fallback={<SearchResultSkeleton />}>
          <SearchResult query={searchParam.query} />
        </Suspense>
      ) : (
        null
      )}
    </>
  )
}

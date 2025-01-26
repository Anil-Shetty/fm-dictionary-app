import { DictionaryApiResponseSchema } from "@/types"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Audio } from "@/components/audio"

export async function SearchResult({ query }: { query: string }) {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
  const json = await response.json()
  const { success, data } = DictionaryApiResponseSchema.safeParse(json)

  if (success === false) {
    return <div>No definitions found for {query}</div>
  }

  const [wordDefinition] = data
  const { word, phonetics, phonetic, meanings, sourceUrls } = wordDefinition
  const audio = phonetics[0]?.audio

  return (
    <div className="grid gap-8 md:gap-10 lg:gap-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 lg:mb-3">{word}</h1>
          <p className="text-primary">{phonetic}</p>
        </div>
        {audio && <Audio src={audio} />}
      </div>
      <div className="grid gap-8 md:gap-10 lg:gap-12">
        {meanings.map((meaning) => (
          <div key={meaning.partOfSpeech} className="grid gap-8 md:gap-10 lg:gap-12">
            <div className="flex items-center gap-5 md-gap-6 lg-gap-8">
              <span className="text-lg md:text-xl lg:text-2xl font-bold">{meaning.partOfSpeech}</span>
              <hr className="flex-1 text-gray-500 dark:text-gray-900" />
            </div>
            <div className="grid gap-2 md:gap-3 lg:gap-4">
              <div className="text-slate-500 dark:text-slate-400 md:text-lg lg:text-2xl font-medium">
                Meaning
              </div>
              <ul className="list-disc px-4">
                {meaning.definitions.map(defination => (
                  <li key={defination.definition} className="mb-2 md:mb-3 lg:mb-4 marker:text-primary text-base md:text-lg lg:text-xl">
                    <div className="grid gap-1 md:gap-2 lg:gap-3">
                      <span className="">
                        {defination.definition}
                      </span>
                      {defination.example &&
                        <span className="text-slate-500 dark:text-slate-400">{`"${defination.example}"`}</span>
                      }
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-2 md:gap-3 lg:gap-4">
              <div className="flex gap-3 text-slate-500 dark:text-slate-400 md:text-lg lg:text-2xl font-medium">
                Synonyms
                <div className="text-primary">
                  {meaning.synonyms?.join(", ") || "No synonyms found"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="text-gray-500 dark:text-slate-900" />
      <div className="grid gap-2 md:gap-3 lg:gap-4">
        <div className="text-slate-500 dark:text-slate-400 md:text-lg lg:text-2xl font-medium">
          Source
        </div>
        <ul className="">
          {sourceUrls.map(source => (
            <li key={source} className="mb-2 md:mb-3 lg:mb-4 text-slate-900 dark:text-foreground text-base md:text-lg lg:text-xl">
              <Link href={source} className="flex items-center flex-wrap gap-1 underline" target="_blank">
                <span>
                  {source}
                </span>
                <ExternalLink className="size-3 md:size-4 lg:size-5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
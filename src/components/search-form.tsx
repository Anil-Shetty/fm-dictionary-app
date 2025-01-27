import Form from 'next/form'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export function SearchForm({ query }: { query?: string }) {

  return (
    <Form action='' className='relative flex items-center px-6 py-2 md:py-3 lg:py-4 mb-8 rounded-full md:rounded-2xl bg-slate-200 dark:bg-gray-900 focus-within:ring focus-within:ring-primary'>
      <Input type='search' autoFocus name='query' defaultValue={query} placeholder='Search your word...' className='border-none focus-visible:ring-0 shadow-none text-lg md:text-xl lg:text-2xl font-bold' />
      <button>
        <Search className='text-primary size-7 lg:size-8' />
      </button>
    </Form>
  )
}
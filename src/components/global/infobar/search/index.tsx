import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className="flex overflow-hidden gap-x-2 border-[1px] border-[#383838] rounded-full px-4 py-1 items-center flex-1">
      <SearchIcon color="#FFFFFF" />
      <Input
        placeholder="Search..."
        className="border-none outline-none ring-0 focus:ring-0 flex-1"
      />
    </div>
  )
}

export default Search

import { PAGE_ICON } from '@/constants/pages'
import React from 'react'

type Props = {
  page: string
  slug?: string
}

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col items-start">
      {page === 'Home' && (
        <div className="flex justify-center w-full">
          <div className="radial--gradient w-4/12 py-5 lg:py-10 flex flex-col items-center">
            <p className="text-[#d8d8d8] text-lg text-center sm:text-left leading-tight">
              ⚡Hope you are doing good..
            </p>
            <h2 className="capitalize text-4xl font-bold font-poppins bg-gradient-to-r from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#515BD4] bg-clip-text text-transparent">
              {slug}!
            </h2>
          </div>
        </div>
      )}
      <span className="radial--gradient inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center">
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className="font-semibold text-5xl capitalize">{page}</h2>
      </span>
    </div>
  )
}

export default MainBreadCrumb

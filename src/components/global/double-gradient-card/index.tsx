import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

type Props = {
  label: string
  subLabel: string
  description: string
}

const DoubleGradientCard = ({ description, label, subLabel }: Props) => {
  return (
    <div className="relative group border-[1px] border-in-active/50 p-5 rounded-xl flex flex-col gap-y-20 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-[#ff70e0] to-[#1C2D70]">
      <div className="flex flex-col z-40">
        <h2 className="text-2xl font-medium text-white group-hover:text-white transition-colors">{label}</h2>
        <p className="text-white text-sm group-hover:text-white opacity-80 group-hover:opacity-100 transition-opacity">{subLabel}</p>
      </div>

      <div className="flex justify-between items-center z-40 gap-x-10">
        <p className="text-[#e8e8e8] text-sm group-hover:text-white opacity-80 group-hover:opacity-100 transition-opacity">{description}</p>
        <Button className="rounded-full bg-[#ffffff] w-10 h-10 group-hover:bg-[#f1f1f1] transition-colors transform group-hover:scale-110">
          <ArrowRight color="#000000" />
        </Button>
      </div>

      <div className="w-6/12 h-full absolute top-0 left-0 z-10 bg-gradient-to-br from-[#ff70e0] to-[#1C2D70] opacity-40 group-hover:opacity-40 transition-opacity" />
      <div className="w-6/12 h-full absolute top-0 left-1/2 right-0 z-0 bg-gradient-to-br from-[#ff70e0] to-[#1C2D70] opacity-40 group-hover:opacity-40 transition-opacity" />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-[#ff70e0] to-[#1C2D70] opacity-10 z-0" />
    </div>
  )
}

export default DoubleGradientCard

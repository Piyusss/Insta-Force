import DoubleGradientCard from '@/components/global/double-gradient-card'
import { DASHBOARD_CARDS } from '@/constants/dashboard'
import { BarDuoToneBlue } from '@/icons'
import React from 'react'
import Chart from './_components/metrics'
import MetricsCard from './_components/metrics/metrics-card'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex gap-5 lg:flex-row flex-col">
        {DASHBOARD_CARDS.map((card) => (
          <div key={card.id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <DoubleGradientCard {...card} />
          </div>
        ))}
      </div>

      <div className="group relative border-[1px] border-in-active/50 p-5 rounded-xl flex flex-col gap-y-5 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#ffb671] to-[#1C2D70] opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

        <span className="flex gap-x-1 z-50 items-center">
          <BarDuoToneBlue />
          <div className="z-50">
            <h2 className="text-2xl font-medium text-white group-hover:text-white transition-colors">
              Automated Activity
            </h2>
            <p className="text-[#FFFFFF] text-sm group-hover:text-white opacity-80 group-hover:opacity-100 transition-opacity">
              The Analytics are given below.
            </p>
          </div>
        </span>

        <div className="w-full flex lg:flex-row flex-col gap-5">
          <div className="lg:w-6/12 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Chart />
          </div>
          <div className="lg:w-6/12 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <MetricsCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

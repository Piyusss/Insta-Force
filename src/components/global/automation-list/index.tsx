'use client'
import { usePaths } from '@/hooks/user-nav'
import { cn, getMonth } from '@/lib/utils'
import Link from 'next/link'
import React, { useMemo } from 'react'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'
import { useQueryAutomations } from '@/hooks/user-queries'
import CreateAutomation from '../create-automation'
import { useMutationDataState } from '@/hooks/use-mutation-data'

type Keyword = {
  id: string;
  word: string;
}

type Props = {}

const AutomationList = (props: Props) => {
  const { data } = useQueryAutomations()
  const { latestVariable } = useMutationDataState(['create-automation'])
  console.log(latestVariable)
  const { pathname } = usePaths()
  
  const optimisticUiData = useMemo(() => {
    if ((latestVariable && latestVariable?.variables &&  data)) {
      const test = [latestVariable.variables, ...data.data]
      return { data: test }
    }
    return data || { data: [] }
  }, [latestVariable, data])

  if (data?.status !== 200 || data.data.length <= 0) {
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
        <h3 className="text-lg text-gray-400">No Automations </h3>
        <CreateAutomation />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-3">
      {optimisticUiData.data!.map((automation) => (
        <Link
          href={`${pathname}/${automation.id}`}
          key={automation.id}
          className="relative bg-[#1D1D1D] hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-800 transition duration-200 rounded-xl p-5 border border-[#545454] flex items-start group"
        >
          <div className="flex flex-col flex-1 items-start">
            <h2 className="text-xl font-semibold">{automation.name}</h2>
            <p className="text-[#9B9CA0] text-sm font-light mb-2 group-hover:text-[#ffe57a]">
              This Automation is Created successfully.
            </p>

            {automation.keywords.length > 0 ? (
              <div className="flex gap-x-2 flex-wrap mt-3">
                {automation.keywords.map((keyword: Keyword) => (
                  <div
                    key={keyword.id}
                    className={cn(
                      'rounded-full px-4 py-1 capitalize transition-colors',
                      'bg-keyword-red/15 border-2 border-[#eca8ff] group-hover:border-[#28282b] bg-[#28282b]'
                    )}
                  >
                    {keyword.word}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-full border-2 mt-3 border-dashed border-[#eca8ff]/60 px-3 py-1">
                <p className="text-sm text-[#bfc0c3]">Not Assigned</p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between">
            <p className="capitalize text-sm font-light text-[#9B9CA0] group-hover:text-[#ffe57a]">
              {getMonth(automation.createdAt.getUTCMonth() + 1)}{' '}
              {automation.createdAt.getUTCDate() === 1
                ? `${automation.createdAt.getUTCDate()}st`
                : `${automation.createdAt.getUTCDate()}th`}{' '}
              {automation.createdAt.getUTCFullYear()}
            </p>

            {automation.listener?.listener === 'SMARTAI' ? (
              <GradientButton
                type="BUTTON"
                className="w-full bg-background-80 text-white hover:bg-background-80"
              >
                AI Powered
              </GradientButton>
            ) : (
              <Button className="bg-background-80 hover:bg-background-80 text-white">
                Standard
              </Button>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AutomationList

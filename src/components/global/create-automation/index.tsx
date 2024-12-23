'use client'

import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react'
import Loader from '../loader'
import { AutomationDuoToneWhite } from '@/icons'
import { useCreateAutomation } from '@/hooks/use-automations'
import { v4 } from 'uuid'

type Props = {}

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(() => v4(), [])

  console.log(mutationId)
  const { isPending, mutate } = useCreateAutomation(mutationId)

  return (
    <Button
      className="lg:px-10 py-6 bg-gradient-to-br from-[#ff5af1] to-[#1C2D70] text-white rounded-full font-medium transition-all duration-300 hover:opacity-90"
      onClick={() =>
        mutate({
          name: 'Untitled',
          id: mutationId,
          createdAt: new Date(),
          keywords: [],
        })
      }
    >
      <Loader state={isPending}>
        <AutomationDuoToneWhite />
        <p
          className="lg:inline hidden"
          style={{
            textShadow: '0 0 10px #ffffff, 0 0 20px #ffffff',
            color: '#FFFFFF',
          }}
        >
          Develop an Automation
        </p>
      </Loader>
    </Button>
  )
}

export default CreateAutomation

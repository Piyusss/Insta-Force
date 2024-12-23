'use client'
import { onOAuthInstagram } from '@/actions/integrations'
import { onUserInfo } from '@/actions/user'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

type Props = {
  title: string
  description: string
  icon: React.ReactNode
  strategy: 'INSTAGRAM' | 'CRM'
}

const IntegrationCard = ({ description, icon, strategy, title }: Props) => {
  const onInstaOAuth = () => onOAuthInstagram(strategy)

  const { data } = useQuery({
    queryKey: ['user-profile'],
    queryFn: onUserInfo,
  })

  const integrated = data?.data?.integrations.find(
    (integration) => integration.name === strategy
  )

  return (
    <div className="relative bg-[#1D1D1D] hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-800 transition duration-200 rounded-xl p-5 border border-[#545454] flex items-start group">
      <div className="mr-4">{icon}</div>
      <div className="flex flex-col flex-1">
        <h3 className="text-xl text-white group-hover:text-white">{title}</h3>
        <p className="text-[#9D9D9D] text-base group-hover:text-white">{description}</p>
      </div>
      <Button
        onClick={onInstaOAuth}
        disabled={integrated?.name === strategy}
        className={`bg-gradient-to-br text-white rounded-full text-lg from-[#6c6c6c] font-medium to-[#333333] hover:opacity-80 transition duration-100 group-hover:border-[#ff0000] border-[1px] border-white ${
          integrated ? 'text-gray-500 border-[#ff0000]' : 'group-hover:text-white'
        }`}
      >
        {integrated ? (
          <span className="text-white">Connected</span>
        ) : (
          'Connect'
        )}
      </Button>
    </div>
  )
}

export default IntegrationCard

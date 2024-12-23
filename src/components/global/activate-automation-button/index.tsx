import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useQueryAutomation } from '@/hooks/user-queries'
import { useMutationData } from '@/hooks/use-mutation-data'
import { activateAutomation } from '@/actions/automations'
import { ActiveAutomation } from '@/icons/active-automation'

type Props = {
  id: string
}

const ActivateAutomationButton = ({ id }: Props) => {
  const { data } = useQueryAutomation(id)
  const { mutate, isPending } = useMutationData(
    ['activate'],
    (data: { state: boolean }) => activateAutomation(id, data.state),
    'automation-info'
  )

  return (
    <Button
      disabled={isPending}
      onClick={() => mutate({ state: !data?.data?.active })}
      className="lg:px-10 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#515BD4] hover:opacity-80 text-white rounded-full font-medium ml-4"
    >
      {isPending ? <Loader2 className="animate-spin" /> : <ActiveAutomation />}
      <p className="lg:inline hidden">
        {data?.data?.active ? 'Disable' : 'Enable'}
      </p>
    </Button>
  )
}

export default ActivateAutomationButton

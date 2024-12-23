import { Button } from '@/components/ui/button'
import { useSubscription } from '@/hooks/use-subscription'
import { CreditCardIcon, Loader2 } from 'lucide-react'
import React from 'react'

type Props = {}

const PaymentButton = (props: Props) => {
  const { onSubscribe, isProcessing } = useSubscription()
  return (
    <Button
      disabled={isProcessing}
      onClick={onSubscribe}
      className="bg-gradient-to-br 
                 text-white 
                 rounded-full 
                 from-[#ff2a2a] 
                 via-[#f370ff] 
                 font-bold 
                 to-[#6c2ffc]
                 transition-all 
                 duration-300 
                 hover:opacity-80"
    >
      {isProcessing ? <Loader2 className="animate-spin" /> : <CreditCardIcon />}
      Subscribe
    </Button>
  )
}

export default PaymentButton

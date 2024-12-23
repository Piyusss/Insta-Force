import React from 'react'
import PaymentButton from '../payment-button'

type Props = {}

const UpgradeCard = (props: Props) => {
  return (
    <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
      <span className="text-sm">
        Switch to {''}
        <span
          className="bg-gradient-to-r 
        from-[#ff4444] 
        to-[#6c2ffc] 
        font-bold 
        bg-clip-text 
        text-transparent"
        >
          AI Genius
        </span>
      </span>
      <p className="text-[#dfdede] font-light text-sm">
        Activate full functionality
      </p>
      <PaymentButton />
    </div>
  )
}

export default UpgradeCard

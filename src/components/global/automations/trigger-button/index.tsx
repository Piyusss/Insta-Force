import React from 'react'
import PopOver from '../../popover'
import { Divide } from 'lucide-react'
import { BlueAddIcon } from '@/icons'

type Props = {
  children: React.ReactNode
  label: string
}

const TriggerButton = ({ children, label }: Props) => {
  return (
    <PopOver
      className="w-[400px]"
      trigger={
<div
  className="border-2 border-dashed w-full hover:opacity-80 cursor-pointer transition duration-100 flex gap-x-2 justify-center items-center p-5 mt-4"
  style={{
    borderImage: 'linear-gradient(45deg, #F58529, #D62976) 1',
    borderRadius: '50%' // Makes the border circular
  }}
>
  <BlueAddIcon />
  <p>{label}</p>
</div>

      }
    >
      {children}
    </PopOver>
  )
}

export default TriggerButton

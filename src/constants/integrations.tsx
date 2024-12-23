import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons"

type Props = {
  title: string
  icon: React.ReactNode
  description: string
  strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
  {
    title: 'Connect Instagram',
    description:
      'Connect your Instagram account for a smoother interaction experience',
    icon: <InstagramDuoToneBlue />,
    strategy: 'INSTAGRAM',
    
  },

]

import { v4 } from 'uuid'

type Props = {
  id: string
  label: string
  subLabel: string
  description: string
}

export const DASHBOARD_CARDS: Props[] = [
  {
    id: v4(),
    label: 'Automate Your Replies',
    subLabel: 'Drop your product collection straight in the DMs',
    description: 'Get products in front of your followers in as many places',
  },
  {
    id: v4(),
    label: 'Effortlessly handle Queries',
    subLabel: 'Boosts efficiency and saves time',
    description: 'Ensuring faster and smoother workflows',
  },
    {
    id: v4(),
    label: 'AI That Answers Everything',
    subLabel: 'Let AI uncover the purpose behind every message',
    description: 'The intention of the message will be automatically detected',
  },
]

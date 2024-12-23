import {
  AutomationDuoToneBlue,
  ContactsDuoToneBlue,
  HomeDuoToneBlue,
  RocketDuoToneBlue,
  SettingsDuoToneWhite,
} from '@/icons'

export const PAGE_BREAD_CRUMBS: string[] = [
  'contacts',
  'automations',
  'integrations',
  'settings',
]

type Props = {
  [page in string]: React.ReactNode
}

export const PAGE_ICON: Props = {
  AUTOMATIONS: <AutomationDuoToneBlue />,
  CONTACTS: <ContactsDuoToneBlue />,
  INTEGRATIONS: <RocketDuoToneBlue />,
  SETTINGS: <SettingsDuoToneWhite />,
  HOME: <HomeDuoToneBlue />,
}

export const PLANS = [
  {
    name: 'Free Plan',
    description: 'Ideal for beginners',
    price: '$0',
    features: [
      'Convert followers into fans through tailored messaging',
      'Increase engagement with personalized responses',
      'Automate reply comments to improve audience interaction',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Smart AI Plan',
    description: 'Advanced features for power users',
    price: '$99',
    features: [
      'All features from Free Plan',
      'Priority access to customer support',
      'Customizable branding options',
      'AI-driven response generation',
      'In-depth analytics and insights',
    ],
    cta: 'Upgrade Now',
  },
]

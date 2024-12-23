import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'

export const Notifications = () => {
  return (
    <Button className="bg-[#28282b] border border-white rounded-full py-6 hover:bg-[#3a3a3d]">
      <Bell
        color="#ffffff"
        fill="#ffffff"
        className="transition-colors duration-300 hover:text-[#ff6347]"
      />
    </Button>
  )
}

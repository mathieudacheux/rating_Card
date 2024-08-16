import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { X } from 'lucide-react'

const Close = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <X />
        </TooltipTrigger>
        <TooltipContent>
          <p>Fermer</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export { Close }

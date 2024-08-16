import { useState } from 'react'
import {
  Card,
  CardContent,
  CardTitle,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Close } from '@/components/modal/close'
import RatingStar from '@/features/rating/RatingStar'
import Confetti from 'react-confetti'
import useWindowResize from '@/hooks/useWindowResize'

export default function RatingCard() {
  const [startConfetti, setStartConfetti] = useState<boolean>(false)
  const [hoveredStar, setHoveredStar] = useState<number>(0)

  const { width, height } = useWindowResize()

  return (
    <>
      <Card className='relative h-fit w-full max-w-[353px] border-[#E0E0E0] p-4 shadow-md'>
        <div className='absolute right-4 top-4 flex flex-1'>
          <Close />
        </div>
        <CardHeader>
          <CardTitle>
            <h1 className='text-center text-2xl font-semibold leading-8 tracking-wide text-[#333333]'>
              Quel note donnerais-tu à ce challenge ?
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-center leading-6 text-[#333333]'>
            Bon j’espère que tu vas mettre 5 évidemment, si ce n’est pas le cas
            viens me dire pourquoi !
          </p>
        </CardContent>
        <CardFooter className='flex items-center justify-center'>
          <RatingStar
            hovered={{
              star: hoveredStar,
              setStar: setHoveredStar,
            }}
            confetti={{
              start: startConfetti,
              setStart: setStartConfetti,
            }}
          />
        </CardFooter>
      </Card>

      {startConfetti && hoveredStar >= 4 && (
        <Confetti
          recycle={false}
          width={width}
          height={height}
          numberOfPieces={500}
          onConfettiComplete={() => setStartConfetti(false)}
        />
      )}
    </>
  )
}

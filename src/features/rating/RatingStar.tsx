import { Star } from 'lucide-react'

export default function RatingStar({
  hovered,
  confetti,
}: {
  hovered: {
    star: number
    setStar: (star: number) => void
  }
  confetti: {
    start: boolean
    setStart: (startConfetti: boolean) => void
  }
}) {
  return (
    <div className='flex flex-wrap justify-center gap-1'>
      {stars.map((star) => (
        <Star
          key={star}
          className='cursor-pointer bg-transparent text-[#7B61FF]'
          onMouseEnter={() =>
            confetti?.start ? undefined : hovered.setStar(star)
          }
          onClick={() =>
            confetti?.start ? undefined : confetti.setStart(true)
          }
          fill={star <= hovered.star ? '#7B61FF' : 'none'}
          width={28}
          height={28}
        />
      ))}
    </div>
  )
}

const stars = [1, 2, 3, 4, 5]

interface IndicatorProps {
  total: number
  current: number
}

export default function Indicator({ total, current }: IndicatorProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`dot ${i === current ? 'active' : ''}`} />
      ))}
    </div>
  )
}

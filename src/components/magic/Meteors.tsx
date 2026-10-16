import { useMemo } from 'react'
import { cn } from '@/lib/utils'

export interface MeteorsProps {
  number?: number
  className?: string
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const meteorStyles = useMemo(() => {
    return Array.from({ length: number }).map((_, i) => ({
      top: 0,
      left: `${(i * 47) % 800 - 400}px`,
      animationDelay: `${((i * 13) % 20) / 10 + 0.2}s`,
      animationDuration: `${((i * 17) % 6) + 3}s`,
    }))
  }, [number])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            'pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-[meteor_5s_linear_infinite] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className,
          )}
        />
      ))}
    </div>
  )
}

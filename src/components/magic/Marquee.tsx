import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  pauseOnHover?: boolean
  reverse?: boolean
  repeat?: number
  duration?: string
  className?: string
}

export function Marquee({
  children,
  pauseOnHover = true,
  reverse = false,
  repeat = 4,
  duration = '25s',
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      style={{ '--duration': duration } as React.CSSProperties}
      className={cn(
        'group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]',
        className,
      )}
      {...props}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'flex shrink-0 justify-around [gap:var(--gap)] animate-marquee',
            reverse && '[animation-direction:reverse]',
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
          )}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

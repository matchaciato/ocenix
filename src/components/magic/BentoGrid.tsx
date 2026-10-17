import { type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4',
        className,
      )}
    >
      {children}
    </div>
  )
}

export interface BentoCardProps {
  name: string
  className?: string
  background?: ReactNode
  icon?: ReactNode
  description: string
  href?: string
  cta?: string
}

export function BentoCard({
  name,
  className,
  background,
  icon,
  description,
  href,
  cta = 'Explore',
}: BentoCardProps) {
  return (
    <div
      className={cn(
        'group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl',
        'bg-card border border-border p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:border-foreground/20',
        className,
      )}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">{background}</div>

      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300">
        {icon ? (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/80 backdrop-blur-xs text-foreground shadow-xs">
            {icon}
          </div>
        ) : null}
        <h3 className="text-xl font-semibold text-card-foreground mt-4">
          {name}
        </h3>
        <p className="max-w-lg text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="pointer-events-none z-10 flex w-full translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {href ? (
          <a
            href={href}
            className={cn(
              'pointer-events-auto inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline -ml-1 py-1 px-2 rounded-md hover:bg-accent',
            )}
          >
            {cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-accent/5" />
    </div>
  )
}

import { Children, isValidElement, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface StepsProps {
  children: ReactNode
  className?: string
}

export function Steps({ children, className }: StepsProps) {
  return (
    <div className={cn('my-6 space-y-4 border-l border-border pl-6 ml-3', className)}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child
        return (
          <div key={index} className="relative pb-4 last:pb-0">
            <span className="absolute -left-[35px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-semibold text-primary shadow-xs">
              {index + 1}
            </span>
            {child}
          </div>
        )
      })}
    </div>
  )
}

export interface StepItemProps {
  title: string
  children: ReactNode
  className?: string
}

export function StepItem({ title, children, className }: StepItemProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <h4 className="font-semibold text-sm text-foreground">{title}</h4>
      <div className="text-xs text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  )
}

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export type BadgeVariant =
  | 'default'
  | 'secondary'
  | 'outline'
  | 'destructive'
  | 'success'
  | 'warning'
  | 'info'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'border-transparent bg-primary text-primary-foreground shadow-xs hover:bg-primary/80',
  secondary:
    'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline:
    'border-border text-foreground',
  destructive:
    'border-transparent bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/80',
  success:
    'bg-success/15 text-success border-success/30 hover:bg-success/25',
  warning:
    'bg-warning/15 text-warning border-warning/30 hover:bg-warning/25',
  info:
    'bg-info/15 text-info border-info/30 hover:bg-info/25',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          variantStyles[variant],
          className,
        )}
        {...props}
      />
    )
  },
)

Badge.displayName = 'Badge'

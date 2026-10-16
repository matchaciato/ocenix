import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', startIcon, endIcon, disabled, ...props }, ref) => {
    return (
      <div className="relative flex w-full items-center">
        {startIcon ? (
          <div className="pointer-events-none absolute left-3 flex items-center justify-center text-muted-foreground">
            {startIcon}
          </div>
        ) : null}
        <input
          type={type}
          ref={ref}
          disabled={disabled}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
            'placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
            'disabled:cursor-not-allowed disabled:opacity-50',
            startIcon && 'pl-9',
            endIcon && 'pr-9',
            className,
          )}
          {...props}
        />
        {endIcon ? (
          <div className="pointer-events-none absolute right-3 flex items-center justify-center text-muted-foreground">
            {endIcon}
          </div>
        ) : null}
      </div>
    )
  },
)

Input.displayName = 'Input'

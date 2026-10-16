import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#ffffff',
      shimmerSize = '0.05em',
      shimmerDuration = '3s',
      borderRadius = '100px',
      background = 'rgba(0, 0, 0, 1)',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        style={
          {
            '--shimmer-color': shimmerColor,
            '--shimmer-size': shimmerSize,
            '--shimmer-duration': shimmerDuration,
            '--radius': borderRadius,
            '--bg': background,
          } as React.CSSProperties
        }
        className={cn(
          'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-2.5 text-xs font-medium text-white [background:var(--bg)] [border-radius:var(--radius)]',
          'transform-gpu transition-all duration-300 hover:scale-105 active:scale-95 shadow-md',
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden [border-radius:var(--radius)]">
          <div className="absolute inset-[-100%] animate-spin [animation-duration:var(--shimmer-duration)] [background:conic-gradient(from_0deg,transparent_0_340deg,var(--shimmer-color)_360deg)]" />
        </div>

        <div className="absolute inset-[1px] rounded-[inherit] bg-zinc-950 transition-colors duration-300 group-hover:bg-zinc-900" />

        <div className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </div>
      </button>
    )
  },
)

ShimmerButton.displayName = 'ShimmerButton'

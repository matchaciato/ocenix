import { forwardRef, useState, type HTMLAttributes, type ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export const Avatar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border shadow-xs',
        className,
      )}
      {...props}
    />
  ),
)
Avatar.displayName = 'Avatar'

export interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  onLoadingStatusChange?: (status: 'loading' | 'loaded' | 'error') => void
}

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, src, alt, onError, ...props }, ref) => {
    const [hasError, setHasError] = useState(false)

    if (hasError || !src) return null

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        onError={(e) => {
          setHasError(true)
          onError?.(e)
        }}
        className={cn('aspect-square h-full w-full object-cover', className)}
        {...props}
      />
    )
  },
)
AvatarImage.displayName = 'AvatarImage'

export const AvatarFallback = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-xs text-muted-foreground',
      className,
    )}
    {...props}
  />
))
AvatarFallback.displayName = 'AvatarFallback'

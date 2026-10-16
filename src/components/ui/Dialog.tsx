import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface DialogContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const DialogContext = createContext<DialogContextValue | null>(null)

export interface DialogProps {
  children: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Dialog({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen

  const setIsOpen = (next: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(next)
    }
    onOpenChange?.(next)
  }

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

export interface DialogTriggerProps {
  children: ReactNode
  asChild?: boolean
}

export function DialogTrigger({ children }: DialogTriggerProps) {
  const context = useContext(DialogContext)
  if (!context) return null

  return (
    <span
      onClick={() => context.setIsOpen(true)}
      className="inline-block cursor-pointer"
    >
      {children}
    </span>
  )
}

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children, ...props }, ref) => {
    const context = useContext(DialogContext)
    if (!context || !context.isOpen) return null

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          context.setIsOpen(false)
        }
      }
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    }, [context])

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-xs transition-opacity"
          onClick={() => context.setIsOpen(false)}
          aria-hidden="true"
        />

        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(
            'relative z-50 w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-xl',
            'transition-all duration-200 animate-in fade-in-0 zoom-in-95',
            className,
          )}
          {...props}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 h-7 w-7 text-muted-foreground hover:text-foreground"
            onClick={() => context.setIsOpen(false)}
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </Button>
          {children}
        </div>
      </div>
    )
  },
)
DialogContent.displayName = 'DialogContent'

export function DialogHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left mb-4', className)}
      {...props}
    />
  )
}

export function DialogTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('text-lg font-semibold leading-none tracking-tight text-foreground', className)}
      {...props}
    />
  )
}

export function DialogDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-xs text-muted-foreground leading-relaxed', className)}
      {...props}
    />
  )
}

export function DialogFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6 pt-4 border-t border-border', className)}
      {...props}
    />
  )
}

export function DialogClose({ children }: { children: ReactNode }) {
  const context = useContext(DialogContext)
  if (!context) return null

  return (
    <span
      onClick={() => context.setIsOpen(false)}
      className="inline-block cursor-pointer"
    >
      {children}
    </span>
  )
}

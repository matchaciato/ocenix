import {
  createContext,
  forwardRef,
  useContext,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionContextValue {
  expandedItems: string[]
  toggleItem: (value: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  children: ReactNode
}

export function Accordion({
  type = 'single',
  defaultValue,
  children,
  className,
  ...props
}: AccordionProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(() => {
    if (!defaultValue) return []
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
  })

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setExpandedItems((prev) => (prev.includes(value) ? [] : [value]))
    } else {
      setExpandedItems((prev) =>
        prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value],
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ expandedItems, toggleItem }}>
      <div className={cn('divide-y divide-border border-b border-border', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const AccordionItemContext = createContext<{ value: string } | null>(null)

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  children: ReactNode
}

export function AccordionItem({
  value,
  children,
  className,
  ...props
}: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn('border-t border-border first:border-t-0', className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const accordion = useContext(AccordionContext)
  const item = useContext(AccordionItemContext)
  const isExpanded = Boolean(item && accordion?.expandedItems.includes(item.value))

  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={isExpanded}
      onClick={() => item && accordion?.toggleItem(item.value)}
      className={cn(
        'flex w-full items-center justify-between py-4 text-xs font-semibold text-foreground transition-all hover:underline text-left',
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
          isExpanded && 'rotate-180',
        )}
      />
    </button>
  )
})
AccordionTrigger.displayName = 'AccordionTrigger'

export const AccordionContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const accordion = useContext(AccordionContext)
  const item = useContext(AccordionItemContext)
  const isExpanded = Boolean(item && accordion?.expandedItems.includes(item.value))

  if (!isExpanded) return null

  return (
    <div
      ref={ref}
      role="region"
      className={cn('pb-4 pt-0 text-xs text-muted-foreground leading-relaxed animate-in fade-in-0 duration-200', className)}
      {...props}
    >
      {children}
    </div>
  )
})
AccordionContent.displayName = 'AccordionContent'

import { type ReactNode } from 'react'
import { AlertCircle, AlertTriangle, Info, Lightbulb } from 'lucide-react'
import { renderInlineMarkdown } from '@/lib/markdown'
import { cn } from '@/lib/utils'

export type CalloutType = 'note' | 'tip' | 'warning' | 'danger'

export interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
  className?: string
}

const calloutConfig: Record<
  CalloutType,
  { icon: typeof Info; containerClass: string; iconClass: string; defaultTitle: string }
> = {
  note: {
    icon: Info,
    containerClass: 'border-blue-500/30 bg-blue-500/5 text-blue-900 dark:text-blue-200',
    iconClass: 'text-blue-500',
    defaultTitle: 'Note',
  },
  tip: {
    icon: Lightbulb,
    containerClass: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-900 dark:text-emerald-200',
    iconClass: 'text-emerald-500',
    defaultTitle: 'Tip',
  },
  warning: {
    icon: AlertTriangle,
    containerClass: 'border-amber-500/30 bg-amber-500/5 text-amber-900 dark:text-amber-200',
    iconClass: 'text-amber-500',
    defaultTitle: 'Warning',
  },
  danger: {
    icon: AlertCircle,
    containerClass: 'border-destructive/30 bg-destructive/5 text-destructive dark:text-red-300',
    iconClass: 'text-destructive',
    defaultTitle: 'Important',
  },
}

export function Callout({
  type = 'note',
  title,
  children,
  className,
}: CalloutProps) {
  const config = calloutConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        'my-6 flex gap-3 rounded-xl border p-4 text-xs leading-relaxed shadow-xs',
        config.containerClass,
        className,
      )}
    >
      <Icon className={cn('h-4 w-4 shrink-0 mt-0.5', config.iconClass)} />
      <div className="space-y-1 w-full">
        <p className="font-semibold text-foreground">
          {title || config.defaultTitle}
        </p>
        <div className="text-muted-foreground leading-relaxed">
          {typeof children === 'string' ? (
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(children) }} />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  )
}

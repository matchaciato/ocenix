import { useState, type ReactNode } from 'react'
import {
  Check,
  Code2,
  Copy,
  Maximize2,
  RotateCcw,
  Smartphone,
  Tablet,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ErrorBoundary } from '@/components/docs/ErrorBoundary'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'

export type ViewportSize = 'desktop' | 'tablet' | 'mobile'

export interface ComponentPreviewProps {
  name?: string
  code: string
  children: ReactNode
  description?: string
  className?: string
}

export function ComponentPreview({
  name,
  code,
  children,
  description,
  className,
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [viewport, setViewport] = useState<ViewportSize>('desktop')
  const [remountKey, setRemountKey] = useState(0)
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  const reloadPreview = () => {
    setRemountKey((prev) => prev + 1)
  }

  return (
    <div className={cn('my-6 rounded-xl border border-border bg-card shadow-xs overflow-hidden', className)}>
      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-border bg-muted/30 px-4 py-2.5">
        <div className="flex items-center gap-1 bg-background border border-border p-0.5 rounded-lg text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={cn(
              'px-3 py-1 rounded-md font-medium transition-colors',
              activeTab === 'preview'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={cn(
              'px-3 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5',
              activeTab === 'code'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Code2 className="h-3.5 w-3.5" />
            Code
          </button>
        </div>

        <div className="flex items-center gap-2">
          {activeTab === 'preview' ? (
            <div className="hidden sm:flex items-center rounded-lg border border-border p-0.5 bg-background">
              <Button
                variant={viewport === 'desktop' ? 'secondary' : 'ghost'}
                size="icon"
                className="h-7 w-7 rounded-md"
                onClick={() => setViewport('desktop')}
                aria-label="Desktop viewport"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant={viewport === 'tablet' ? 'secondary' : 'ghost'}
                size="icon"
                className="h-7 w-7 rounded-md"
                onClick={() => setViewport('tablet')}
                aria-label="Tablet viewport"
              >
                <Tablet className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant={viewport === 'mobile' ? 'secondary' : 'ghost'}
                size="icon"
                className="h-7 w-7 rounded-md"
                onClick={() => setViewport('mobile')}
                aria-label="Mobile viewport"
              >
                <Smartphone className="h-3.5 w-3.5" />
              </Button>
            </div>
          ) : null}

          {activeTab === 'preview' ? (
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={reloadPreview}
              aria-label="Reload preview state"
            >
              <RotateCcw className="h-3.5 w-3.5 text-muted-foreground" />
            </Button>
          ) : null}

          <Button
            variant="outline"
            size="sm"
            className="h-8 text-xs gap-1.5"
            onClick={() => copyToClipboard(code.trim())}
          >
            {isCopied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            <span className="hidden sm:inline">{isCopied ? 'Copied' : 'Copy'}</span>
          </Button>
        </div>
      </div>

      {description ? (
        <div className="px-4 py-2 border-b border-border bg-muted/10 text-xs text-muted-foreground">
          {description}
        </div>
      ) : null}

      <div className="relative">
        {activeTab === 'preview' ? (
          <div className="min-h-[280px] p-8 flex items-center justify-center bg-background/50 overflow-x-auto">
            <div
              key={remountKey}
              className={cn(
                'w-full transition-all duration-300 mx-auto flex items-center justify-center',
                viewport === 'tablet' && 'max-w-[768px] border-x border-dashed border-border py-4',
                viewport === 'mobile' && 'max-w-[375px] border-x border-dashed border-border py-4',
              )}
            >
              <ErrorBoundary fallbackTitle={`Error pada demo ${name || 'komponen'}`}>
                {children}
              </ErrorBoundary>
            </div>
          </div>
        ) : (
          <div className="-my-4">
            <CodeBlock code={code} language="tsx" fileName={name ? `${name}.tsx` : undefined} />
          </div>
        )}
      </div>
    </div>
  )
}

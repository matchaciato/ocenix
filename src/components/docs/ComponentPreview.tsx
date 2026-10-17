import { useState, type ReactNode } from 'react'
import {
  Check,
  Code2,
  Copy,
  FileCode,
  FileCode2,
  Maximize2,
  RotateCcw,
  Smartphone,
  Tablet,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ErrorBoundary } from '@/components/docs/ErrorBoundary'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { slugify, renderInlineMarkdown } from '@/lib/markdown'
import { cn } from '@/lib/utils'

export type ViewportSize = 'desktop' | 'tablet' | 'mobile'
export type ComponentPreviewTab = 'preview' | 'html' | 'css' | 'js'

export interface ComponentPreviewProps {
  name?: string
  html?: string
  css?: string
  js?: string
  code?: string
  children: ReactNode
  description?: string
  className?: string
}

export function ComponentPreview({
  name,
  html,
  css,
  js,
  code,
  children,
  description,
  className,
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<ComponentPreviewTab>('preview')
  const [viewport, setViewport] = useState<ViewportSize>('desktop')
  const [remountKey, setRemountKey] = useState(0)
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  const htmlContent = (html || code || '').trim()
  const cssContent = (css || '').trim()
  const jsContent = (js || '').trim()

  const activeContent =
    activeTab === 'preview' || activeTab === 'html'
      ? htmlContent
      : activeTab === 'css'
        ? cssContent
        : jsContent

  const activeCopyLabel =
    activeTab === 'preview' ? 'Copy HTML' : `Copy ${activeTab.toUpperCase()}`

  const reloadPreview = () => {
    setRemountKey((prev) => prev + 1)
  }

  const fileSlug = name ? slugify(name) : 'component'

  return (
    <div className={cn('my-6 rounded-xl border border-border bg-card shadow-xs overflow-hidden', className)}>
      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-border bg-muted/30 px-4 py-2.5">
        <div className="flex items-center gap-1 bg-background border border-border p-0.5 rounded-lg text-xs overflow-x-auto max-w-full">
          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={cn(
              'px-3 py-1 rounded-md font-medium transition-colors cursor-pointer',
              activeTab === 'preview'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('html')}
            className={cn(
              'px-3 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer',
              activeTab === 'html'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Code2 className="h-3.5 w-3.5" />
            HTML
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('css')}
            className={cn(
              'px-3 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer',
              activeTab === 'css'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <FileCode className="h-3.5 w-3.5" />
            CSS
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('js')}
            className={cn(
              'px-3 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer',
              activeTab === 'js'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <FileCode2 className="h-3.5 w-3.5" />
            JS
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
            onClick={() => copyToClipboard(activeContent)}
          >
            {isCopied ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            <span className="hidden sm:inline">{isCopied ? 'Copied' : activeCopyLabel}</span>
          </Button>
        </div>
      </div>

      {description ? (
        <div
          className="px-4 py-2 border-b border-border bg-muted/10 text-xs text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(description) }}
        />
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
              <ErrorBoundary fallbackTitle={`Error rendering ${name || 'component'} demo`}>
                {children}
              </ErrorBoundary>

            </div>
          </div>
        ) : activeTab === 'html' ? (
          <div className="-my-4">
            <CodeBlock
              code={htmlContent}
              language="html"
              fileName={`${fileSlug}.html`}
            />
          </div>
        ) : activeTab === 'css' ? (
          <div className="-my-4">
            <CodeBlock
              code={cssContent}
              language="css"
              fileName={`${fileSlug}.css`}
            />
          </div>
        ) : (
          <div className="-my-4">
            <CodeBlock
              code={jsContent}
              language="javascript"
              fileName={`${fileSlug}.js`}
            />
          </div>
        )}
      </div>
    </div>
  )
}


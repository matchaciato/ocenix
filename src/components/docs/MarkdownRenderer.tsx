import { useMemo } from 'react'
import { renderMarkdown } from '@/lib/markdown'
import { cn } from '@/lib/utils'

export interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const html = useMemo(() => renderMarkdown(content), [content])

  return (
    <div
      className={cn('markdown-body space-y-4 max-w-none', className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

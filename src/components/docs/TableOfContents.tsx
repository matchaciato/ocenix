import { ArrowUp, Link2 } from 'lucide-react'
import { useActiveHeading } from '@/hooks/use-active-heading'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import type { TableOfContentsItem } from '@/types/nav.types'
import { cn } from '@/lib/utils'

export interface TableOfContentsProps {
  headings?: TableOfContentsItem[]
}

export function TableOfContents({ headings = [] }: TableOfContentsProps) {
  const headingIds = headings.map((h) => h.id)
  const activeId = useActiveHeading(headingIds)
  const { copyToClipboard } = useCopyToClipboard()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const copyPageUrl = () => {
    copyToClipboard(window.location.href)
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="space-y-4 text-sm">
      <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">
        On this page
      </p>

      <nav className="flex flex-col space-y-2 border-l border-border pl-3">
        {headings.map((item) => {
          const isActive = activeId === item.id

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'text-xs transition-colors hover:text-foreground line-clamp-1 py-0.5',
                item.level === 3 && 'pl-3',
                isActive
                  ? 'font-medium text-foreground -ml-[13px] border-l-2 border-primary pl-[11px]'
                  : 'text-muted-foreground',
              )}
            >
              {item.title}
            </a>
          )
        })}
      </nav>

      <div className="pt-4 border-t border-border flex flex-col space-y-2 text-xs text-muted-foreground">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-foreground transition-colors text-left"
        >
          <ArrowUp className="h-3.5 w-3.5" />
          Back to top
        </button>
        <button
          type="button"
          onClick={copyPageUrl}
          className="flex items-center gap-1.5 hover:text-foreground transition-colors text-left"
        >
          <Link2 className="h-3.5 w-3.5" />
          Copy page link
        </button>
      </div>
    </div>
  )
}

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { getPagination } from '@/config/docs-nav.config'

export function DocsPagination() {
  const location = useLocation()
  const { prev, next } = getPagination(location.pathname)

  if (!prev && !next) {
    return null
  }

  return (
    <div className="flex items-center justify-between gap-4 pt-8 mt-12 border-t border-border">
      {prev ? (
        <Link
          to={prev.href}
          className="group flex flex-col items-start gap-1 p-3 rounded-lg border border-border hover:border-foreground/30 hover:bg-accent/40 transition-all max-w-[48%]"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground">
            <ChevronLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Previous
          </span>
          <span className="text-sm font-medium text-foreground line-clamp-1">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={next.href}
          className="group flex flex-col items-end gap-1 p-3 rounded-lg border border-border hover:border-foreground/30 hover:bg-accent/40 transition-all max-w-[48%] ml-auto text-right"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground">
            Next
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="text-sm font-medium text-foreground line-clamp-1">
            {next.title}
          </span>
        </Link>
      ) : null}
    </div>
  )
}

import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { getBreadcrumbs } from '@/config/docs-nav.config'

export function Breadcrumbs() {
  const location = useLocation()
  const crumbs = getBreadcrumbs(location.pathname)

  if (crumbs.length <= 1) {
    return null
  }

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-xs text-muted-foreground mb-4">
      <ol className="flex items-center flex-wrap gap-1.5">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1

          return (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight className="h-3 w-3 text-muted-foreground/50 shrink-0" />
              ) : null}
              {isLast || !crumb.href ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={isLast ? 'font-medium text-foreground' : 'text-muted-foreground'}
                >
                  {crumb.title}
                </span>
              ) : (
                <Link
                  to={crumb.href}
                  className="hover:text-foreground transition-colors"
                >
                  {crumb.title}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

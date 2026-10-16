import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { X } from 'lucide-react'
import { siteConfig } from '@/config/site.config'
import { docsConfig } from '@/config/docs-nav.config'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const location = useLocation()

  useEffect(() => {
    onClose()
  }, [location.pathname, onClose])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-background border-r border-border p-6 shadow-xl flex flex-col justify-between overflow-y-auto">
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold tracking-tight text-base"
              onClick={onClose}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono text-xs shadow-xs">
                OX
              </span>
              <span>{siteConfig.name}</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Main Menu
            </p>
            <div className="flex flex-col space-y-1">
              {docsConfig.mainNav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-accent text-accent-foreground font-semibold'
                        : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
                    )
                  }
                >
                  <span>{item.title}</span>
                  {item.badge ? (
                    <Badge variant="success" className="px-1.5 py-0 text-[10px]">
                      {item.badge}
                    </Badge>
                  ) : null}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Documentation Tree
            </p>
            <div className="space-y-4">
              {docsConfig.sidebarNav.map((section) => (
                <div key={section.title} className="space-y-1.5">
                  <p className="text-xs font-medium text-foreground px-3">
                    {section.title}
                  </p>
                  <div className="flex flex-col space-y-0.5">
                    {section.items.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className={({ isActive }) =>
                          cn(
                            'flex items-center justify-between px-3 py-1.5 rounded-md text-xs transition-colors',
                            isActive
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-muted-foreground hover:bg-accent/40 hover:text-foreground',
                          )
                        }
                      >
                        <span>{item.title}</span>
                        {item.badge ? (
                          <Badge variant="secondary" className="px-1 py-0 text-[9px]">
                            {item.badge}
                          </Badge>
                        ) : null}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-xs text-muted-foreground">
          <p>Ocenix UI v{siteConfig.version}</p>
        </div>
      </div>
    </div>
  )
}

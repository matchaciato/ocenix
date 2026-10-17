import { Menu, Search } from 'lucide-react'
import { Link, NavLink } from 'react-router'
import { siteConfig } from '@/config/site.config'
import { docsConfig } from '@/config/docs-nav.config'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { cn } from '@/lib/utils'

export interface HeaderProps {
  variant?: 'landing' | 'docs'
  onOpenMobileNav?: () => void
  onOpenSearch?: () => void
}

export function Header({
  variant = 'landing',
  onOpenMobileNav,
  onOpenSearch,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2.5 font-bold tracking-tight text-lg">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono text-sm shadow-xs">
              OX
            </span>
            <span>{siteConfig.name}</span>
          </Link>
          <Badge variant="outline" className="hidden sm:inline-flex text-[11px] font-mono">
            v{siteConfig.version}
          </Badge>
        </div>

        {variant === 'docs' ? (
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex w-full items-center justify-between rounded-lg border border-input bg-card/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
            >
              <span className="flex items-center gap-2">
                <Search className="h-3.5 w-3.5" />
                Search documentation...
              </span>
              <kbd className="pointer-events-none rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
                Ctrl K
              </kbd>
            </button>
          </div>
        ) : (
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {docsConfig.mainNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'transition-colors hover:text-foreground flex items-center gap-1.5',
                    isActive && 'text-foreground font-semibold',
                  )
                }
              >
                {item.title}
                {item.badge ? (
                  <Badge variant="success" className="px-1.5 py-0 text-[10px]">
                    {item.badge}
                  </Badge>
                ) : null}
              </NavLink>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onOpenSearch}
            className={cn('text-muted-foreground hover:text-foreground', variant === 'docs' && 'md:hidden')}
            aria-label="Search documentation"
          >
            <Search className="h-4 w-4" />
          </Button>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground p-2 rounded-md transition-colors"
            aria-label="GitHub Repository"
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            onClick={onOpenMobileNav}
            className="md:hidden text-foreground ml-1"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

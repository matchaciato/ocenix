import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import { docsConfig } from '@/config/docs-nav.config'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { MobileNav } from '@/components/shared/MobileNav'
import { Breadcrumbs } from '@/components/docs/Breadcrumbs'
import { DocsPagination } from '@/components/docs/DocsPagination'
import { TableOfContents } from '@/components/docs/TableOfContents'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

export function DocsLayout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="relative min-h-dvh bg-background text-foreground flex flex-col">
      <Header
        variant="docs"
        onOpenMobileNav={() => setIsMobileNavOpen(true)}
      />

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      <div className="container mx-auto max-w-7xl flex-1 items-start px-4 sm:px-8 md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_220px] gap-6 lg:gap-10">
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block overflow-y-auto py-6 pr-4 border-r border-border">
          <nav className="flex flex-col space-y-6">
            {docsConfig.sidebarNav.map((section) => (
              <div key={section.title} className="space-y-2">
                <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground px-2">
                  {section.title}
                </p>
                <div className="flex flex-col space-y-0.5">
                  {section.items.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs transition-colors',
                          isActive
                            ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary pl-2'
                            : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
                        )
                      }
                    >
                      <span className="line-clamp-1">{item.title}</span>
                      {item.badge ? (
                        <Badge
                          variant={item.badge === 'New' ? 'default' : 'secondary'}
                          className="px-1.5 py-0 text-[10px]"
                        >
                          {item.badge}
                        </Badge>
                      ) : null}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <main className="relative py-6 lg:py-8 min-w-0 max-w-3xl flex-1">
          <Breadcrumbs />
          <div id="docs-content" className="prose dark:prose-invert max-w-none">
            <Outlet />
          </div>
          <DocsPagination />
        </main>

        <aside className="hidden xl:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 pl-2">
          <TableOfContents />
        </aside>
      </div>

      <Footer />
    </div>
  )
}

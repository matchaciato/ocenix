import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router'
import { siteConfig } from '@/config/site.config'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground text-xs text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1 space-y-3">
            <Link to="/" className="flex items-center gap-2 font-bold tracking-tight text-base text-foreground">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground font-mono text-xs">
                OX
              </span>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Modern accessible UI kit combining Radix primitives, Tailwind CSS v4, and Magic UI motion effects.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-foreground text-xs uppercase tracking-wider">
              Documentation
            </p>
            <ul className="space-y-2">
              <li>
                <Link to="/docs/introduction" className="hover:text-foreground transition-colors">
                  Introduction
                </Link>
              </li>
              <li>
                <Link to="/docs/installation" className="hover:text-foreground transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link to="/docs/theming" className="hover:text-foreground transition-colors">
                  Theming &amp; Tokens
                </Link>
              </li>
              <li>
                <Link to="/docs/dark-mode" className="hover:text-foreground transition-colors">
                  Dark Mode
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-foreground text-xs uppercase tracking-wider">
              Components
            </p>
            <ul className="space-y-2">
              <li>
                <Link to="/docs/components/button" className="hover:text-foreground transition-colors">
                  Button
                </Link>
              </li>
              <li>
                <Link to="/docs/components/card" className="hover:text-foreground transition-colors">
                  Card
                </Link>
              </li>
              <li>
                <Link to="/docs/components/input" className="hover:text-foreground transition-colors">
                  Input
                </Link>
              </li>
              <li>
                <Link to="/docs/magic/bento-grid" className="hover:text-foreground transition-colors">
                  Bento Grid
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-foreground text-xs uppercase tracking-wider">
              Community
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  GitHub <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link to="/showcase" className="hover:text-foreground transition-colors">
                  Showcase Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Released under the MIT License.</p>
          <p className="text-[11px] font-mono">v{siteConfig.version}</p>
        </div>
      </div>
    </footer>
  )
}

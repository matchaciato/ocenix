export type NavBadge = 'New' | 'Updated' | 'Beta' | 'Experimental'

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  badge?: NavBadge
  description?: string
  icon?: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export interface DocsConfig {
  mainNav: NavItem[]
  sidebarNav: NavSection[]
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  version: string
  links: {
    github: string
    twitter?: string
    discord?: string
  }
}

export interface PaginationItem {
  title: string
  href: string
}

export interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

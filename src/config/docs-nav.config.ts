import type { DocsConfig, NavItem, PaginationItem } from '@/types/nav.types'

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs/introduction',
    },
    {
      title: 'Components',
      href: '/docs/components/button',
    },
    {
      title: 'Magic UI',
      href: '/docs/magic/bento-grid',
      badge: 'New',
    },
    {
      title: 'Showcase',
      href: '/showcase',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs/introduction',
        },
        {
          title: 'Installation',
          href: '/docs/installation',
        },
        {
          title: 'Theming & Tokens',
          href: '/docs/theming',
        },
        {
          title: 'Dark Mode',
          href: '/docs/dark-mode',
        },
        {
          title: 'Accessibility',
          href: '/docs/accessibility',
        },
      ],
    },
    {
      title: 'Foundations',
      items: [
        {
          title: 'Colors',
          href: '/docs/tokens/colors',
        },
        {
          title: 'Typography',
          href: '/docs/tokens/typography',
        },
        {
          title: 'Shadows & Elevation',
          href: '/docs/tokens/shadows',
        },
        {
          title: 'Breakpoints',
          href: '/docs/tokens/breakpoints',
        },
      ],
    },
    {
      title: 'Core Primitives',
      items: [
        {
          title: 'Button',
          href: '/docs/components/button',
        },
        {
          title: 'Badge',
          href: '/docs/components/badge',
        },
        {
          title: 'Card',
          href: '/docs/components/card',
        },
        {
          title: 'Avatar',
          href: '/docs/components/avatar',
        },
        {
          title: 'Tooltip',
          href: '/docs/components/tooltip',
        },
        {
          title: 'Keyboard Key (Kbd)',
          href: '/docs/components/kbd',
        },
      ],
    },
    {
      title: 'Form & Inputs',
      items: [
        {
          title: 'Input',
          href: '/docs/components/input',
        },
        {
          title: 'Textarea',
          href: '/docs/components/textarea',
        },
        {
          title: 'Select',
          href: '/docs/components/select',
        },
        {
          title: 'Switch',
          href: '/docs/components/switch',
        },
        {
          title: 'Checkbox',
          href: '/docs/components/checkbox',
        },
        {
          title: 'Slider',
          href: '/docs/components/slider',
        },
      ],
    },
    {
      title: 'Overlays & Feedback',
      items: [
        {
          title: 'Dialog (Modal)',
          href: '/docs/components/dialog',
        },
        {
          title: 'Sheet (Drawer)',
          href: '/docs/components/sheet',
        },
        {
          title: 'Popover',
          href: '/docs/components/popover',
        },
        {
          title: 'Alert',
          href: '/docs/components/alert',
        },
        {
          title: 'Toast',
          href: '/docs/components/toast',
          badge: 'Updated',
        },
        {
          title: 'Skeleton',
          href: '/docs/components/skeleton',
        },
        {
          title: 'Progress',
          href: '/docs/components/progress',
        },
      ],
    },
    {
      title: 'Navigation',
      items: [
        {
          title: 'Tabs',
          href: '/docs/components/tabs',
        },
        {
          title: 'Breadcrumb',
          href: '/docs/components/breadcrumb',
        },
        {
          title: 'Dropdown Menu',
          href: '/docs/components/dropdown',
        },
        {
          title: 'Accordion',
          href: '/docs/components/accordion',
        },
      ],
    },
    {
      title: 'Magic & Motion',
      items: [
        {
          title: 'Bento Grid',
          href: '/docs/magic/bento-grid',
          badge: 'New',
        },
        {
          title: 'Border Beam',
          href: '/docs/magic/border-beam',
          badge: 'New',
        },
        {
          title: 'Shimmer Button',
          href: '/docs/magic/shimmer-button',
          badge: 'New',
        },
        {
          title: 'Animated Marquee',
          href: '/docs/magic/marquee',
          badge: 'New',
        },
        {
          title: 'Meteors Effect',
          href: '/docs/magic/meteors',
          badge: 'New',
        },
      ],
    },
  ],
}

export function getAllDocLinks(): NavItem[] {
  return docsConfig.sidebarNav.flatMap((section) => section.items)
}

export function getPagination(currentHref: string): {
  prev?: PaginationItem
  next?: PaginationItem
} {
  const allLinks = getAllDocLinks()
  const currentIndex = allLinks.findIndex((link) => link.href === currentHref)

  if (currentIndex === -1) {
    return {}
  }

  const prevItem = currentIndex > 0 ? allLinks[currentIndex - 1] : undefined
  const nextItem =
    currentIndex < allLinks.length - 1 ? allLinks[currentIndex + 1] : undefined

  return {
    prev: prevItem ? { title: prevItem.title, href: prevItem.href } : undefined,
    next: nextItem ? { title: nextItem.title, href: nextItem.href } : undefined,
  }
}

export function getBreadcrumbs(
  currentHref: string,
): { title: string; href?: string }[] {
  const crumbs: { title: string; href?: string }[] = [{ title: 'Docs', href: '/docs/introduction' }]

  for (const section of docsConfig.sidebarNav) {
    const found = section.items.find((item) => item.href === currentHref)
    if (found) {
      crumbs.push({ title: section.title })
      crumbs.push({ title: found.title, href: found.href })
      return crumbs
    }
  }

  return crumbs
}

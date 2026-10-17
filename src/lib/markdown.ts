import { Marked } from 'marked'
import { highlightCode } from '@/lib/syntax-highlighter'
import type { TableOfContentsItem } from '@/types/nav.types'

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export function parseFrontmatter(raw: string): {
  data: Record<string, string>
  content: string
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)

  if (!match) {
    return { data: {}, content: raw }
  }

  const rawYaml = match[1]
  const content = match[2]
  const data: Record<string, string> = {}

  rawYaml.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':')
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim()
      const value = line.slice(colonIndex + 1).trim().replace(/^['"]|['"]$/g, '')
      if (key) {
        data[key] = value
      }
    }
  })

  return { data, content }
}

export function extractHeadings(markdown: string): TableOfContentsItem[] {
  const headings: TableOfContentsItem[] = []
  const lines = markdown.split('\n')

  lines.forEach((line) => {
    const match = line.match(/^(#{2,3})\s+(.*)$/)
    if (match) {
      const level = match[1].length
      const rawTitle = match[2].trim()
      const title = rawTitle.replace(/`([^`]+)`/g, '$1')
      const id = slugify(title)
      headings.push({ id, title, level })
    }
  })

  return headings
}

export function createMarkedInstance(): Marked {
  const markedInstance = new Marked({
    gfm: true,
    breaks: false,
  })

  markedInstance.use({
    renderer: {
      heading(token) {
        const text = this.parser.parseInline(token.tokens)
        const cleanText = token.text.replace(/<[^>]*>/g, '')
        const id = slugify(cleanText)

        if (token.depth === 1) {
          return `<h1 id="${id}" class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-8 mb-4">${text}</h1>`
        }
        if (token.depth === 2) {
          return `<h2 id="${id}" class="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-10 mb-4 pb-2 border-b border-border">${text}</h2>`
        }
        if (token.depth === 3) {
          return `<h3 id="${id}" class="text-lg font-semibold tracking-tight text-foreground mt-8 mb-3">${text}</h3>`
        }
        return `<h${token.depth} id="${id}" class="font-semibold text-foreground mt-6 mb-2">${text}</h${token.depth}>`
      },
      paragraph(token) {
        const text = this.parser.parseInline(token.tokens)
        return `<p class="text-sm leading-relaxed text-muted-foreground my-4">${text}</p>`
      },
      code(token) {
        const highlighted = highlightCode(token.text, token.lang || 'html')
        return `<div class="relative my-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-950 p-4 font-mono text-xs text-zinc-900 dark:text-zinc-100 overflow-x-auto"><span class="absolute top-2 right-3 text-[10px] uppercase font-mono text-zinc-500">${token.lang || 'code'}</span><pre class="m-0 p-0 bg-transparent"><code>${highlighted}</code></pre></div>`
      },
      codespan(token) {
        return `<code class="rounded-md bg-zinc-200/70 dark:bg-zinc-800/80 px-1.5 py-0.5 font-mono text-xs text-foreground font-semibold border border-zinc-300/50 dark:border-zinc-700/50">${escapeHtml(token.text)}</code>`
      },
      strong(token) {
        const text = this.parser.parseInline(token.tokens)
        return `<strong class="font-bold text-foreground">${text}</strong>`
      },
      em(token) {
        const text = this.parser.parseInline(token.tokens)
        return `<em class="italic text-foreground/90">${text}</em>`
      },
      list(token) {
        const tag = token.ordered ? 'ol' : 'ul'
        const listClass = token.ordered
          ? 'list-decimal pl-5 space-y-1.5 my-4 text-xs text-muted-foreground'
          : 'list-disc pl-5 space-y-1.5 my-4 text-xs text-muted-foreground'
        const inner = token.items
          .map((item) => {
            const content = this.parser.parse(item.tokens).replace(/^<p>|<\/p>\s*$/g, '')
            return `<li>${content}</li>`
          })
          .join('')
        return `<${tag} class="${listClass}">${inner}</${tag}>`
      },
      table(token) {
        const headerHtml = token.header
          .map((cell) => {
            const text = this.parser.parseInline(cell.tokens)
            return `<th class="py-2.5 px-4 font-semibold text-foreground">${text}</th>`
          })
          .join('')
        const rowsHtml = token.rows
          .map((row) => {
            const cells = row
              .map((cell) => {
                const text = this.parser.parseInline(cell.tokens)
                return `<td class="py-2.5 px-4 text-muted-foreground">${text}</td>`
              })
              .join('')
            return `<tr class="hover:bg-accent/20 transition-colors">${cells}</tr>`
          })
          .join('')
        return `<div class="my-6 overflow-x-auto rounded-xl border border-border shadow-xs"><table class="w-full text-left text-xs"><thead class="bg-muted/40 border-b border-border"><tr>${headerHtml}</tr></thead><tbody class="divide-y divide-border">${rowsHtml}</tbody></table></div>`
      },
      blockquote(token) {
        const body = this.parser.parse(token.tokens)
        return `<blockquote class="my-4 border-l-2 border-primary pl-4 italic text-xs text-muted-foreground">${body}</blockquote>`
      },
      link(token) {
        const text = this.parser.parseInline(token.tokens)
        const isExternal = token.href.startsWith('http://') || token.href.startsWith('https://')
        const extAttrs = isExternal ? ' target="_blank" rel="noreferrer"' : ''
        return `<a href="${token.href}" class="font-medium text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"${extAttrs}>${text}</a>`
      },
      hr() {
        return `<hr class="my-8 border-border" />`
      },
    },
  })

  return markedInstance
}

const defaultMarkedInstance = createMarkedInstance()

export function renderMarkdown(markdown: string): string {
  return defaultMarkedInstance.parse(markdown) as string
}

export function renderInlineMarkdown(markdown: string): string {
  return defaultMarkedInstance.parseInline(markdown) as string
}

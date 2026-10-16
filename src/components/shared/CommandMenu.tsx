import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import {
  ArrowRight,
  FileText,
  Moon,
  Search,
  Sun,
  X,
} from 'lucide-react'
import { useSearchIndex, type SearchItem } from '@/hooks/use-search-index'
import { useTheme } from '@/hooks/use-theme'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export interface CommandMenuProps {
  isOpen: boolean
  onClose: () => void
}

function CommandMenuContent({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const { search } = useSearchIndex()
  const { resolvedTheme, setTheme } = useTheme()

  const results = search(query)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => inputRef.current?.focus(), 50)

    return () => {
      document.body.style.overflow = ''
      clearTimeout(timer)
    }
  }, [])

  const handleSelect = (item: SearchItem) => {
    onClose()
    navigate(item.href)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex])
      }
    } else if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    }
  }

  const groupedResults = results.reduce<Record<string, SearchItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  let itemCounter = 0

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24">
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command search palette"
        className="relative z-50 w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl animate-in fade-in-0 zoom-in-95"
      >
        <div className="flex items-center border-b border-border px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground mr-3" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            onKeyDown={handleKeyDown}
            placeholder="Ketik nama komponen, dokumentasi, atau panduan..."
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          {query ? (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-muted-foreground hover:text-foreground"
              onClick={() => setQuery('')}
              aria-label="Clear query"
            >
              <X className="h-3.5 w-3.5" />
            </Button>
          ) : (
            <kbd className="pointer-events-none rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
              ESC
            </kbd>
          )}
        </div>

        <div className="max-h-[380px] overflow-y-auto p-2" role="listbox">
          {results.length === 0 ? (
            <div className="p-8 text-center text-xs text-muted-foreground">
              Tidak ada hasil dokumentasi ditemukan untuk "{query}".
            </div>
          ) : (
            Object.entries(groupedResults).map(([category, items]) => (
              <div key={category} className="mb-3 last:mb-0">
                <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {category}
                </p>
                <div className="space-y-0.5">
                  {items.map((item) => {
                    const currentIndex = itemCounter++
                    const isSelected = selectedIndex === currentIndex

                    return (
                      <div
                        key={item.id}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(currentIndex)}
                        className={cn(
                          'flex items-center justify-between rounded-lg px-2.5 py-2 text-xs transition-colors cursor-pointer',
                          isSelected
                            ? 'bg-primary text-primary-foreground shadow-xs'
                            : 'text-foreground hover:bg-accent/60',
                        )}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <FileText
                            className={cn(
                              'h-4 w-4 shrink-0',
                              isSelected ? 'text-primary-foreground' : 'text-muted-foreground',
                            )}
                          />
                          <div className="min-w-0">
                            <p className="font-medium truncate">{item.title}</p>
                            <p
                              className={cn(
                                'text-[11px] truncate',
                                isSelected
                                  ? 'text-primary-foreground/80'
                                  : 'text-muted-foreground',
                              )}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0 ml-2">
                          {item.badge ? (
                            <Badge
                              variant={isSelected ? 'secondary' : 'outline'}
                              className="px-1.5 py-0 text-[10px]"
                            >
                              {item.badge}
                            </Badge>
                          ) : null}
                          <ArrowRight
                            className={cn(
                              'h-3 w-3',
                              isSelected
                                ? 'text-primary-foreground opacity-100'
                                : 'text-muted-foreground opacity-0 group-hover:opacity-100',
                            )}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border bg-muted/40 px-4 py-2.5 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-background px-1 font-mono text-[9px]">
                ↑↓
              </kbd>
              Navigasi
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-background px-1 font-mono text-[9px]">
                ↵
              </kbd>
              Buka
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              {resolvedTheme === 'dark' ? (
                <>
                  <Sun className="h-3 w-3" />
                  Tema Terang
                </>
              ) : (
                <>
                  <Moon className="h-3 w-3" />
                  Tema Gelap
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  if (!isOpen) return null

  return <CommandMenuContent onClose={onClose} />
}

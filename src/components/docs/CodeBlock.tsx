import { useMemo } from 'react'
import { Check, Copy, FileCode2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { highlightCode } from '@/lib/syntax-highlighter'
import { cn } from '@/lib/utils'

export interface CodeBlockProps {
  code: string
  language?: string
  fileName?: string
  className?: string
}

export function CodeBlock({
  code,
  language = 'tsx',
  fileName,
  className,
}: CodeBlockProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  const highlighted = useMemo(
    () => highlightCode(code.trim(), language),
    [code, language],
  )

  return (
    <div
      className={cn(
        'group relative my-4 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 shadow-xs',
        className,
      )}
    >
      {fileName ? (
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-200/50 dark:bg-zinc-900/60 px-4 py-2 text-xs">
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <FileCode2 className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono">{fileName}</span>
          </div>
          <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-500 uppercase">
            {language}
          </span>
        </div>
      ) : null}

      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => copyToClipboard(code.trim())}
          className="absolute right-3 top-3 h-7 w-7 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors z-10"
          aria-label="Copy code to clipboard"
        >
          {isCopied ? (
            <Check className="h-3.5 w-3.5 text-emerald-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>

        <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed">
          <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      </div>
    </div>
  )
}


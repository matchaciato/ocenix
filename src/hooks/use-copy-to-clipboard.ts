import { useCallback, useState } from 'react'

export function useCopyToClipboard(timeout = 2000): {
  isCopied: boolean
  copyToClipboard: (value: string) => Promise<boolean>
} {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = useCallback(
    async (value: string): Promise<boolean> => {
      if (!navigator?.clipboard) {
        return false
      }

      try {
        await navigator.clipboard.writeText(value)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), timeout)
        return true
      } catch {
        setIsCopied(false)
        return false
      }
    },
    [timeout],
  )

  return { isCopied, copyToClipboard }
}

import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '@/context/theme-context'
import type { ResolvedTheme, Theme, ThemeProviderProps } from '@/types/theme.types'

function getStoredTheme(key: string, fallback: Theme): Theme {
  try {
    const item = localStorage.getItem(key)
    if (item === 'light' || item === 'dark' || item === 'system') {
      return item
    }
  } catch (e) {
    void e
    return fallback
  }
  return fallback
}

function setStoredTheme(key: string, theme: Theme): void {
  try {
    localStorage.setItem(key, theme)
  } catch (e) {
    void e
  }
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'ocenix-ui-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() =>
    getStoredTheme(storageKey, defaultTheme),
  )

  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const resolvedTheme: ResolvedTheme =
    theme === 'system' ? systemTheme : theme

  useEffect(() => {
    const root = document.documentElement
    if (resolvedTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [resolvedTheme])

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setStoredTheme(storageKey, newTheme)
      setThemeState(newTheme)
    },
    [storageKey],
  )

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [theme, resolvedTheme, setTheme],
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

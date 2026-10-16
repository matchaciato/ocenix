import { createContext, useEffect, useMemo, useState } from 'react'
import type { ResolvedTheme, Theme, ThemeContextValue, ThemeProviderProps } from '@/types/theme.types'

const initialState: ThemeContextValue = {
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => null,
}

export const ThemeContext = createContext<ThemeContextValue>(initialState)

function getStoredTheme(key: string, fallback: Theme): Theme {
  try {
    const item = localStorage.getItem(key)
    if (item === 'light' || item === 'dark' || item === 'system') {
      return item
    }
  } catch {
    return fallback
  }
  return fallback
}

function setStoredTheme(key: string, theme: Theme): void {
  try {
    localStorage.setItem(key, theme)
  } catch {}
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

  const setTheme = (newTheme: Theme) => {
    setStoredTheme(storageKey, newTheme)
    setThemeState(newTheme)
  }

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [theme, resolvedTheme],
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

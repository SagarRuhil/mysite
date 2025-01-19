'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { themes, ThemeType } from '@/lib/theme-config'

type ThemeContextType = {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('cyberpunk')

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', themes[theme].primary)
    document.documentElement.style.setProperty('--secondary', themes[theme].secondary)
    document.documentElement.style.setProperty('--accent', themes[theme].accent)
    document.documentElement.style.setProperty('--background', themes[theme].background)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}


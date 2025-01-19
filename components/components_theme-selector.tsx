'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './theme-provider'
import { Moon, Sun, Zap, Palette, Cloud } from 'lucide-react'

const themes = [
  { name: 'cyberpunk', icon: <Zap className="w-4 h-4" />, label: 'Cyberpunk' },
  { name: 'retrowave', icon: <Sun className="w-4 h-4" />, label: 'Retrowave' },
  { name: 'future', icon: <Moon className="w-4 h-4" />, label: 'Future' },
  { name: 'neon', icon: <Palette className="w-4 h-4" />, label: 'Neon' },
  { name: 'pastel', icon: <Cloud className="w-4 h-4" />, label: 'Pastel' },
]

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <motion.button
        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {themes.find(t => t.name === theme)?.icon || <Sun className="w-4 h-4" />}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
        >
          <div className="py-1">
            {themes.map((t) => (
              <button
                key={t.name}
                className={`${
                  theme === t.name ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors`}
                onClick={() => {
                  setTheme(t.name as any)
                  setIsOpen(false)
                }}
              >
                <span className="mr-3">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}


'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-gray-900 dark:text-white"
          whileHover={{ scale: 1.05 }}
        >
          Sagar Sunil
        </motion.div>
        <ul className="flex space-x-4">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a href={`#${item.toLowerCase()}`} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {item}
              </a>
            </motion.li>
          ))}
          <motion.button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </motion.button>
        </ul>
      </nav>
    </motion.header>
  )
}


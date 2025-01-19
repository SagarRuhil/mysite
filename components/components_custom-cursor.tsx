'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - 8,
        y: position.y - 8,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <div className="w-full h-full rounded-full bg-white" />
      <div 
        className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full"
        style={{
          opacity: isPointer ? 1 : 0,
          transition: 'opacity 0.2s',
        }}
      />
    </motion.div>
  )
}


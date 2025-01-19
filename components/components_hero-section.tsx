'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const DynamicThreeDScene = dynamic(() => import('./three-d-scene'), { ssr: false })

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030014]" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00fff0] to-[#ff00d4]">
              Hello, I'm Sagar
            </h1>
            <div className="text-xl md:text-2xl mb-8">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Creative Technologist',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#00fff0]"
              />
            </div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00fff0] to-[#ff00d4] text-black font-bold hover:scale-105 transition-transform"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-[#00fff0] text-[#00fff0] font-bold hover:bg-[#00fff0] hover:text-black transition-colors"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            {mounted && <DynamicThreeDScene modelPath="/3d-models/laptop.glb" scale={2} rotation={[0, Math.PI / 4, 0]} />}
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-[#00fff0] rounded-full p-1"
        >
          <motion.div
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1 bg-[#00fff0] rounded-full mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}


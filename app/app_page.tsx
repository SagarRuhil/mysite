'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Navigation from '@/components/navigation'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Footer from '@/components/footer'
import { useTheme } from '@/components/theme-provider'
import ParallaxText from '@/components/parallax-text'

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20081231_213539.jpg-Nk6nnka3mWd4vFR5Uq4IA8qq6Rm1kn.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snapchat-1974946576.jpg-uXpK5A7XXN8fxRcYJnS4aBRwqlL3hZ.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20230527_185746_454.jpg-UPHFAINzQ7pS48set8r5Hr5AxJu7Ss.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709192847918.jpg-qRLiReGtIO70U1ZedFbJUuRGCrDpFW.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snapchat-1901923267.jpg-ZiPSbcyCLzL1jhRa4uLVuObVRuhXv4.jpeg"
]

function hexToRgba(hex: string, alpha: number = 1): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const { theme } = useTheme()
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -200])
  
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
    }> = []

    const colors = [
      getComputedStyle(document.documentElement).getPropertyValue('--primary').trim(),
      getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim(),
      getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
    ].map(color => color.startsWith('#') ? color : `#${color}`)

    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 2 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x = -particle.velocity.x
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y = -particle.velocity.y
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          particle.radius,
          particle.x,
          particle.y,
          particle.radius * 2
        )
        gradient.addColorStop(0, hexToRgba(particle.color, 0.3))
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = gradient
        ctx.fill()
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [theme])

  return (
    <>
      <Navigation />
      <main className="min-h-screen relative overflow-hidden">
        <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
        
        {/* Background with image transition */}
        <motion.div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          {images.map((img, index) => (
            <motion.div
              key={img}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImage === index ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen">
          <div className="container mx-auto px-4 h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
                style={{ y: y1 }}
              >
                <div className="relative">
                  <motion.div
                    className="relative w-80 h-80 mx-auto overflow-hidden rounded-full border-4 border-[var(--primary)]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={images[currentImage] || "/placeholder.svg"}
                      alt="Profile"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        '0 0 20px var(--primary)',
                        '0 0 40px var(--primary)',
                        '0 0 20px var(--primary)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Right Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2 text-right space-y-6"
                style={{ y: y2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-block"
                >
                  <h2 className="text-lg text-[var(--primary)] font-mono">Hello, I'm</h2>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                    Sagar Sunil
                  </span>
                </motion.h1>

                <motion.div
                  className="text-xl md:text-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
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
                    className="text-[var(--primary)]"
                  />
                </motion.div>

                <motion.div
                  className="flex gap-4 justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <motion.a
                    href="/contact"
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-black font-bold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.a>
                  <motion.a
                    href="/projects"
                    className="px-8 py-3 rounded-full border-2 border-[var(--primary)] text-[var(--primary)]"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'var(--primary)',
                      color: 'black',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects
                  </motion.a>
                </motion.div>

                {/* Tech Stack Icons */}
                <motion.div
                  className="flex gap-6 justify-end items-center mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  {['react', 'nodejs', 'python', 'javascript'].map((tech, index) => (
                    <motion.img
                      key={tech}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                      alt={tech}
                      className="w-8 h-8"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <ParallaxText baseVelocity={-2}>Full-Stack Developer • Creative Technologist • UI/UX Enthusiast •</ParallaxText>
        <ParallaxText baseVelocity={2}>React • Node.js • Python • JavaScript • TypeScript • Next.js •</ParallaxText>

      </main>
      <Footer />
    </>
  )
}


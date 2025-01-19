'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from '@/components/navigation'
import { Code, Globe, Cpu, Lightbulb, Camera, Palette, Music } from 'lucide-react'
import Footer from '@/components/footer'
import GlowingParticles from '@/components/glowing-particles'

export default function About() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <>
      <Navigation />
      <GlowingParticles />
      <main className="min-h-screen pt-20 bg-[var(--background)] relative overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="relative w-full h-[600px] rounded-lg overflow-hidden bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ scale }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-[var(--primary)] rounded-lg"
                  animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                About Me
              </h1>
              <p className="text-lg text-gray-300">
                As a passionate software developer specializing in web technologies, I bring a unique blend of technical expertise and creative problem-solving to every project. With a strong foundation in both front-end and back-end development, I'm dedicated to crafting efficient, scalable, and user-centric digital solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="p-6 rounded-lg border border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Code className="w-8 h-8 text-[var(--primary)] mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-[var(--primary)]">Full-Stack Development</h3>
                  <p className="text-gray-300">Proficient in both front-end and back-end technologies, creating seamless, end-to-end solutions.</p>
                </motion.div>

                <motion.div
                  className="p-6 rounded-lg border border-[var(--secondary)] hover:bg-[var(--secondary)]/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Globe className="w-8 h-8 text-[var(--secondary)] mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-[var(--secondary)]">Web Technologies</h3>
                  <p className="text-gray-300">Experienced in modern frameworks and libraries like React, Next.js, and Node.js.</p>
                </motion.div>

                <motion.div
                  className="p-6 rounded-lg border border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Cpu className="w-8 h-8 text-[var(--accent)] mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-[var(--accent)]">Software Engineering</h3>
                  <p className="text-gray-300">Strong understanding of software design patterns, algorithms, and data structures.</p>
                </motion.div>

                <motion.div
                  className="p-6 rounded-lg border border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Lightbulb className="w-8 h-8 text-[var(--primary)] mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-[var(--primary)]">Innovation</h3>
                  <p className="text-gray-300">Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.</p>
                </motion.div>
              </div>

              <p className="text-lg text-gray-300">
                My journey in tech is driven by a passion for creating intuitive, efficient, and impactful digital experiences. I'm always eager to take on new challenges and contribute to innovative projects that push the boundaries of what's possible in web development.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              My Creative Side
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              <motion.div
                className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Palette className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              <motion.div
                className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Music className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              My Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]"></div>
              <div className="space-y-12">
                {[2018, 2020, 2022, 2024].map((year, index) => (
                  <motion.div
                    key={year}
                    className="flex items-center"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                      <h3 className="text-2xl font-bold text-[var(--primary)]">{year}</h3>
                      <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="w-4 h-4 bg-[var(--accent)] rounded-full z-10"></div>
                    {index % 2 !== 0 && (
                      <div className="w-1/2 pl-8">
                        <h3 className="text-2xl font-bold text-[var(--primary)]">{year}</h3>
                        <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}


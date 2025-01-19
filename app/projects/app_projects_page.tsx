'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Navigation from '@/components/navigation'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import Footer from '@/components/footer'

const projects = [
  {
    title: "Random Password Generator",
    description: "A secure password generator with customizable options for length and character types. Built with Python and modern cryptography principles.",
    tech: ["Python", "Cryptography", "UI/UX"],
    github: "https://github.com/yourusername/password-generator",
    live: "https://password-generator.demo",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Advance To-Do List",
    description: "Feature-rich task management application with theme switching, categories, and local storage persistence.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/advanced-todo",
    live: "https://todo.demo",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Profile Card",
    description: "Interactive profile card component with 3D animations and theme customization options.",
    tech: ["React", "Three.js", "Framer Motion"],
    github: "https://github.com/yourusername/profile-card",
    live: "https://profile-card.demo",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Advance Calculator",
    description: "Scientific calculator with dark/light themes and advanced mathematical functions.",
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/calculator",
    live: "https://calculator.demo",
    color: "from-orange-500 to-red-500"
  }
]

export default function Projects() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 bg-[var(--background)]">
        <div className="container mx-auto px-4 py-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              Featured Projects
            </span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              Project Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ExternalLink className="w-12 h-12 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-300, 300], [15, -15])
  const rotateY = useTransform(x, [-300, 300], [-15, 15])

  const springConfig = { damping: 25, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.x + rect.width / 2
    const centerY = rect.y + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        perspective: 2000,
      }}
    >
      <motion.div
        className="relative rounded-xl overflow-hidden"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r w-full h-full opacity-80" 
          style={{ backgroundImage: `linear-gradient(to right, var(--primary), var(--secondary))` }} 
        />
        
        <div className="relative p-6 backdrop-blur-sm">
          <div className="bg-black/40 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-white/80 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-white/10 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}


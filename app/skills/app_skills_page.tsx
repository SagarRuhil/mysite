'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import { Braces, Database, Layout, Server, Code, Globe, Cpu, Lightbulb, PenTool, Gamepad2, Globe2, WorkflowIcon as Wordpress, Workflow, Beaker } from 'lucide-react'
import Footer from '@/components/footer'

const skills = {
  "Programming": {
    icon: <Braces className="w-6 h-6" />,
    items: [
      { name: "Problem Solving", level: 90 },
      { name: "Algorithm Design", level: 85 },
      { name: "Data Structures", level: 88 },
      { name: "Object-Oriented Programming", level: 92 }
    ]
  },
  "Frontend Development": {
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "Responsive Design", level: 88 },
      { name: "UI/UX Principles", level: 85 },
      { name: "State Management", level: 87 },
      { name: "Performance Optimization", level: 84 }
    ]
  },
  "Backend Development": {
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "API Design", level: 86 },
      { name: "Server-side Rendering", level: 83 },
      { name: "Authentication & Authorization", level: 85 },
      { name: "Microservices Architecture", level: 80 }
    ]
  },
  "Databases": {
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "Database Design", level: 88 },
      { name: "Query Optimization", level: 85 },
      { name: "Data Modeling", level: 87 },
      { name: "NoSQL Concepts", level: 82 }
    ]
  }
}

const techStack = [
  { name: "React", icon: <Code className="w-6 h-6" /> },
  { name: "Node.js", icon: <Server className="w-6 h-6" /> },
  { name: "Python", icon: <Beaker className="w-6 h-6" /> },
  { name: "TypeScript", icon: <Code className="w-6 h-6" /> },
  { name: "Figma", icon: <PenTool className="w-6 h-6" /> },
  { name: "Unreal Engine", icon: <Gamepad2 className="w-6 h-6" /> },
  { name: "WiX", icon: <Globe2 className="w-6 h-6" /> },
  { name: "WordPress", icon: <Wordpress className="w-6 h-6" /> },
  { name: "Webflow", icon: <Workflow className="w-6 h-6" /> },
  { name: "pandas", icon: <Database className="w-6 h-6" /> },
  { name: "Hibernate", icon: <Database className="w-6 h-6" /> },
  { name: "Spring Boot", icon: <Cpu className="w-6 h-6" /> },
]

export default function Skills() {
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
              Skills & Expertise
            </span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {Object.entries(skills).map(([category, { icon, items }], index) => (
              <SkillCategory
                key={category}
                category={category}
                icon={icon}
                items={items}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                    {tech.icon}
                  </div>
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              My Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Code className="w-12 h-12" />, title: "Clean Code", description: "Writing maintainable and efficient code" },
                { icon: <Globe className="w-12 h-12" />, title: "Responsive Design", description: "Creating seamless experiences across devices" },
                { icon: <Cpu className="w-12 h-12" />, title: "Performance", description: "Optimizing for speed and efficiency" },
                { icon: <Lightbulb className="w-12 h-12" />, title: "Innovation", description: "Embracing new technologies and methodologies" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="mb-4 text-[var(--primary)]">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[var(--secondary)]">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
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

function SkillCategory({ category, icon, items, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      />
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
          {icon}
        </div>
        <h2 className="text-xl font-bold">{category}</h2>
      </div>

      <div className="space-y-4">
        {items.map((skill: any, skillIndex: number) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
            className="relative"
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium flex items-center">
                {skill.name}
              </span>
              <span className="text-[var(--primary)]">{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}


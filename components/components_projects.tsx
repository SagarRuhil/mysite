'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Random Password Generator',
    description: 'Created a Random Password Generator using Python, generating passwords with various character types.',
    tech: ['Python'],
    image: '/project1.jpg',
  },
  {
    title: 'Advance To-Do List',
    description: 'Developed a To-Do List application with theme options to change the page design.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/project2.jpg',
  },
  {
    title: 'Profile Card',
    description: 'Created a flipping card component for quick profile viewing, with theme changing functionality.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    image: '/project3.jpg',
  },
  {
    title: 'Advance Calculator',
    description: 'Built a calculator with standard and scientific modes, featuring dark and light themes.',
    tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
    image: '/project4.jpg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


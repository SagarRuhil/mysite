'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Bluestock',
    position: 'Software Developer Intern',
    period: 'November 2024 - Present',
    description: 'Developed automated unit testing services and incorporated scripts using Python and PowerShell.',
  },
  {
    company: 'CodXo',
    position: 'Web Developer Intern',
    period: 'Aug 2024 – October 2024',
    description: 'Collaborated on client projects, creating visually appealing and user-friendly websites.',
  },
  {
    company: 'Future Inter',
    position: 'Web Developer Intern',
    period: 'June 2024 – August 2024',
    description: 'Assisted in developing a mobile application using Dart and Flutter framework.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{exp.position}</h3>
              <h4 className="text-lg font-medium mb-2 text-blue-500">{exp.company}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.period}</p>
              <p className="text-gray-700 dark:text-gray-200">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


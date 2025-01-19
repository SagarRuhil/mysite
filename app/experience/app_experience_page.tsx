'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/navigation'
import { Briefcase, Calendar, ChevronRight, Award, Book } from 'lucide-react'
import Image from 'next/image'
import Footer from '@/components/footer'

const experiences = [
  {
    company: "Bluestock",
    role: "Software Developer Intern",
    period: "November 2024 - Present",
    description: "Developed automated unit testing services and incorporated scripts using Python and PowerShell.",
    skills: ["Python", "PowerShell", "Jenkins", "Unit Testing"],
  },
  {
    company: "CodXo",
    role: "Web Developer Intern",
    period: "Aug 2024 – October 2024",
    description: "Collaborated with clients or project managers to understand requirements and translate them into functional websites.",
    description: "Created visually appealing and user-friendly designs that are optimized for speed and performance.",
    description: "Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.",
    description: "Testing, debugging and fixing issues to enhance the overall user experience."
    skills: ["React", "Node.js", "Git", "CSS"],
  },
   {
    company: "Future Intern",
    role: "Web Developer Intern",
    period: "June 2024 – Aug 2024",
"Assisted in development of the front end of a mobile application for iOS/Android using Dart and the Flutter framework.",
"Worked with Google Firebase to manage user inputted data across multiple platforms including web and mobile apps.",
"Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.",
"Utilized Android Studio as a development environment in order to visualize the application in both iOS and Android",
    skills: ["React", "Node.js", "Git", "CSS"],
  },
]

const simulations = [
  {
    title: "Accenture North America Data Analytics and Visualization Job Simulation",
    date: "January 2025",
    description: "Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture.",
    achievements: [
      "Cleaned, modelled and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions.",
      "Prepared a PowerPoint deck and video presentation to communicate key insights for the client and internal stakeholders."
    ]
  }
]

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(0)

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
              Professional Journey
            </span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedExp === index 
                      ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-black'
                      : 'hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedExp(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      selectedExp === index ? 'bg-black/20' : 'bg-[var(--primary)]/20'
                    }`}>
                      <Image src={exp.icon} alt={exp.company} width={24} height={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">{exp.company}</h3>
                      <p className="text-sm opacity-80">{exp.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-lg -z-10" />
              
              <motion.div
                key={selectedExp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-lg backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                  {experiences[selectedExp].role}
                </h2>
                <p className="text-lg mb-6">{experiences[selectedExp].company}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[var(--primary)]">Key Responsibilities</h3>
                    <p>{experiences[selectedExp].description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[var(--primary)]">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {experiences[selectedExp].skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 rounded-full text-sm border border-[var(--accent)] text-[var(--accent)]"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.h2
            className="text-3xl font-bold text-center my-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              Professional Simulations
            </span>
          </motion.h2>

          <div className="space-y-8">
            {simulations.map((sim, index) => (
              <motion.div
                key={sim.title}
                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Award className="w-8 h-8 text-[var(--primary)]" />
                  <h3 className="text-xl font-bold">{sim.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--secondary)] mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{sim.date}</span>
                </div>
                <p className="mb-4">{sim.description}</p>
                <ul className="space-y-2">
                  {sim.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[var(--primary)] mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}


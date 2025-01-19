'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import { School, Book, Award, Calendar, Trophy } from 'lucide-react'
import Footer from '@/components/footer'

const education = [
  {
    degree: "Master's in Computer Applications",
    institution: "Chandigarh University",
    period: "2024 - Present",
    description: "Focusing on advanced software development techniques, AI, and modern web technologies.",
    icon: <School className="w-8 h-8" />,
  },
  {
    degree: "Bachelor's in Computer Applications",
    institution: "Maharishi Dayanand University",
    period: "2024",
    description: "Gained a strong foundation in computer science fundamentals and software development.",
    icon: <Book className="w-8 h-8" />,
  },
  {
    degree: "Class 12th Science (Non-Medical)",
    institution: "Jupiter Public Sr Sec School",
    period: "2018",
    description: "Completed higher secondary education with a focus on science and mathematics.",
    icon: <School className="w-8 h-8" />,
  },
]

const certifications = [
  { name: "Introduction to Artificial Intelligence", issuer: "LinkedIn", year: "2024" },
  { name: "Introduction to Generative AI", issuer: "Google Cloud Skill Boost", year: "2024" },
  { name: "Introduction to Responsible AI", issuer: "Google Cloud Skill Boost", year: "2024" },
  { name: "Data Analytics using PowerBI", issuer: "Let's Upgrade", year: "2024" },
  { name: "Introduction to Generative AI Fundamentals", issuer: "Google Cloud Skill Boost", year: "2024" },
  { name: "Introduction to Programming with Java", issuer: "Udemy", year: "2024" },
  { name: "Object Oriented Programming with C++", issuer: "Udemy", year: "2024" },
  { name: "CSS/JavaScript Complete Course", issuer: "Udemy", year: "2024" },
  { name: "Pandas For Absolute Beginners", issuer: "Udemy", year: "2024" },
]

const competitions = [
  {
    name: "GSSoc Hackathon",
    description: "Contributed to open-source projects and collaborated with developers worldwide.",
    period: "Autumn 2024",
  },
  {
    name: "UI/UX Hackathon: Designing the Future",
    description: "Participated in designing innovative user interfaces for future technologies.",
    period: "Summer 2024",
    organizer: "UnStop",
  },
]

export default function Education() {
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
              Education, Certifications & Competitions
            </span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">Academic Journey</h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    className="relative pl-12 pb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="absolute left-0 top-0 p-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                      {edu.icon}
                    </div>
                    <div className="border-l-2 border-[var(--primary)] pl-8 pb-8">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-[var(--secondary)] mb-2">{edu.institution}</p>
                      <p className="text-gray-400 mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" /> {edu.period}
                      </p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[var(--secondary)]">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="p-6 rounded-lg bg-white/5 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Award className="w-8 h-8 text-[var(--accent)] mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                    <p className="text-gray-400 flex items-center mt-2">
                      <Calendar className="w-4 h-4 mr-2" /> {cert.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">Competitions</h2>
            <div className="space-y-8">
              {competitions.map((comp, index) => (
                <motion.div
                  key={comp.name}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Trophy className="w-8 h-8 text-[var(--accent)]" />
                    <div>
                      <h3 className="text-xl font-bold">{comp.name}</h3>
                      <p className="text-[var(--secondary)]">{comp.organizer}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">{comp.description}</p>
                  <p className="text-gray-400 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" /> {comp.period}
                  </p>
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


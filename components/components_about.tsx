'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <motion.img
            src="/profile-picture.jpg"
            alt="Sagar Sunil"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <div className="max-w-md text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate software developer with a strong foundation in web development and a keen interest in emerging technologies. Currently pursuing my Master's in Computer Applications, I bring hands-on experience from internships at Bluestock, CodXo, and Future Inter.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My goal is to create innovative, user-friendly solutions that make a positive impact. I'm always eager to learn and take on new challenges in the ever-evolving world of technology.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}


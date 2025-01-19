'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[600px]">
                <motion.img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-08%20182416-eL7ku9d0hcPNyJHYR099liI7etq8fv.png"
                  alt="About Sagar"
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    filter: 'grayscale(100%)',
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00fff0] to-[#ff00d4] mix-blend-color-dodge opacity-30"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#00fff0] rounded-lg"
                animate={{
                  x: [0, 10, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00fff0] to-[#ff00d4]">
                About Me
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate software developer with a strong foundation in web development
                  and a keen interest in emerging technologies. Currently pursuing my Master's
                  in Computer Applications, I bring hands-on experience from internships at
                  Bluestock, CodXo, and Future Inter.
                </p>
                <p>
                  My journey in technology has been driven by curiosity and a desire to create
                  innovative solutions. I specialize in building responsive web applications
                  and have a deep understanding of modern development frameworks and tools.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <motion.div
                    className="p-4 border border-[#00fff0] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-xl font-bold text-[#00fff0] mb-2">Education</h3>
                    <p>Master's in Computer Applications</p>
                    <p className="text-sm">Chandigarh University</p>
                  </motion.div>
                  <motion.div
                    className="p-4 border border-[#ff00d4] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-xl font-bold text-[#ff00d4] mb-2">Experience</h3>
                    <p>3+ Internships</p>
                    <p className="text-sm">Software Development</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030014] to-transparent" />
    </section>
  )
}


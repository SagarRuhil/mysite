'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import { Github, Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react'
import Footer from '@/components/footer'

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-6 h-6" />,
    url: 'https://github.com/yourusername',
    color: 'hover:text-gray-300'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6" />,
    url: 'https://linkedin.com/in/yourusername',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-6 h-6" />,
    url: 'https://twitter.com/yourusername',
    color: 'hover:text-blue-500'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    url: 'https://instagram.com/yourusername',
    color: 'hover:text-pink-500'
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-6 h-6" />,
    url: 'https://facebook.com/yourusername',
    color: 'hover:text-blue-600'
  }
]

export default function Contact() {
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
              Get in Touch
            </span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  ></textarea>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-black font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-lg bg-white/5">
                    <Mail className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-white/60">sagarruhil999@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-lg bg-white/5">
                    <Phone className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-white/60">9996368803</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-lg bg-white/5">
                    <MapPin className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-white/60">Rohtak, Haryana</p>
                  </div>
                </motion.div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-white/5 ${social.color} transition-colors`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}


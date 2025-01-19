import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">Sagar Sunil</h3>
            <p className="text-sm text-gray-400">Full-Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--secondary)] transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-[var(--accent)] transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Sagar Sunil. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


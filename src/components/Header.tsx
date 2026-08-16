import ProfileImg from '../assets/img/profile.jpg'
import { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-gold-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center gap-4">
          <img 
            src={ProfileImg} 
            alt="Sam Jefferson Mogato" 
            className="w-16 h-16 rounded-full object-cover border-2 border-gold-500 shadow-md shadow-gold-500/20" 
          />
          <div>
            <h1 className="text-2xl font-bold text-white">Sam Jefferson Mogato</h1>
            <p className="text-gray-400 text-sm">
              Software Developer & Game Developer
            </p>
            <p className="text-gold-400 text-xs mt-1">
              Iloilo City, Philippines
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a
            href="#about"
            className="text-gray-400 hover:text-gold-400 transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-gray-400 hover:text-gold-400 transition-colors font-medium"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-gold-400 transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-400 hover:text-gold-400 transition-colors font-medium"
          >
            Skills
          </a>
          <a
            href="#education"
            className="text-gray-400 hover:text-gold-400 transition-colors font-medium"
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-gold-400 transition-colors font-medium"
          >
            Contact
          </a>
          <a
            href="/Mogato_cv@latest.pdf"
            download
            className="px-4 py-2 border border-gold-500/30 text-gold-400 font-semibold rounded-lg hover:bg-gold-500/10 transition-all duration-300 text-sm"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
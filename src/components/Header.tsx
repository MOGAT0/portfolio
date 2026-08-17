import ProfileImg from '../assets/img/profile.jpg'
import { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-gold-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between py-6 px-4 md:px-0">
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

        <button 
          className="md:hidden text-gray-400 hover:text-gold-400 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

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
            href="/public/Mogato_cv@latest.pdf"
            download
            className="px-4 py-2 border border-gold-500/30 text-gold-400 font-semibold rounded-lg hover:bg-gold-500/10 transition-all duration-300 text-sm"
          >
            CV
          </a>
        </nav>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-gold-500/20 backdrop-blur-md flex flex-col items-center py-6 gap-6 shadow-xl">
          <a href="#about" onClick={handleMobileNavClick} className="text-gray-400 hover:text-gold-400 transition-colors font-medium text-lg">About</a>
          <a href="#experience" onClick={handleMobileNavClick} className="text-gray-400 hover:text-gold-400 transition-colors font-medium text-lg">Experience</a>
          <a href="#projects" onClick={handleMobileNavClick} className="text-gray-400 hover:text-gold-400 transition-colors font-medium text-lg">Projects</a>
          <a href="#skills" onClick={handleMobileNavClick} className="text-gray-400 hover:text-gold-400 transition-colors font-medium text-lg">Skills</a>
          <a href="#education" onClick={handleMobileNavClick} className="text-gray-400 hover:text-gold-400 transition-colors font-medium text-lg">Education</a>
          <a href="#contact" onClick={handleMobileNavClick} className="text-gray-400 hover:text-gold-400 transition-colors font-medium text-lg">Contact</a>
          <a
            href="/public/Mogato_cv@latest.pdf"
            download
            onClick={handleMobileNavClick}
            className="px-6 py-2 border border-gold-500/30 text-gold-400 font-semibold rounded-lg hover:bg-gold-500/10 transition-all duration-300"
          >
            CV
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
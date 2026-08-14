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
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-bold text-2xl text-black shadow-lg shadow-gold-500/20">
            SJ
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Sam Jefferson Mogato</h1>
            <p className="text-gray-400 text-sm">
              Software Developer & Indie Game Developer 
            </p>
            <p className="text-gold-400 text-xs mt-1">
              22 years old · Philippines
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a
            href="#about"
            className="text-gray-400 hover:text-gold-400 transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-400 hover:text-gold-400 transition-colors font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-gold-400 transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-gold-400 transition-colors font-medium"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
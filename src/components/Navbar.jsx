import { useState } from 'react'

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 glass border-b">
      <style>{`
        html.dark nav a {
          color: white;
        }
        html.dark nav a:hover {
          color: rgb(59, 130, 246);
        }
        html.dark nav .text-gray-700 {
          color: white;
        }
        html.dark nav .text-gray-900 {
          background-color: white;
        }
        html.dark nav ul {
          background-color: rgb(15, 23, 42);
        }
        html.dark nav button span {
          background-color: white;
        }
        html.dark nav button:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
      <div className="container flex items-center justify-between h-20">
        <div className="flex-shrink-0">
          <a href="#home" className="text-2xl font-bold gradient-text">
            Portfolio
          </a>
        </div>
        
        <ul className={`fixed md:static top-20 md:top-0 left-0 md:left-auto right-0 md:right-auto flex flex-col md:flex-row gap-0 md:gap-8 bg-white md:bg-transparent ${isMenuOpen ? '' : 'hidden md:flex'} w-full md:w-auto py-8 md:py-0 px-4 md:px-0 items-center`}>
          <li><a href="#home" className="nav-link text-lg md:text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2 md:py-0" onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" className="nav-link text-lg md:text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2 md:py-0" onClick={handleNavClick}>About</a></li>
          <li><a href="#skills" className="nav-link text-lg md:text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2 md:py-0" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#projects" className="nav-link text-lg md:text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2 md:py-0" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#resume" className="nav-link text-lg md:text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2 md:py-0" onClick={handleNavClick}>Resume</a></li>
          <li><a href="#contact" className="nav-link text-lg md:text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors py-2 md:py-0" onClick={handleNavClick}>Contact</a></li>
          <li>
            <button 
              className="text-2xl p-2 rounded-lg hover:bg-gray-200 transition-colors" 
              onClick={toggleDarkMode} 
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
        
        <button 
          className="md:hidden flex flex-col gap-1.5 w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
    </nav>
  )
}

import './styles/globals.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme')
    let isDark = false
    
    if (savedTheme) {
      isDark = savedTheme === 'dark'
    } else {
      // Check system preference
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }
    
    setIsDarkMode(isDark)
    updateDOMTheme(isDark)
  }, [])

  const updateDOMTheme = (isDark) => {
    const html = document.documentElement
    if (isDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  const toggleDarkMode = () => {
    const newIsDark = !isDarkMode
    setIsDarkMode(newIsDark)
    updateDOMTheme(newIsDark)
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App

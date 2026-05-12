import { useState, useEffect, useRef } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import BackgroundAnimation from './components/BackgroundAnimation'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Swimming from './components/sections/Swimming'

function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const cursorRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (loading) return

    const onMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }
    const onScroll = () => setScrolled(window.scrollY > 60)

    document.addEventListener('mousemove', onMove)
    window.addEventListener('scroll', onScroll)

    const reveals = document.querySelectorAll('.reveal')
    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
    )
    reveals.forEach(el => revealObs.observe(el))

    const sections = document.querySelectorAll('section[id]')
    const sectionObs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.35 }
    )
    sections.forEach(s => sectionObs.observe(s))

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      revealObs.disconnect()
      sectionObs.disconnect()
    }
  }, [loading])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  if (loading) return <LoadingScreen />

  return (
    <>
    <BackgroundAnimation theme={theme} />
    <div className="site-wrapper">
      <div ref={cursorRef} className="cursor-spotlight" />
      <div className="grain-overlay" />
      <Navbar
        activeSection={activeSection}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />
      <MobileMenu open={menuOpen} setOpen={setMenuOpen} />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Swimming />
      </main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <span className="font-mono text-muted">© 2025 Hudson Chung</span>
          <a
            href="mailto:hudsonch@uchicago.edu"
            className="font-mono text-muted hover-accent"
            style={{ textDecoration: 'none' }}
          >
            hudsonch@uchicago.edu
          </a>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App

import { useState, useEffect, useRef } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Swimming } from './components/sections/Swimming'
import { Experience } from './components/sections/Experience'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [currentSection, setCurrentSection] = useState('home')
    const [isScrolling, setIsScrolling] = useState(false)
    const indicatorRef = useRef(null)
    const labelRef = useRef(null)

    useEffect(() => {
        const sections = document.querySelectorAll('section')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 }
        )

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section)
            })
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true)
            const timeout = setTimeout(() => setIsScrolling(false), 150)
            return () => clearTimeout(timeout)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const sectionPositions = {
            home: document.getElementById('home')?.offsetTop || 0,
            about: document.getElementById('about')?.offsetTop || 0,
            'experience': document.getElementById('experience')?.offsetTop || 0,
            projects: document.getElementById('projects')?.offsetTop || 0,
            swimming: document.getElementById('swimming')?.offsetTop || 0
        }
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const indicatorHeight = window.innerHeight - 80

        if (indicatorRef.current && labelRef.current && totalHeight > 0) {
            const position = (sectionPositions[currentSection] / totalHeight) * indicatorHeight
            indicatorRef.current.style.transform = `translateY(${position}px)`
            labelRef.current.style.transform = `translateY(${position}px)`
            labelRef.current.textContent = currentSection.charAt(0).toUpperCase() + currentSection.slice(1)
        }
    }, [currentSection])

    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            <div className={`min-h-screen transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-[#FAFAFA] text-[#1A1A1A] relative`}>
                {/* Modern Scroll Indicator */}
                <div className={`vertical-line hidden lg:block transition-opacity duration-300 ${isScrolling ? 'opacity-50' : 'opacity-100'}`}>
                    <div className="indicator" ref={indicatorRef}></div>
                    <div className="section-label" ref={labelRef}></div>
                </div>
                
                {/* Navigation */}
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                
                {/* Main Content */}
                <main className="relative">
                    <Home />
                    <About />
                    <Experience />
                    <Projects />
                    <Swimming />
                </main>
            </div>
        </>
    )
}

export default App

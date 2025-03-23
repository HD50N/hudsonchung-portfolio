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
        const sectionPositions = {
            home: document.getElementById('home').offsetTop,
            about: document.getElementById('about').offsetTop,
            'experience': document.getElementById('experience').offsetTop,
            projects: document.getElementById('projects').offsetTop,
            swimming: document.getElementById('swimming').offsetTop
        }
        const totalHeight = document.body.scrollHeight - window.innerHeight
        const indicatorHeight = window.innerHeight - 80 // Adjust for navbar height and padding

        if (indicatorRef.current && labelRef.current) {
            const position = (sectionPositions[currentSection] / totalHeight) * indicatorHeight
            indicatorRef.current.style.transform = `translateY(${position}px)`
            labelRef.current.style.transform = `translateY(${position}px)`
            labelRef.current.textContent = currentSection.charAt(0).toUpperCase() + currentSection.slice(1)
        }
    }, [currentSection])

    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-[#FAF0E6] text-gray-100 relative`}>
                <div className="vertical-line hidden md:block">
                    <div className="indicator" ref={indicatorRef}></div>
                    <div className="section-label" ref={labelRef}></div>
                </div>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <About />
                <Experience />
                <Projects />
                <Swimming />
            </div>
        </>
    )
}

export default App

import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(targetId);
        }
    };

    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = ['home', 'projects', 'about', 'experience', 'swimming'];
            let currentSection = 'home';

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = sectionId;
                        break;
                    }
                }
            }
            
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScrollSpy);
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[#0033A0] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-[#FFFFFF]" onClick={(e) => handleScroll(e, 'home')}>
                        Hudson Chung
                    </a>

                    <div className={`w-7 h-5 relative cursor-pointer z-40 md:hidden ${menuOpen ? 'hidden' : ''}`} onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8 mx-auto">
                        <a href="#home" className={`text-[#FFFFFF] hover:text-[#FEDD00] transition-colors ${activeSection === 'home' ? '[text-shadow:_0_0_10px_rgba(255,255,255,1)]' : ''}`} onClick={(e) => handleScroll(e, 'home')}> Home </a>
                        <a href="#about" className={`text-[#FFFFFF] hover:text-[#FEDD00] transition-colors ${activeSection === 'about' ? '[text-shadow:_0_0_10px_rgba(255,255,255,1)]' : ''}`} onClick={(e) => handleScroll(e, 'about')}> About </a>
                        <a href="#experience" className={`text-[#FFFFFF] hover:text-[#FEDD00] transition-colors ${activeSection === 'experience' ? '[text-shadow:_0_0_10px_rgba(255,255,255,1)]' : ''}`} onClick={(e) => handleScroll(e, 'experience')}> Experience </a>
                        <a href="#projects" className={`text-[#FFFFFF] hover:text-[#FEDD00] transition-colors ${activeSection === 'projects' ? '[text-shadow:_0_0_10px_rgba(255,255,255,1)]' : ''}`} onClick={(e) => handleScroll(e, 'projects')}> Projects </a>
                        <a href="#swimming" className={`text-[#FFFFFF] hover:text-[#FEDD00] transition-colors ${activeSection === 'swimming' ? '[text-shadow:_0_0_10px_rgba(255,255,255,1)]' : ''}`} onClick={(e) => handleScroll(e, 'swimming')}> Swimming </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
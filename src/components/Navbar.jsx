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
        <nav className="fixed top-0 w-full z-40">
            {/* Left bubble for name */}
            <div className="absolute top-4 left-4 bg-[#0033A0]/90 text-white rounded-full p-4 shadow-lg">
                <a href="#home" className="text-xl font-bold" onClick={(e) => handleScroll(e, 'home')}>
                    Hudson Chung
                </a>
            </div>

            {/* Center bubble for sections */}
            <div className="absolute top-4 left-1/2 transform hidden md:block -translate-x-1/2 bg-[#0033A0]/90 text-white rounded-full p-4 shadow-lg">
                <div className="flex space-x-4">
                    <a href="#home" className={`hover:text-[#FEDD00] transition-colors ${activeSection === 'home' ? '[text-shadow:_0_0_10px_rgba(255,255,255,1)]' : ''}`} onClick={(e) => handleScroll(e, 'home')}> Home </a>
                    <a href="#about" className={`hover:text-[#FEDD00] transition-colors ${activeSection === 'about' ? '[text-shadow:_0_0_10px_rgba(255,255,255,1)]' : ''}`} onClick={(e) => handleScroll(e, 'about')}> About </a>
                    <a href="#experience" className={`hover:text-[#FEDD00] transition-colors ${activeSection === 'experience' ? '[text-shadow:_0_0_10px_rgba(255,255,255,1)]' : ''}`} onClick={(e) => handleScroll(e, 'experience')}> Experience </a>
                    <a href="#projects" className={`hover:text-[#FEDD00] transition-colors ${activeSection === 'projects' ? '[text-shadow:_0_0_10px_rgba(255,255,255,1)]' : ''}`} onClick={(e) => handleScroll(e, 'projects')}> Projects </a>
                    <a href="#swimming" className={`hover:text-[#FEDD00] transition-colors ${activeSection === 'swimming' ? '[text-shadow:_0_0_10px_rgba(255,255,255,1)]' : ''}`} onClick={(e) => handleScroll(e, 'swimming')}> Swimming </a>
                </div>
            </div>

            {/* Right bubble for hamburger menu */}
            <div className={`absolute md:hidden top-4 right-4 bg-[#0033A0]/90 text-white rounded-full p-4 shadow-lg cursor-pointer flex items-center justify-center ${menuOpen ? 'hidden' : ''}`} onClick={() => setMenuOpen((prev) => !prev)}>
                <div className={`w-7 h-5 relative z-40 flex items-center justify-center ${menuOpen ? 'hidden' : ''}`}>
                    &#9776;
                </div>
            </div>
        </nav>
    );
};
import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'swimming', label: 'Swimming' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
            scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Name */}
                    <div className="flex items-center">
                        <a 
                            href="#home" 
                            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
                            onClick={(e) => handleScroll(e, 'home')}
                        >
                            Hudson Chung
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`text-sm font-medium transition-all duration-200 hover:text-[#3B82F6] ${
                                    activeSection === item.id 
                                        ? 'text-[#3B82F6] relative' 
                                        : 'text-[#525252]'
                                }`}
                                onClick={(e) => handleScroll(e, item.id)}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] rounded-full"></div>
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-[#E5E5E5] hover:bg-white transition-all duration-200"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span className={`block w-5 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                                    menuOpen ? 'rotate-45 translate-y-1' : ''
                                }`}></span>
                                <span className={`block w-5 h-0.5 bg-[#1A1A1A] transition-all duration-300 mt-1 ${
                                    menuOpen ? 'opacity-0' : ''
                                }`}></span>
                                <span className={`block w-5 h-0.5 bg-[#1A1A1A] transition-all duration-300 mt-1 ${
                                    menuOpen ? '-rotate-45 -translate-y-1' : ''
                                }`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
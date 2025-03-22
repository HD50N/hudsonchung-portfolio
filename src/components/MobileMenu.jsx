export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-1/2 transform -translate-y-1/2 right-6 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close menu">
                &times;
            </button>
            <a href="#home" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} onClick={(e) => handleScroll(e, 'home')}> Home </a>
            <a href="#about" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} onClick={(e) => handleScroll(e, 'about')}> About </a>
            <a href="#experience" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} onClick={(e) => handleScroll(e, 'experience')}> Experience </a>
            <a href="#projects" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} onClick={(e) => handleScroll(e, 'projects')}> Projects </a>
            <a href="#swimming" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} onClick={(e) => handleScroll(e, 'swimming')}> Swimming </a>
        </div>
    )
}
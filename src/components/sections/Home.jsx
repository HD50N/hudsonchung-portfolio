import reactImage from '../../assets/hudson.jpeg';
import './Home.css'; // Import the CSS file for cherry blossom animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const CherryBlossom = () => (
    <div className="cherry-blossom" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}></div>
);

export const Home = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative py-8 bg-[#FFFFFF] pt-20">
            <div className="cherry-blossoms">
                {[...Array(20)].map((_, i) => (
                    <CherryBlossom key={i} />
                ))}
            </div>
            <div className="flex flex-col items-center justify-center w-full px-4 md:px-8">
                <div className="p-1 bg-gradient-to-r from-[#0033A0] to-[#00BFFF] rounded-full mb-16">
                    <img src={reactImage} alt="Hudson Chung" className="w-80 h-80 rounded-full object-cover object-top shadow-2xl" />
                </div>
                <div className="text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#0033A0] to-[#00BFFF] bg-clip-text text-transparent leading-tight">
                        Hi, I'm Hudson Chung
                    </h1>
                    <div className="flex justify-center space-x-4 mb-6">
                        <a href="https://github.com/HD50N" target="_blank" rel="noopener noreferrer" className="text-[#9370DB] hover:text-[#800080] transition-colors">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/hudson-chung" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:text-[#005582] transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/@huddychung" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:text-[#CC0000] transition-colors">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>
                    <p className="text-[#4A4A4A] text-lg mb-8 max-w-lg mx-auto">
                        Full Stack Software Engineer and Junior at University of Chicago with a focus on Computer Science and Economics. Interned at a YC-backed startup building session recording SDK and high-performance ingestion server.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="bg-[#C60C30] text-white py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(254, 221, 0, 0.2)]">
                            About Me
                        </a>

                        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="bg-[#FEDD00] text-black py-2 px-4 md:py-3 md:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(198, 12, 48, 0.4)]">
                            View Projects
                        </a>

                        <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="bg-[#FEDD00] text-black py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(254, 221, 0, 0.2)]">
                            Experience
                        </a>

                        <a href="swimming" onClick={(e) => handleScroll(e, 'swimming')} className="bg-[#00BFFF] text-white py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0, 191, 255, 0.4)]">
                            Swimming
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

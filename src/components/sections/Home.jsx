import reactImage from '../../assets/hudson.jpeg';
import './Home.css';
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
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative py-8 bg-gradient-to-br from-[#FAFAFA] to-[#F0F9FF] pt-20">
            {/* Background Elements */}
            <div className="cherry-blossoms">
                {[...Array(20)].map((_, i) => (
                    <CherryBlossom key={i} />
                ))}
            </div>
            
            {/* Main Content */}
            <div className="flex flex-col items-center justify-center w-full px-4 md:px-8 max-w-6xl mx-auto">
                {/* Profile Image */}
                <div className="relative mb-16 animate-fade-in-up">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] rounded-full blur-xl opacity-30 animate-pulse"></div>
                        <div className="relative p-2 bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] rounded-full">
                            <img 
                                src={reactImage} 
                                alt="Hudson Chung" 
                                className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover object-top shadow-2xl border-4 border-white" 
                            />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center px-4 max-w-4xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <h1 className="text-display font-bold mb-6 gradient-text">
                        Hi, I'm Hudson Chung
                    </h1>
                    
                    <p className="text-body mb-8 max-w-2xl mx-auto">
                        Founding Engineer at Human Behavior (YC X25) and Junior at University of Chicago studying Computer Science and Economics. 
                        Building AI-powered session-replay platforms and co-founding startups focused on AI-driven solutions.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-[#525252]">
                        <span>hudsonch@uchicago.edu</span>
                        <span>•</span>
                        <span>(914)-771-0006</span>
                        <span>•</span>
                        <span>Millwood, NY</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-12">
                        <a 
                            href="https://github.com/HD50N" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-[#1A1A1A] hover:text-[#3B82F6]"
                        >
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/hudson-chung" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-[#0077B5] hover:text-[#005582]"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a 
                            href="https://www.youtube.com/@huddychung" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-[#FF0000] hover:text-[#CC0000]"
                        >
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <button 
                            onClick={(e) => handleScroll(e, 'about')} 
                            className="btn-primary"
                        >
                            About Me
                        </button>

                        <button 
                            onClick={(e) => handleScroll(e, 'projects')} 
                            className="btn-secondary"
                        >
                            View Projects
                        </button>

                        <button 
                            onClick={(e) => handleScroll(e, 'experience')} 
                            className="btn-secondary"
                        >
                            Experience
                        </button>

                        <button 
                            onClick={(e) => handleScroll(e, 'swimming')} 
                            className="btn-primary"
                        >
                            Swimming
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

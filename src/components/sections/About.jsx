export const About = () => {

    const frontendSkills = ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Swift (SwiftUI)"];
    const backendSkills = ["Node.js", "Python", "AWS", "MySQL", "Firebase", "SQL"];
    const tools = ["Git", "Linux Command Line", "REST APIs", "Webhooks", "Figma"];
    const aiSkills = ["OpenAI API", "Pandas", "NumPy"];

    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20 relative bg-[#FFFFFF]">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#0033A0] to-[#00BFFF] bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                    <p className="text-[#4A4A4A] mb-6">
                        Passionate developer with proficiency in full-stack web development and experience in mobile app development. I am a quick learner and a team player who is always eager to learn new technologies and frameworks. I am currently studying computer science and economics at the University of Chicago.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border-[#0033A0]/50 border hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)]">
                            <h3 className="text-xl font-bold mb-4 text-[#0033A0]">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-[#0033A0]/10 text-[#0033A0] py-1 px-3 rounded-full text-sm hover:bg-[#0033A0]/20 hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border-[#0033A0]/50 border hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)]">
                            <h3 className="text-xl font-bold mb-4 text-[#0033A0]">
                                Backend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-[#0033A0]/10 text-[#0033A0] py-1 px-3 rounded-full text-sm hover:bg-[#0033A0]/20 hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-4 text-[#0033A0]">
                           Education
                        </h3>
                        <ul className="list-disc list-inside text-[#4A4A4A] space-y-2">
                            <li>
                                <strong>B.S. in Computer Science</strong> - University of Chicago 
                                [2023-2026]
                            </li>
                            <li>
                                <strong>B.A. in Economics</strong> - University of Chicago 
                                [2023-2027]
                            </li>
                            <li>
                                <strong>M.S. in Computer Science</strong> - University of Chicago 
                                [2026-2027]
                            </li>
                            <li>
                                <strong>Relevant Coursework:</strong> Systems Programming, Discrete Mathematics, Theory of Algorithms
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                        <h3 className="text-xl font-bold mb-4 text-[#0033A0]">
                           Leadership & Activities
                        </h3>
                        <ul className="list-disc list-inside text-[#4A4A4A] space-y-2">
                            <li>
                                <strong>UChicago Men’s Swim Team</strong>
                                <ul className="list-disc list-inside pl-10">
                                    <li>Balanced a rigorous 25+ hour per week practice schedule while managing full-time coursework</li>
                                    <li>Contributed to the highest UAA performance in program history</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Korean Students Organization</strong>
                                <ul className="list-disc list-inside pl-10">
                                    <li>Oversee member outreach and Instagram content strategy, garnering over 40,000 views to enhance engagement with the UChicago and Korean community.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
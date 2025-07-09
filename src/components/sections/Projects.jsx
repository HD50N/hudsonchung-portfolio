export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-[#FFFFFF]">
            <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
                <h1 className="text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#0033A0] to-[#00BFFF] bg-clip-text text-transparent leading-right text-center">
                    Projects
                </h1>

                <p className="text-lg mb-8 max-w-lg mx-auto text-center text-[#4A4A4A]">
                    Here are some of the projects I've worked on.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Off The Dome - AI Video Feedback",
                            description: "Architected a full-stack social platform with React/TypeScript, enabling real-time video sharing and AI feedback. Designed content moderation with Edge Functions, ensuring 24-hour response to flagged content and user reports. Utilized Supabase for user authentication, database management, and video blob storage.",
                            tech: ["React", "TypeScript", "Supabase", "Edge Functions"],
                            link: "https://apps.apple.com/us/app/off-the-dome/id6747694779"
                        },
                        {
                            title: "PeronoAI - Korean Language Learning",
                            description: "Engineered using React/TypeScript, integrating OpenAI APIs for AI content generation and real-time chat feedback. Established scalable authentication and database relationships, demonstrating strong system design skills. Developed AI-powered features for conversation practice and adaptive learning, tailoring content to user profiles.",
                            tech: ["React", "TypeScript", "OpenAI API", "Supabase"],
                            link: "https://github.com/HD50N/peronoai"
                        },
                        {
                            title: "Swim Stroke Coach",
                            description: "Developed a swimming stroke detector using Python, OpenCV, and MediaPipe to count strokes and classify styles. Utilized pose estimation to compute joint angles and deliver real-time feedback, boosting training insights.",
                            tech: ["Python", "OpenCV", "MediaPipe"],
                            link: "https://github.com/HD50N/AISwimCoach"
                        },
                        {
                            title: "CLI Python Go Implementation",
                            description: "Collaborated in a team of four to create a fully playable game of Go, including game logic and a terminal-based interface. Created a Bot that uses Go-specific board strategies and a simplified Minimax algorithm to achieve an over 85% win rate.",
                            tech: ["Python", "CLI", "Minimax Algorithm"],
                            link: "https://github.com/HD50N/cli-python-go"
                        },
                    ].map((project, index) => (
                        <div key={index} className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all flex flex-col items-center justify-between text-center h-full">
                            <div>
                                <h2 className="text-xl font-bold mb-2 text-[#0033A0]">
                                    {project.title}
                                </h2>
                                <p className="text-[#4A4A4A] mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-center space-x-2 mb-4">
                                    {project.tech.map((tech, key) => (
                                        <span key={key} className="flex items-center justify-center h-8 bg-[#0033A0]/10 text-[#0033A0] py-1 px-3 rounded-full text-sm hover:bg-[#0033A0]/20 hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#0033A0] hover:text-[#00BFFF] transition-colors mt-auto">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

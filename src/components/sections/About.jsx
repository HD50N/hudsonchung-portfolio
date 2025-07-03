export const About = () => {

    const frontendSkills = ["React", "TypeScript", "JavaScript", "TailwindCSS", "Swift (SwiftUI)"];
    const backendSkills = ["Node.js", "Python", "Java", "C", "PostgreSQL", "Redis", "Supabase", "Firebase"];
    const tools = ["Git", "REST APIs", "Webhooks", "rrweb", "Capacitor", "Prisma"];
    const cloudSkills = ["AWS (EC2, S3, RDS)", "Vercel", "Microservices", "Fluid"];

    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20 relative bg-[#FFFFFF]">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#0033A0] to-[#00BFFF] bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                    <p className="text-[#4A4A4A] mb-6">
                        Full Stack Software Engineer and Junior at University of Chicago with a focus on Computer Science and Economics. Interned at a YC-backed startup building a session recording SDK and high-performance ingestion server. Built full-stack applications using React, TypeScript, and cloud infrastructure. Founded ventures in educational technology and social media.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border-[#0033A0]/50 border hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)]">
                            <h3 className="text-xl font-bold mb-4 text-[#0033A0]">
                                Frontend & Languages
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
                                Backend & Data
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border-[#0033A0]/50 border hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)]">
                            <h3 className="text-xl font-bold mb-4 text-[#0033A0]">
                                Tools & Cloud
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tech, key) => (
                                    <span key={key} className="bg-[#0033A0]/10 text-[#0033A0] py-1 px-3 rounded-full text-sm hover:bg-[#0033A0]/20 hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border-[#0033A0]/50 border hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)]">
                            <h3 className="text-xl font-bold mb-4 text-[#0033A0]">
                                Cloud & Infrastructure
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cloudSkills.map((tech, key) => (
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
                                [Expected Jun 2027]
                            </li>
                            <li>
                                <strong>B.A. in Economics</strong> - University of Chicago 
                                [Expected Jun 2027]
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
                                <strong>Korean Students Organization — President</strong> [2024 – Present]
                                <ul className="list-disc list-inside pl-10">
                                    <li>Led Korean Students Organization outreach and Instagram strategy, driving 40,000+ views and boosting engagement</li>
                                </ul>
                            </li>
                            <li>
                                <strong>UChicago Men's Swim Team — Student Athlete</strong> [2023 – Present]
                                <ul className="list-disc list-inside pl-10">
                                    <li>Balanced 25+ hour/week swim practice with full-time coursework, contributing to team's top UAA performance</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
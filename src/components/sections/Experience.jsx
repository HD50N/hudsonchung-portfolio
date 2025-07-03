export const Experience = () => {
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center py-20 relative bg-[#FFFFFF]">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#0033A0] to-[#00BFFF] bg-clip-text text-transparent text-center">
                    Experience
                </h2>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                        <h4 className="text-xl font-bold mb-4 text-[#0033A0]">
                            Human Behavior (YC X25) - Session Recording Analytics — Founding SWE Intern
                        </h4>
                        <p className="text-[#4A4A4A] mb-3 font-medium">Remote | May 2025 – Present</p>
                        <ul className="list-disc list-inside text-[#4A4A4A] space-y-2">
                            <li>Developed TypeScript SDK for session recording, enabling real-time event streaming and data redaction for all users.</li>
                            <li>Built an ingestion server with Redis/PostgreSQL, 5+ endpoints and Vercel functions, enabling both server/serverless.</li>
                            <li>Automated session archiving with AWS S3 and GZIP, reducing inactive session data by 60–80% via cron scheduling.</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                        <h4 className="text-xl font-bold mb-4 text-[#0033A0]">
                            FoodFight - Social Sports Betting — Full Stack SWE Intern
                        </h4>
                        <p className="text-[#4A4A4A] mb-3 font-medium">Remote | Jun 2024 – Sep 2024</p>
                        <ul className="list-disc list-inside text-[#4A4A4A] space-y-2">
                            <li>Created frontend and backend microservices for a social gaming platform, collaborating with 9 engineers to launch.</li>
                            <li>Implemented 3 Slack bots, automating notifications for 100+ signups and real-time game statistics for the team.</li>
                            <li>Updated AWS EC2 database tables and backend, ensuring real-time game status updates for all users.</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                        <h4 className="text-xl font-bold mb-4 text-[#0033A0]">
                            Business Development Intern at Haylon Technologies [March 2024 - May 2024]
                        </h4>
                        <ul className="list-disc list-inside text-[#4A4A4A] space-y-2">
                            <li>Produced 80+ slides of reports on the technologies and government contracts of competitors in aviation battery systems, used by the engineering team for battery efficiency and by the business team for funding proposals.</li>
                            <li>Collaborated with interns to analyze competitor contracts, presenting key findings to the CEO and COO.</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                        <h4 className="text-xl font-bold mb-4 text-[#0033A0]">
                            Product Strategy Intern at Samsung Electronics [July 2022 - July 2023]
                        </h4>
                        <ul className="list-disc list-inside text-[#4A4A4A] space-y-2">
                            <li>Developed an innovative mobile service concept by leveraging the IDEO methodology to effectively balance customer needs with technological feasibility, aiming to significantly increase engagement with Gen-Z consumers.</li>
                            <li>Led 3 workshops and brainstorming sessions, refining 3 major mobile service concepts for market feasibility.</li>
                            <li>Created a Figma design and pitched the UI outline and monetization strategy to the Head of Product Strategy.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
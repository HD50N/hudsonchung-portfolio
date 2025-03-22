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
                            Full Stack Engineer Intern at FoodFight [June 2024 - September 2024]
                        </h4>
                        <ul className="list-disc list-inside text-[#4A4A4A] space-y-2">
                            <li>Developed frontend services and backend microservices for FoodFight, a social gaming platform using menu items as currency for live sports bets, with ReactJS and Python, collaborating with 6 interns and 3 senior engineers.</li>
                            <li>Implemented 3 Slack bots using Python, REST API and Webhooks that notified development team of 100+ new sign ups, reported individual real time game statistics, and gathered user information to generate user insights.</li>
                            <li>Updated AWS EC2 database tables and backend services, ensuring game status updates were reflected in real-time.</li>
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
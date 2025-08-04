export const Experience = () => {
    const experiences = [
        {
            company: "Human Behavior (YC X25)",
            role: "Founding Engineer",
            period: "May 2025 - September 2025",
            description: "AI-powered session-replay platform uncovering user behavior insights",
            tech: "AWS | Redis | Supabase | React | Vercel | Docker",
            achievements: [
                "Launched a TypeScript SDK using rrweb to capture user interactions with session continuity via cookies/localStorage, enabling real-time analytics and data redaction for 500,000+ sessions in 30+ apps while reducing event payloads by 40%",
                "Scaled a distributed, Dockerized Node.js ingestion server on AWS ECS Fargate with ALB, processing 50,000+ events per week, monitored with CloudWatch and Redis to reduce memory usage by 60% and support horizontal scaling",
                "Implemented a Redis-based archiver on AWS EC2, introducing batch processing to handle archival and cleanup of 50,000+ session replays monthly, cutting Redis read latency by 70% and storing replays in S3 for replay and AI tagging"
            ]
        },
        {
            company: "Food Fight",
            role: "Full Stack Engineer Intern",
            period: "June 2024 - September 2024",
            description: "Social sports gaming platform using food and beverages as currency",
            tech: "EC2 | Python | MySQL | Microservices",
            achievements: [
                "Developed Slack-based signup, delivery, and contest bots using Python and REST APIs, automating user notifications and onboarding workflows across 100+ daily signups, while enabling structured user metadata collection for analytics",
                "Redesigned PostgreSQL schemas and backend microservices to support bet state transitions, ensuring frontend synchronization, reducing logic duplication, and enabling live gameplay across 44 active states and 100+ partner venues",
                "Optimized date-filter and sports search tools in React/Capacitor frontend, streamlining UX for thousands of bets during peak sporting seasons and resolving frontend-backend inconsistencies via route tracing and API restructuring"
            ]
        },
        {
            company: "Off The Dome",
            role: "Co-Founder",
            period: "June 2025 - Present",
            description: "Toastmasters meets AI for speech practice, feedback, and sharing",
            tech: "React | Capacitor | TailwindCSS | REST APIs | Supabase",
            achievements: [
                "Architected social platform with Supabase, implementing user authentication, notifications, following system, and AI-powered speech feedback with OpenAI Whisper transcription via Edge Functions, processing user interactions daily",
                "Engineered a real-time video recording system with WebRTC, enabling users to capture 60-second speeches with live preview, audio-only mode, and automatic thumbnail generation, supporting daily recordings across all browsers",
                "Streamlined a TikTok-style vertical video feed using React Window virtualization and playback controls, implementing intelligent video preloading and error handling to reduce memory usage by 50% and support smooth scrolling videos"
            ]
        },
        {
            company: "VC AI",
            role: "Co-Founder",
            period: "December 2024 - Present",
            description: "AI VC partner streamlining startup due diligence with insights",
            tech: "NextJS | Python | REST APIs | Supabase",
            achievements: [
                "Built a scalable scraping pipeline using REST API and Supabase to ingest and structure startup data from multiple sources",
                "Leveraged GPT-4o to generate startup summaries, categorize verticals, and highlight competitors from scraped profiles",
                "Shipped a responsive React dashboard for querying, filtering, and benchmarking startups by traction and category"
            ]
        }
    ];

    return (
        <section id="experience" className="min-h-screen py-20 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-heading font-bold mb-4 gradient-text">
                        Experience & Projects
                    </h1>
                    <p className="text-body max-w-2xl mx-auto">
                        Building AI-powered platforms and co-founding startups focused on innovative solutions
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className="card p-8 animate-fade-in-up"
                            style={{animationDelay: `${0.1 * (index + 1)}s`}}
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-subheading font-semibold text-[#1A1A1A]">
                                            {exp.company}
                                        </h3>
                                        <span className="px-3 py-1 bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] text-[#3B82F6] text-sm font-medium rounded-full">
                                            {exp.role}
                                        </span>
                                    </div>
                                    <p className="text-[#525252] mb-2">{exp.description}</p>
                                    <p className="text-sm text-[#737373] font-medium">{exp.period}</p>
                                </div>
                                <div className="mt-4 lg:mt-0 lg:ml-6">
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.split(' | ').map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="px-3 py-1 bg-[#F5F5F5] text-[#525252] text-xs font-medium rounded-full border border-[#E5E5E5]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {exp.achievements.map((achievement, achievementIndex) => (
                                    <div key={achievementIndex} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-[#525252] text-sm leading-relaxed">{achievement}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export const About = () => {
    const skillCategories = [
        {
            title: "Front End",
            skills: ["React", "NextJS", "Vite", "Javascript", "TypeScript", "Capacitor", "Tailwind CSS"]
        },
        {
            title: "Back End",
            skills: ["Node.js", "Python", "Java", "C", "SQL", "PostgreSQL", "Supabase", "Redis", "REST API", "Webhooks", "Microservices"]
        },
        {
            title: "Testing/Deployment & Cloud",
            skills: ["AWS (EC2, S3, RDS, ALB, ECS Fargate, CloudWatch)", "Docker", "Vercel"]
        },
        {
            title: "Developer & Organization Tools",
            skills: ["Git", "npm", "Mintlify", "Linear"]
        }
    ];

    const leadership = [
        {
            title: "Korean Students Organization",
            role: "President + Webmaster",
            period: "September 2023 - Present",
            description: "The University of Chicago's Korean Club",
            tech: "Next.JS | React | Supabase | REST APIs",
            achievements: [
                "Created a full-stack e-commerce website using Next.js, TypeScript, and Supabase, implementing user authentication, shopping functionality, and Stripe payment processing with Printful API integration for automated inventory management",
                "Organized an intuitive admin dashboard enabling non-technical members to manage the website and product orders",
                "Led speaker outreach and Instagram strategy for Korean Students Organization, driving 100,000+ views and boosting engagement while managing the technical implementation of social media integrations and analytics tracking"
            ]
        },
        {
            title: "UChicago Men's Swim Team",
            role: "NCAA DIII Men's Swim and Dive Team",
            period: "September 2023 - Present",
            description: "Leadership | Time Management | Teamwork | Goal Setting | Resilience",
            achievements: [
                "Balanced 25+ hour/week swim practice with full-time coursework, contributing to the team's top UAA performance",
                "Collaborated with team to achieve desired performance, developing strong communication and a team-oriented mindset"
            ]
        }
    ];

    return (
        <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-[#FEFEFE] to-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-heading font-bold mb-4 gradient-text">
                        About Me
                    </h1>
                    <p className="text-body max-w-3xl mx-auto">
                        Founding Engineer at Human Behavior (YC X25) building AI-powered session-replay platforms. 
                        Currently pursuing a dual degree in Computer Science and Economics at the University of Chicago, 
                        while co-founding startups focused on AI-driven solutions and leading campus organizations.
                    </p>
                </div>

                {/* Education */}
                <div className="card p-8 mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    <h2 className="text-subheading font-semibold mb-6 text-[#1A1A1A]">
                        Education
                    </h2>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-semibold text-[#1A1A1A]">
                                The University of Chicago
                            </h3>
                            <p className="text-[#525252]">B.S. Computer Science | B.A. Economics</p>
                        </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] text-[#3B82F6] text-sm font-medium rounded-full">
                            2023-2027
                        </span>
                    </div>
                    <div className="mt-4">
                        <span className="px-3 py-1 bg-[#F5F5F5] text-[#525252] text-sm font-medium rounded-full border border-[#E5E5E5]">
                            Building LLM Applications with Prompt Engineering (NVIDIA GTC)
                        </span>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <h2 className="text-subheading font-semibold mb-6 text-[#1A1A1A] text-center">
                        Skills & Technologies
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="card p-6">
                                <h3 className="font-semibold text-[#1A1A1A] mb-4">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className="px-3 py-1 bg-[#F5F5F5] text-[#525252] text-xs font-medium rounded-full border border-[#E5E5E5] hover:bg-[#EFF6FF] hover:border-[#BFDBFE] transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Leadership */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    <h2 className="text-subheading font-semibold mb-6 text-[#1A1A1A] text-center">
                        Leadership & Activities
                    </h2>
                    <div className="space-y-6">
                        {leadership.map((role, index) => (
                            <div key={index} className="card p-6">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg font-semibold text-[#1A1A1A]">
                                                {role.title}
                                            </h3>
                                            <span className="px-3 py-1 bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] text-[#3B82F6] text-sm font-medium rounded-full">
                                                {role.role}
                                            </span>
                                        </div>
                                        <p className="text-[#525252] mb-2">{role.description}</p>
                                        <p className="text-sm text-[#737373] font-medium">{role.period}</p>
                                    </div>
                                    {role.tech && (
                                        <div className="mt-4 lg:mt-0 lg:ml-6">
                                            <div className="flex flex-wrap gap-2">
                                                {role.tech.split(' | ').map((tech, techIndex) => (
                                                    <span 
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-[#F5F5F5] text-[#525252] text-xs font-medium rounded-full border border-[#E5E5E5]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    {role.achievements.map((achievement, achievementIndex) => (
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
            </div>
        </section>
    )
}
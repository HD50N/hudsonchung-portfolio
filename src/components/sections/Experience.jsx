const EXPERIENCES = [
  {
    company: 'Reconcile',
    suffix: null,
    role: 'Co-Founder',
    period: 'May 2026 — Present',
    desc: 'AI-assisted modernization platform for regional-bank Java/.NET integration estates',
    tech: ['TypeScript', 'React', 'Python', 'Supabase', 'Docker'],
    achievements: [
      'Shipping a hybrid SaaS + in-network agent product enabling banks to inventory legacy middleware, extract behavioral specs with LLM pipelines, and generate REST/OpenAPI migration artifacts without moving production data off-prem',
      'Designed outbound-only agent-to-control-plane architecture (Docker and GitHub install paths) so customer code stays inside the bank\'s network while coordination, billing, and dashboards run in the cloud',
      'Built customer-facing web app with TypeScript, React, and Tailwind covering onboarding, agent status, service inventory, and end-to-end migration workflow across discovery → spec → codegen → validation stages',
    ],
  },
  {
    company: 'Human Behavior',
    suffix: 'YC X25',
    role: 'Founding Engineer',
    period: 'May 2025 — Sep 2025',
    desc: 'AI-powered session-replay platform uncovering user behavior insights',
    companyLink: 'https://humanbehavior.co',
    link: 'https://github.com/humanbehavior-gh/humanbehavior-js',
    linkLabel: 'SDK on GitHub',
    tech: ['AWS', 'Redis', 'Supabase', 'React', 'Vercel', 'Docker'],
    achievements: [
      'Launched a TypeScript SDK using rrweb to capture user interactions with session continuity via cookies/localStorage, enabling real-time analytics and data redaction for 500,000+ sessions in 30+ apps while reducing event payloads by 40%',
      'Scaled a distributed, Dockerized Node.js ingestion server on AWS ECS Fargate with ALB, processing 50,000+ events per week, monitored with CloudWatch and Redis to reduce memory usage by 60% and support horizontal scaling',
      'Implemented a Redis-based archiver on AWS EC2, introducing batch processing to handle archival and cleanup of 50,000+ session replays monthly, cutting Redis read latency by 70% and storing replays in S3 for replay and AI tagging',
    ],
  },
  {
    company: 'Food Fight',
    suffix: null,
    companyLink: 'https://getfoodfight.com/',
    role: 'Full Stack Engineer Intern',
    period: 'Jun 2024 — Sep 2024',
    desc: 'Social sports gaming platform using food and beverages as currency',
    tech: ['EC2', 'Python', 'MySQL', 'Microservices'],
    achievements: [
      'Developed Slack-based signup, delivery, and contest bots using Python and REST APIs, automating user notifications and onboarding workflows across 100+ daily signups, while enabling structured user metadata collection for analytics',
      'Redesigned PostgreSQL schemas and backend microservices to support bet state transitions, ensuring frontend synchronization and enabling live gameplay across 44 active states and 100+ partner venues',
      'Optimized date-filter and sports search tools in React/Capacitor frontend, streamlining UX for thousands of bets during peak sporting seasons and resolving frontend-backend inconsistencies via route tracing and API restructuring',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-eyebrow reveal">02 — Experience</div>
        <h2 className="section-title reveal reveal-d1">
          What I've<br />Built
        </h2>

        <div className="exp-list">
          {EXPERIENCES.map(({ company, suffix, role, period, desc, tech, achievements, link, linkLabel, companyLink }, i) => (
            <div key={company} className={`exp-card reveal reveal-d${Math.min(i + 1, 4)}`}>
              <div className="exp-header">
                <div>
                  <div className="exp-company">
                    {companyLink
                      ? <a href={companyLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>{company}</a>
                      : company
                    }
                    {suffix && (
                      <span className="exp-company-suffix">{suffix}</span>
                    )}
                  </div>
                  <div className="exp-role-badge">{role}</div>
                  <div className="exp-desc">{desc}</div>
                </div>
                <div className="exp-date">{period}</div>
              </div>
              <div className="exp-body">
                <ul className="exp-achievements">
                  {achievements.map((a, j) => <li key={j}>{a}</li>)}
                </ul>
                <div className="exp-tech-row">
                  {tech.map(t => <span key={t} className="exp-tech-tag">{t}</span>)}
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginLeft: 'auto' }}>
                      {linkLabel} <span className="project-arrow">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

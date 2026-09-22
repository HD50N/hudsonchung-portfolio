const EXPERIENCES = [
  {
    company: 'Marrow',
    suffix: null,
    companyLink: 'https://usemarrow.co',
    role: 'Founder',
    period: 'May 2026 - Present',
    desc: 'Installable expert judgment. Creators compile a brain from their sources, users run it on their own connected tools',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Mastra', 'Composio MCP', 'Expo', 'Stripe'],
    achievements: [
      'Built the Mastra agent runtime and Composio MCP tool layer with an execution policy of draft-only by default, read-only tool sessions, and explicit confirmation before live writes, so agents act on Slack, Stripe, GitHub, and Gmail with the user\'s own credentials',
      'Built the knowledge pipeline end to end: multi-source ingestion (RSS, Playwright, social OAuth) → content-hash dedupe → chunk/embed → reranked RAG with citations, plus an LLM "train brain" pipeline that compiles persona, rules, and skills from a creator\'s work',
      'Built an eval harness with graders, hard-gate assertions, locked holdouts, and blinded baseline comparison to gate capability readiness. Shipped durable DAG workflows with idempotent webhook triggers, timezone-aware cron dispatch, and replay, plus an Expo mobile app with full API parity',
    ],
  },
  {
    company: 'Human Behavior',
    suffix: 'YC X25',
    role: 'Founding Engineer',
    period: 'May 2025 - May 2026',
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
    period: 'Jun 2024 - Sep 2024',
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
        <div className="section-eyebrow reveal">02 · Experience</div>
        <h2 className="section-title reveal reveal-d1">
          Where I've<br />Been
        </h2>

        <div className="exp-list">
          {EXPERIENCES.map(({ company, suffix, role, period, desc, tech, achievements, link, linkLabel, companyLink }, i) => (
            <article key={company} className={`exp-card reveal reveal-d${Math.min(i + 1, 4)}`}>
              <div className="exp-header">
                <div>
                  <h3 className="exp-company">
                    {companyLink
                      ? <a href={companyLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>{company}</a>
                      : company
                    }
                    {suffix && (
                      <span className="exp-company-suffix">{suffix}</span>
                    )}
                  </h3>
                  <div className="exp-role-badge">{role}</div>
                  <div className="exp-desc">{desc}</div>
                </div>
                <time className="exp-date">{period}</time>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import reactImage from '../../assets/Hudson.jpeg'

const SKILLS = [
  {
    title: 'Front End',
    skills: ['React', 'Next.js', 'Vite', 'JavaScript', 'TypeScript', 'Capacitor', 'Tailwind CSS'],
  },
  {
    title: 'Back End',
    skills: ['Node.js', 'Python', 'Java', 'C', 'SQL', 'PostgreSQL', 'Supabase', 'Redis', 'REST API', 'Webhooks', 'Microservices'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, RDS, ALB, ECS Fargate, CloudWatch)', 'Docker', 'Vercel'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'npm', 'Mintlify', 'Linear'],
  },
]

const LEADERSHIP = [
  {
    org: 'Korean Students Organization',
    role: 'President + Webmaster',
    period: 'Sep 2023 — Present',
    bullets: [
      'Built a full-stack e-commerce site with Next.js, TypeScript, Supabase, and Stripe + Printful integration for automated inventory management',
      'Organized an admin dashboard enabling non-technical members to manage the website and product orders',
      'Led Instagram strategy driving 100,000+ views while building social media integrations and analytics tracking',
    ],
  },
  {
    org: "UChicago Men's Swim Team",
    role: 'NCAA DIII Athlete',
    period: 'Sep 2023 — Feb 2026',
    bullets: [
      "Balanced 25+ hours/week of practice with full-time coursework, contributing to the team's top UAA performance",
      'Developed strong communication, leadership, and goal-setting skills in a competitive team environment',
    ],
  },
  {
    org: 'Kappa Theta Pi (KTP)',
    role: 'Professional Tech Fraternity · Eta Class · Project Committee',
    period: 'Apr 2024 — Present',
    bullets: [
      'Member of project committee, collaborating with brothers on technical initiatives and product development',
      'Co-built Off The Dome — an AI-powered speech practice platform — with a fellow KTP member as a chapter project',
    ],
  },
  {
    org: 'UChicago Mycelium',
    role: 'Builder Group · Member',
    period: 'Jun 2025 — Present',
    bullets: [
      'Member of UChicago\'s student builder community, connecting with fellow founders and developers building products on campus',
    ],
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-eyebrow reveal">01 — About</div>
        <h2 className="section-title reveal reveal-d1">
          About<br />Me
        </h2>

        <div className="about-grid">
          <div className="reveal">
            <div className="about-photo-wrap">
              <img src={reactImage} alt="Hudson Chung" />
              <div className="about-photo-frame" />
              <div className="about-photo-accent" />
            </div>
            <div className="about-edu-block">
              <div className="about-edu-school">University of Chicago</div>
              <div className="about-edu-degree">B.S. Computer Science · B.A. Economics</div>
              <div className="about-edu-years">2023 — 2027</div>
              <div className="about-edu-tag">
                Building LLM Applications with Prompt Engineering (NVIDIA GTC)
              </div>
            </div>
          </div>

          <div className="reveal reveal-d2">
            <p className="about-bio">
              <strong>Co-founding Reconcile</strong>, an AI-assisted platform modernizing
              legacy bank infrastructure for regulated enterprises. Previously{' '}
              <strong>Founding Engineer at Human Behavior (YC X25)</strong>. Junior at the
              University of Chicago pursuing{' '}
              <strong>B.S. Computer Science and B.A. Economics</strong>.
            </p>

            {SKILLS.map(({ title, skills }) => (
              <div key={title}>
                <div className="skills-group-label">{title}</div>
                <div className="skill-tags">
                  {skills.map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="leadership-cards reveal">
          {LEADERSHIP.map(({ org, role, period, bullets }) => (
            <div key={org} className="leadership-card">
              {org === 'Korean Students Organization'
                ? <a href="https://ksouchicago.com" target="_blank" rel="noopener noreferrer" className="leadership-org" style={{ textDecoration: 'none' }}>{org}</a>
                : <div className="leadership-org">{org}</div>
              }
              <div className="leadership-role-label">{role}</div>
              <div className="leadership-period">{period}</div>
              <ul className="leadership-bullets">
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

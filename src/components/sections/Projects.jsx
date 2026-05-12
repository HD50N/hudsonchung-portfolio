const PROJECTS = [
  {
    name: 'Shu Xiang',
    sub: 'Bilingual Filing Agent',
    desc: 'Voice agent that helps non-English-speaking immigrants file US government forms in their native language. Python asyncio orchestrator with Playwright, a bilingual overlay injected onto live government pages, ElevenLabs TTS/STT with Claude Haiku intent extraction, and a bilingual PDF generator — end-to-end in under 7 seconds.',
    tech: ['Python', 'Playwright', 'Claude API', 'ElevenLabs', 'Next.js'],
    link: 'https://github.com/HD50N/shu-xiang',
    linkLabel: 'GitHub',
    secondLink: 'https://youtu.be/sKUo6bGkAw0',
    secondLinkLabel: 'Watch Demo',
  },
  {
    name: 'Leash',
    sub: 'AI Agent Guardrails',
    desc: 'TypeScript SDK that wraps OpenAI and Anthropic clients with a maxCostUsd ceiling, hard-stopping runaway agent loops before the bill hits. Built a real-time event ingestion API with concurrent-safe upsert logic tracking cost, tokens, and call counts per run. Shipped a dashboard for monitoring agent run statuses (active, limited, loop, interrupted) with API key management and team support.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    link: 'https://useleash.vercel.app',
    linkLabel: 'useleash.vercel.app',
  },
  {
    name: 'Verd',
    sub: 'Startup Idea Validator',
    desc: 'Scores startup ideas using a multi-agent OpenAI pipeline with Zod-validated structured outputs — criterion-by-criterion breakdown, evidence notes, competitor sketches, and community/trend signals. Includes Supabase auth, Stripe Pro subscriptions, HMAC-signed guest limits, and a validation module with Reddit enrichment and LLM-synthesized reports.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'Stripe'],
    link: 'https://github.com/HD50N/shouldibuildthis',
    linkLabel: 'GitHub',
  },
  {
    name: 'Off The Dome',
    sub: 'AI Video Feedback',
    desc: 'Full-stack social platform with React/TypeScript enabling real-time video sharing, AI speech feedback via OpenAI Whisper, content moderation with Edge Functions, and Supabase auth and storage.',
    tech: ['React', 'TypeScript', 'Supabase', 'Edge Functions'],
    link: 'https://apps.apple.com/us/app/off-the-dome/id6747694779',
    linkLabel: 'App Store',
  },
  {
    name: 'KSO',
    sub: 'Korean Students Organization',
    desc: 'Full-stack e-commerce site built with Next.js, TypeScript, Supabase, and Stripe + Printful integration for automated inventory management. Includes an admin dashboard enabling non-technical members to manage the website and product orders.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Printful'],
    link: 'https://ksouchicago.com',
    linkLabel: 'ksouchicago.com',
  },
  {
    name: 'PeronoAI',
    sub: 'Korean Language Learning',
    desc: 'AI-powered language learning app with React/TypeScript, OpenAI APIs for adaptive content generation, real-time chat feedback, and scalable Supabase backend with auth and database relationships.',
    tech: ['React', 'TypeScript', 'OpenAI API', 'Supabase'],
    link: 'https://github.com/HD50N/peronoai',
    linkLabel: 'GitHub',
  },
  {
    name: 'Swim Stroke Coach',
    sub: 'Computer Vision',
    desc: 'Python-based swimming stroke detector using OpenCV and MediaPipe for real-time pose estimation, stroke counting and classification with joint angle analysis and training feedback.',
    tech: ['Python', 'OpenCV', 'MediaPipe'],
    link: 'https://github.com/HD50N/AISwimCoach',
    linkLabel: 'GitHub',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-eyebrow reveal">03 — Projects</div>
        <h2 className="section-title reveal reveal-d1">
          Selected<br />Work
        </h2>

        <div className="projects-grid">
          {PROJECTS.map(({ name, sub, desc, tech, link, linkLabel, secondLink, secondLinkLabel }, i) => (
            <div key={name} className={`project-card reveal reveal-d${Math.min(i + 1, 4)}`}>
              <div className="project-num">0{i + 1}</div>
              <div className="project-name">{name}</div>
              <div className="project-sub">{sub}</div>
              <p className="project-desc">{desc}</p>
              <div className="project-tags">
                {tech.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
              <div style={{ display: 'flex', gap: '20px', marginTop: 'auto' }}>
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                  {linkLabel} <span className="project-arrow">↗</span>
                </a>
                {secondLink && (
                  <a href={secondLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    {secondLinkLabel} <span className="project-arrow">↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

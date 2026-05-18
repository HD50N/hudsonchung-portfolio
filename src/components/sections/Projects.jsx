import ProjectCard from '../ProjectCard'

const PROJECTS = [
  {
    name: 'Swarm Wallet',
    sub: 'AI Purchase Intelligence',
    pitch: 'Tell it what you want to buy—AI checks every store and tells you the best deal.',
    desc: 'LLM planner spawns parallel Browserbase agents to scrape live listings; a Next.js dashboard streams replays and price spread over WebSocket while a coordinator synthesizes a buy-now vs wait verdict. Optional Snowflake memory for price history and semantic recall from past swarms—built for Uncommon Hacks 2026.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'WebSocket', 'Browserbase', 'Stagehand', 'Snowflake'],
    link: 'https://github.com/feixiangpeng/Swarm_Wallet',
    linkLabel: 'GitHub',
    secondLink: 'https://www.youtube.com/watch?v=tHYUi-IQEZ0',
    secondLinkLabel: 'Watch Demo',
  },
  {
    name: 'SwarmSell',
    sub: 'Multi-Platform Seller Launch Kit',
    pitch: 'One product description → full launch kit in ~60 seconds.',
    desc: '15-agent pipeline (SCOUT → PRICE → WRITE → GROW) scrapes Amazon, Etsy, eBay, Walmart, and Best Buy via Browserbase, then generates pricing, platform-native listings, and marketing assets with review gates between phases. OpenAI for extraction, Wafer/Qwen for generation—built for Uncommon Hacks 2026.',
    tech: ['Next.js', 'React', 'TypeScript', 'Browserbase', 'Stagehand', 'OpenAI', 'Vercel AI SDK'],
    link: 'https://github.com/HD50N/swarmsell',
    linkLabel: 'GitHub',
  },
  {
    name: 'Prefetch',
    sub: 'Predictive Inference Infrastructure',
    pitch: 'AI that pre-warms context before you hit send.',
    desc: 'Observes IDE, file, and calendar signals to predict the next task and speculatively prep retrieval and embeddings before the prompt arrives. FastAPI + WebSocket dashboard compares warm vs cold paths in real time; Wafer Pass inference with SQLite/Snowflake memory—built for Uncommon Hacks 2026.',
    tech: ['Next.js', 'FastAPI', 'Python', 'WebSockets', 'Wafer Pass', 'Snowflake', 'TypeScript'],
    link: 'https://github.com/HD50N/prefetch',
    linkLabel: 'GitHub',
  },
  {
    name: 'Shu Xiang',
    sub: 'Bilingual Filing Agent',
    pitch: 'Talk through a government form in your own language and walk away with the paperwork filled out.',
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
    pitch: 'A spending cap for AI agents so a runaway bot can’t drain your API budget.',
    desc: 'TypeScript SDK that wraps OpenAI and Anthropic clients with a maxCostUsd ceiling, hard-stopping runaway agent loops before the bill hits. Built a real-time event ingestion API with concurrent-safe upsert logic tracking cost, tokens, and call counts per run. Shipped a dashboard for monitoring agent run statuses (active, limited, loop, interrupted) with API key management and team support.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    link: 'https://useleash.vercel.app',
    linkLabel: 'useleash.vercel.app',
  },
  {
    name: 'Verd',
    sub: 'Startup Idea Validator',
    pitch: 'Drop in a startup idea and get an honest read on whether it’s worth building.',
    desc: 'Scores startup ideas using a multi-agent OpenAI pipeline with Zod-validated structured outputs — criterion-by-criterion breakdown, evidence notes, competitor sketches, and community/trend signals. Includes Supabase auth, Stripe Pro subscriptions, HMAC-signed guest limits, and a validation module with Reddit enrichment and LLM-synthesized reports.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'Stripe'],
    link: 'https://getverd.vercel.app',
    linkLabel: 'getverd.vercel.app',
  },
  {
    name: 'Off The Dome',
    sub: 'AI Video Feedback',
    pitch: 'Record short speeches on your phone and get instant AI coaching feedback.',
    desc: 'Full-stack social platform with React/TypeScript enabling real-time video sharing, AI speech feedback via OpenAI Whisper, content moderation with Edge Functions, and Supabase auth and storage.',
    tech: ['React', 'TypeScript', 'Supabase', 'Edge Functions'],
    link: 'https://apps.apple.com/us/app/off-the-dome/id6747694779',
    linkLabel: 'App Store',
  },
  {
    name: 'KSO',
    sub: 'Korean Students Organization',
    pitch: 'A full merch store for a student org that leaders can run without touching code.',
    desc: 'Full-stack e-commerce site built with Next.js, TypeScript, Supabase, and Stripe + Printful integration for automated inventory management. Includes an admin dashboard enabling non-technical members to manage the website and product orders.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Printful'],
    link: 'https://ksouchicago.com',
    linkLabel: 'ksouchicago.com',
  },
  {
    name: 'PeronoAI',
    sub: 'Korean Language Learning',
    pitch: 'A Korean tutor in your pocket that adapts lessons and chats with you in real time.',
    desc: 'AI-powered language learning app with React/TypeScript, OpenAI APIs for adaptive content generation, real-time chat feedback, and scalable Supabase backend with auth and database relationships.',
    tech: ['React', 'TypeScript', 'OpenAI API', 'Supabase'],
    link: 'https://github.com/HD50N/peronoai',
    linkLabel: 'GitHub',
  },
  {
    name: 'Swim Stroke Coach',
    sub: 'Computer Vision',
    pitch: 'Point your camera at the pool and get stroke counts and form tips automatically.',
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
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

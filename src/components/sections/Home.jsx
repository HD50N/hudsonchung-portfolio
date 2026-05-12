import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="container" style={{ width: '100%', position: 'relative' }}>
        <div className="reveal">
          <h1 className="hero-name">
            Hudson<br />
            <span className="second-line">Chung</span>
          </h1>
        </div>

        <div className="hero-rule reveal reveal-d1" />

        <div className="hero-bottom reveal reveal-d2">
          <div className="hero-bio">
            <p className="hero-role-label">Founding Engineer · YC X25 · UChicago</p>
            <p className="hero-bio-text">
              Building AI-powered platforms for the next generation of software.
              Full-stack engineer, founder, and NCAA swimmer at the University of Chicago.
            </p>
            <p className="hero-contact">
              hudsonch@uchicago.edu · Chicago, IL
            </p>
          </div>

          <div className="hero-links">
            <a
              href="https://github.com/HD50N"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hudson-chung"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@huddychung"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              <FontAwesomeIcon icon={faYoutube} />
              YouTube
            </a>
          </div>
        </div>
      </div>

      <span className="hero-scroll-hint">Scroll</span>
    </section>
  )
}

import { useState } from 'react'
import ProjectEmbed, { resolveProjectEmbed } from './ProjectEmbed'

export default function ProjectCard({ project, index }) {
  const {
    name,
    sub,
    pitch,
    desc,
    tech,
    link,
    linkLabel,
    secondLink,
    secondLinkLabel,
  } = project

  const embed = resolveProjectEmbed(project)
  const embedOpenUrl =
    embed?.type === 'youtube' ? secondLink : embed?.type === 'website' ? link : null

  const [flipped, setFlipped] = useState(false)
  const [embedMounted, setEmbedMounted] = useState(false)

  const revealClass = `reveal reveal-d${Math.min(index + 1, 4)}`

  const handleFlip = () => {
    setEmbedMounted(true)
    setFlipped(true)
  }

  const primaryLinkFlips = embed?.type === 'website' && link
  const secondaryLinkFlips = embed?.type === 'youtube' && secondLink

  const projectLinks = (link || secondLink) && (
    <div className="project-card-actions">
      <div className="project-card-links">
        {link && !primaryLinkFlips && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            {linkLabel} <span className="project-arrow">↗</span>
          </a>
        )}
        {link && primaryLinkFlips && (
          <button type="button" className="project-link" onClick={handleFlip}>
            {linkLabel} <span className="project-arrow">↗</span>
          </button>
        )}
        {secondLink && !secondaryLinkFlips && (
          <a href={secondLink} target="_blank" rel="noopener noreferrer" className="project-link">
            {secondLinkLabel} <span className="project-arrow">↗</span>
          </a>
        )}
        {secondLink && secondaryLinkFlips && (
          <button type="button" className="project-link" onClick={handleFlip}>
            {secondLinkLabel} <span className="project-arrow">↗</span>
          </button>
        )}
      </div>
    </div>
  )

  const frontContent = (
    <>
      <div className="project-num">0{index + 1}</div>
      <div className="project-name">{name}</div>
      <div className="project-sub">{sub}</div>
      <blockquote className="project-pitch">{pitch}</blockquote>
      <p className="project-desc">{desc}</p>
      <div className="project-tags">
        {tech.map(t => (
          <span key={t} className="project-tag">
            {t}
          </span>
        ))}
      </div>
      {projectLinks}
    </>
  )

  if (!embed) {
    return <div className={`project-card ${revealClass}`}>{frontContent}</div>
  }

  return (
    <div className={`project-card-flip ${revealClass}`}>
      <div className={`project-card-inner${flipped ? ' is-flipped' : ''}`}>
        <div className="project-card-face project-card-front">{frontContent}</div>
        <div className="project-card-face project-card-back">
          <div className="project-back-header">
            <div className="project-name project-name--compact">{name}</div>
            <span className="project-embed-label project-embed-label--live">
              <span className="project-embed-live-dot" aria-hidden="true" />
              {embed.type === 'youtube' ? 'Demo' : 'Live preview'}
            </span>
          </div>
          {embedMounted && (
            <ProjectEmbed
              name={name}
              embed={embed}
              openUrl={embedOpenUrl}
              filled
            />
          )}
          <div className="project-card-actions">
            <button
              type="button"
              className="project-link"
              onClick={() => setFlipped(false)}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

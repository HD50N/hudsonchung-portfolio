const NON_EMBEDDABLE_HOSTS = [
  'github.com',
  'apps.apple.com',
  'youtube.com',
  'youtu.be',
]

export function youtubeIdFromUrl(url) {
  if (!url) return null
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/,
  )
  return match?.[1] ?? null
}

function isEmbeddableSite(url) {
  if (!url) return false
  try {
    const { protocol, hostname } = new URL(url)
    if (protocol !== 'https:') return false
    return !NON_EMBEDDABLE_HOSTS.some(host => hostname === host || hostname.endsWith(`.${host}`))
  } catch {
    return false
  }
}

/** Resolve embed from explicit config, demo link, or live site URL. */
export function resolveProjectEmbed(project) {
  if (project.embed) return project.embed

  const youtubeId = youtubeIdFromUrl(project.secondLink)
  if (youtubeId) return { type: 'youtube', id: youtubeId }

  if (isEmbeddableSite(project.link)) {
    return { type: 'website', src: project.link }
  }

  return null
}

export default function ProjectEmbed({ name, embed, openUrl, filled = false }) {
  if (!embed) return null

  return (
    <div
      className={`project-embed project-embed--${embed.type}${filled ? ' project-embed--filled' : ''}`}
    >
      {embed.type === 'youtube' ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${embed.id}`}
          title={`${name} demo`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <iframe
          src={embed.src}
          title={`${name} live preview`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
      {openUrl && (
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-embed-open"
        >
          Open full {embed.type === 'youtube' ? 'video' : 'site'} ↗
        </a>
      )}
    </div>
  )
}

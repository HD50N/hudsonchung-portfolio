const NAV_ITEMS = [
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
  { id: 'swimming',   label: 'Swimming'   },
]

const scrollTo = (e, id) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ activeSection, scrolled, menuOpen, setMenuOpen, theme, setTheme }) {
  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <nav className="navbar-inner" aria-label="Primary">
        <a
          href="#home"
          className="navbar-logo"
          style={{ textDecoration: 'none' }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          HC<span>.</span>
        </a>

        <ul className="navbar-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={(e) => scrollTo(e, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            className="theme-toggle"
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'light' : 'dark'}
          </button>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </header>
  )
}

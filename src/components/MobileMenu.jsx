const NAV_ITEMS = [
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
  { id: 'swimming',   label: 'Swimming'   },
]

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function MobileMenu({ open, setOpen }) {
  const handleNav = (e, id) => {
    e.preventDefault()
    scrollTo(id)
    setOpen(false)
  }

  return (
    <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
      <nav aria-label="Mobile">
        {NAV_ITEMS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={(e) => handleNav(e, id)}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}

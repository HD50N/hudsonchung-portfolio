const NAV_ITEMS = [
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
  { id: 'swimming',   label: 'Swimming'   },
]

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function MobileMenu({ open, setOpen }) {
  const handleNav = (id) => {
    scrollTo(id)
    setOpen(false)
  }

  return (
    <div className={`mobile-menu${open ? ' open' : ''}`}>
      <nav>
        {NAV_ITEMS.map(({ id, label }) => (
          <a key={id} onClick={() => handleNav(id)}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}

import { useState } from 'react'
import { type SectionId, SECTION_IDS } from '../hooks/useActiveSection'
import styles from './Nav.module.css'

const LABELS: Record<SectionId, string> = {
  hero: 'Home',
  about: 'About',
  experience: 'Experience',
  projects: 'Projects',
  skills: 'Skills',
  education: 'Education',
  contact: 'Contact',
}

interface NavProps {
  activeSection: SectionId | null
}

export function Nav({ activeSection }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = SECTION_IDS.filter((id) => id !== 'hero')

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          Reshma Revi
        </a>
        <ul className={styles.links}>
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? styles.active : undefined}
                aria-current={activeSection === id ? 'true' : undefined}
              >
                {LABELS[id]}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={styles.menuButton}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={styles.menuIcon} aria-hidden />
        </button>
      </nav>
      <div
        id="nav-menu"
        className={styles.mobileMenu}
        hidden={!menuOpen}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileLinks}>
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={closeMenu}>
                {LABELS[id]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

import styles from './Footer.module.css'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.nav} aria-label="Footer navigation">
          <a href="#hero">Top</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className={styles.copyright}>
          © {year} Reshma Revi. Built with React, Vite & Framer Motion.
        </p>
      </div>
    </footer>
  )
}

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { siteContent } from '../content/site'
import styles from './Hero.module.css'

export function Hero() {
  const reduced = useReducedMotion()
  const { name, title, tagline } = siteContent
  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        className={styles.inner}
        initial={reduced ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.title}>{title}</p>
        <p className={styles.tagline}>{tagline}</p>
        <div className={styles.ctas}>
          <a href="#projects" className={styles.primary}>
            View work
          </a>
          <a href="#contact" className={styles.secondary}>
            Get in touch
          </a>
        </div>
      </motion.div>
    </section>
  )
}

import { AnimatedSection } from './AnimatedSection'
import { siteContent } from '../content/site'
import styles from './About.module.css'

export function About() {
  const { about, name } = siteContent
  return (
    <AnimatedSection id="about" className={styles.section} as="section">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>About</h2>
        <div className={`${styles.content} ${!about.image ? styles.noImage : ""}`}>
          {about.image && (
            <div className={styles.imageWrap}>
              <img src={about.image} alt={`${name} profile`} className={styles.image} loading="lazy" />
            </div>
          )}
          <div className={styles.text}>
            <p className={styles.bio}>{about.bio}</p>
            <ul className={styles.highlights}>
              {about.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

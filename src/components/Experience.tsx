import { AnimatedSection, AnimatedList, AnimatedItem } from './AnimatedSection'
import { siteContent } from '../content/site'
import styles from './Experience.module.css'

export function Experience() {
  const { experience } = siteContent
  return (
    <AnimatedSection id="experience" className={styles.section} as="section">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Experience</h2>
        <AnimatedList className={styles.timeline}>
          {experience.map((item, i) => (
            <AnimatedItem key={i} className={styles.item}>
              <article>
                <div className={styles.marker} aria-hidden />
                <div className={styles.card}>
                <div className={styles.meta}>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.period}>{item.period}</p>
                </div>
                <ul className={styles.bullets}>
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
            </AnimatedItem>
          ))}
        </AnimatedList>
      </div>
    </AnimatedSection>
  )
}

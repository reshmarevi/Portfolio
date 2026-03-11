import { AnimatedSection, AnimatedList, AnimatedItem } from './AnimatedSection'
import { siteContent } from '../content/site'
import styles from './Education.module.css'

export function Education() {
  const { education } = siteContent

  return (
    <AnimatedSection id="education" className={styles.section} as="section">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Education</h2>
        <AnimatedList className={styles.list}>
          {education.map((item) => (
            <AnimatedItem key={`${item.institute}-${item.period}`} className={styles.item}>
              <article className={styles.card}>
                <h3 className={styles.institute}>{item.institute}</h3>
                <p className={styles.qualification}>{item.qualification}</p>
                <p className={styles.period}>{item.period}</p>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedList>
      </div>
    </AnimatedSection>
  )
}

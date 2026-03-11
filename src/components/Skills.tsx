import { AnimatedSection, AnimatedList, AnimatedItem } from './AnimatedSection'
import { siteContent } from '../content/site'
import styles from './Skills.module.css'

export function Skills() {
  const { skills } = siteContent
  return (
    <AnimatedSection id="skills" className={styles.section} as="section">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Skills</h2>
        <AnimatedList className={styles.list}>
          {skills.map((skill) => (
            <AnimatedItem key={skill} className={styles.item}>
              {skill}
            </AnimatedItem>
          ))}
        </AnimatedList>
      </div>
    </AnimatedSection>
  )
}

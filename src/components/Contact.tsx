import { AnimatedSection } from './AnimatedSection'
import { siteContent } from '../content/site'
import styles from './Contact.module.css'

export function Contact() {
  const { contact } = siteContent

  return (
    <AnimatedSection id="contact" className={styles.section} as="section">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Contact</h2>
        <p className={styles.intro}>
          Open to new opportunities and conversations. Reach out via phone, email, or LinkedIn.
        </p>
        <div className={styles.links}>
          {contact.phone && <p className={styles.phone}>{contact.phone}</p>}
          <a href={`mailto:${contact.email}`} className={styles.email}>
            {contact.email}
          </a>
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {contact.twitter && (
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}

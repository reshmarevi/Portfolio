import { AnimatedSection, AnimatedList, AnimatedItem } from './AnimatedSection'
import { siteContent } from '../content/site'
import styles from './Projects.module.css'

export function Projects() {
  const { projects } = siteContent

  return (
    <AnimatedSection id="projects" className={styles.section} as="section">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Projects</h2>
        <AnimatedList className={styles.grid}>
          {projects.map((project) => (
            <AnimatedItem key={project.id} className={styles.card}>
              <article className={styles.cardInner}>
                {project.image && (
                  <div className={styles.imageWrap}>
                    <img src={project.image} alt={`${project.title} preview`} className={styles.image} loading="lazy" />
                  </div>
                )}
                <div className={styles.body}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.tech}>
                    {project.tech.map((tech) => (
                      <span key={tech} className={styles.tag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.liveUrl || project.repoUrl) && (
                    <div className={styles.links}>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live
                        </a>
                      )}
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          Repo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedList>
      </div>
    </AnimatedSection>
  )
}

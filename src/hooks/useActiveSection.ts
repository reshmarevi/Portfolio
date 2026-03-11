import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'] as const
export type SectionId = (typeof SECTION_IDS)[number]

export function useActiveSection(): SectionId | null {
  const [activeId, setActiveId] = useState<SectionId | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id as SectionId
          if (SECTION_IDS.includes(id)) {
            setActiveId(id)
            break
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeId
}

export { SECTION_IDS }

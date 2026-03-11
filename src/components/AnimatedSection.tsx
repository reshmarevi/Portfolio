import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

interface AnimatedSectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  as?: 'section' | 'div'
}

export function AnimatedSection({ children, id, className, as = 'section' }: AnimatedSectionProps) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={reduced ? undefined : defaultVariants}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </Component>
  )
}

interface AnimatedListProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedList({ children, className }: AnimatedListProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedItemProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedItem({ children, className }: AnimatedItemProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={reduced ? undefined : defaultVariants}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'

interface ComponentProps {
  children: React.ReactNode
}

const SpringWrapper = ({ children }: ComponentProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { type: 'spring', stiffness: 300, damping: 10 },
      }}
      whileFocus={{
        scale: 0.95,
      }}
    >
      {children}
    </motion.div>
  )
}

export default SpringWrapper

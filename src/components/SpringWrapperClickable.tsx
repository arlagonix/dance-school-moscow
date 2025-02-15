'use client'

import { motion } from 'framer-motion'

interface ComponentProps {
  children: React.ReactNode
  className?: string
}

const SpringWrapperClickable = ({ children, className }: ComponentProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 10 },
      }}
      whileTap={{
        scale: 0.97,
      }}
    >
      {children}
    </motion.div>
  )
}

export default SpringWrapperClickable

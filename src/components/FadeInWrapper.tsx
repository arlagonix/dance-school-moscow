'use client'

import { motion } from 'framer-motion'

interface ComponentProps {
  children: React.ReactNode
  delay?: number
}

const FadeInWrapper = ({ children, delay = 0 }: ComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0 }} // start with opacity 0 and slightly shifted down
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // animate to full opacity and original position
      transition={{ delay, duration: 0.5, ease: 'easeOut' }} // customize the transition
      viewport={{ once: true, amount: 0.1 }} // trigger animation once when 50% of the component is visible
    >
      {children}
    </motion.div>
  )
}

export default FadeInWrapper

'use client'

import ReactLenis, { useLenis } from 'lenis/react'

interface ComponentProps {
  children: React.ReactNode
}

const LenisWrapper = ({ children }: ComponentProps) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis
      options={{
        duration: 1.5,
      }}
      root
    >
      {children}
    </ReactLenis>
  )
}

export default LenisWrapper

import { PropsWithChildren } from 'react'

const CardsWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-6">{children}</div>
  )
}

export default CardsWrapper

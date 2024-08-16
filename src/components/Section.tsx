type SectionProps = {
  children?: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
  return <section className="mobile:mt-6 desktop:mt-12">{children}</section>
}

export default Section

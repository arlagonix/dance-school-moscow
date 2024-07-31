type SectionProps = {
  children?: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
  return <section className="mt-12">{children}</section>
}

export default Section

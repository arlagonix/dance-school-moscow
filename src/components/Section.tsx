type SectionProps = {
  children?: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return <section className="mt-16">{children}</section>;
};

export default Section;

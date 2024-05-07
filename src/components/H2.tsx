type H2Props = {
  children: React.ReactNode;
};

// Copied from https://ui.shadcn.com/docs/components/typography#h2
export default function H2({ children }: H2Props) {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center">
      {children}
    </h2>
  );
}

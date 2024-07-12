type H1Props = {
  children?: React.ReactNode
}

const H1 = ({ children }: H1Props) => {
  return (
    <h1 className="text-center text-5xl font-extrabold mobile:text-3xl">
      {children}
    </h1>
  )
}

export default H1

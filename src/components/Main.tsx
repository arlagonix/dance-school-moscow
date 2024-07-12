import Footer from './Footer'

type MenuProps = {
  children?: React.ReactNode
}

const Main = ({ children }: MenuProps) => {
  return (
    <>
      <main className="relative mx-auto mt-16 w-[min(100%_-_16px*2,768px)] mobile:mt-24">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Main

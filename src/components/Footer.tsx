import FadeInWrapper from './FadeInWrapper'

const Footer = () => {
  return (
    <FadeInWrapper>
      <footer className="mb-4 mt-6 flex flex-col items-center gap-2 text-center text-neutral-500">
        <div className="h-px w-[min(100%,768px)] bg-slate-200" />
        <p className="mt-2 text-sm leading-7">
          ИП Самохвалова Д.В., ИНН 971504851467, ОГРНИП 316774600521655
        </p>
        <p className="text-sm leading-7">
          +7 (499) 283-77-93, danceschool.moscow@mail.ru
        </p>
        <p className="text-sm leading-7">
          © Школа танцев D.A.N.C.E., 2017-2024
        </p>
      </footer>
    </FadeInWrapper>
  )
}

export default Footer

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type ClassSignUpProps = {
  description?: string
  isIncludeContract?: boolean
}

const ClassSignUp = ({
  description,
  isIncludeContract = false,
}: ClassSignUpProps) => {
  return (
    <div className="mt-8 flex flex-col gap-4">
      <p className="text-center">
        {description ??
          'Начни танцевать хастл бесплатно: запишись на бесплатный пробный урок'}
      </p>
      <form className="flex gap-4 mobile:flex-wrap">
        <Input className="bg-white" placeholder="Телефон *" />
        <Input className="bg-white" placeholder="Имя и Фамилия" />
        <Button className="mobile:w-full">Хочу танцевать</Button>
      </form>
      <div className="mx-auto text-center">
        <Link
          href="/confidentiality_policy.pdf"
          target="_blank"
          className="self-center whitespace-nowrap text-center text-sm text-neutral-500 underline transition-colors hover:bg-slate-200"
        >
          Политика конфиденциальности
        </Link>
        {isIncludeContract && (
          <>
            ,{' '}
            <Link
              href="/contract.pdf"
              target="_blank"
              className="self-center whitespace-nowrap text-center text-sm text-neutral-500 underline transition-colors hover:bg-slate-200"
            >
              Договор - публичная оферта
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default ClassSignUp

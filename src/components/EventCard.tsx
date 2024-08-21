import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Markdown from 'react-markdown'

type PriceCardProps = {
  title: string
  subtitle?: string
  description?: string
  link?: string
  buttonText?: string
}

const EventCard = ({
  title,
  subtitle,
  description,
  link,
  buttonText,
}: PriceCardProps) => {
  return (
    <article className="flex max-w-[360px] flex-1 basis-[360px] flex-col rounded-xl border border-slate-300 bg-white transition-shadow hover:shadow-xl">
      <div className="flex flex-col items-center border-b border-slate-300 px-6 py-6">
        <h3 className="text-center text-xl font-bold uppercase">{title}</h3>
        {subtitle !== undefined && (
          <p className="text-center text-sm text-slate-500">{subtitle}</p>
        )}
      </div>
      {description && (
        <div className="m-6 flex flex-grow flex-col justify-center text-center leading-normal text-slate-500">
          <Markdown className="prose">{description}</Markdown>
        </div>
      )}
      {link !== undefined && (
        <div className="border-t border-slate-300 px-6 py-6">
          <Link
            href={link}
            className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
          >
            {buttonText ?? 'Открыть страницу мероприятия'}
          </Link>
        </div>
      )}
    </article>
  )
}

export default EventCard

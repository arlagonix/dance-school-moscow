import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type PriceCardProps = {
  title: string
  subtitle?: string
  price: string
  priceTiming?: string
  priceUnits?: string
  badPrice?: string
  avgPricePerClass?: string
  avgPricePerClassUnits?: string
  description?: string | string[]
  purchaseLink?: string
}

const PriceCard = ({
  title,
  subtitle,
  price,
  priceTiming,
  priceUnits,
  badPrice,
  avgPricePerClass,
  avgPricePerClassUnits = 'в час',
  description,
  purchaseLink,
}: PriceCardProps) => {
  return (
    <article className="flex max-w-[360px] flex-1 basis-[360px] flex-col rounded-xl border border-slate-300 bg-white transition-shadow hover:shadow-xl">
      <div className="my-6 flex flex-col items-center px-6">
        <h3 className="text-center text-xl font-bold uppercase">{title}</h3>
        {subtitle !== undefined && (
          <p className="text-center text-sm text-slate-500">{subtitle}</p>
        )}
      </div>
      <div className="flex flex-col items-center border-b border-t border-slate-300 bg-blue-50 p-6">
        <div className="flex items-end gap-2">
          <p className="text-3xl">
            <span className="font-black">{price} ₽</span>{' '}
            {priceTiming !== undefined && priceTiming}
          </p>
          {priceUnits !== undefined && <p>{priceUnits}</p>}
          {badPrice !== undefined && (
            <p className="text-xl font-black text-slate-400 line-through">
              {badPrice} ₽
            </p>
          )}
        </div>
        {avgPricePerClass !== undefined && (
          <p className="mt-2 text-xl">
            ≈ <span className="font-black">{avgPricePerClass} ₽</span>{' '}
            {avgPricePerClassUnits}
          </p>
        )}
      </div>
      {description && (
        <div className="m-6 flex flex-grow flex-col justify-center text-center leading-normal text-slate-500">
          {Array.isArray(description) &&
            description.map((item, index) => (
              <p key={index} className="leading-7">
                {item}
              </p>
            ))}
          {!Array.isArray(description) && description !== undefined && (
            <p className="leading-7">{description}</p>
          )}
          {/* <p>{description}</p> */}
        </div>
      )}
      {price !== '0' && purchaseLink !== undefined && (
        <div className="mx-6 mb-6">
          <Link
            href={purchaseLink}
            className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
          >
            Купить
          </Link>
        </div>
      )}
      {price === '0' && (
        <div className="mx-6 mb-6">
          <Button disabled className="w-full">
            Бесплатно
          </Button>
        </div>
      )}
    </article>
  )
}

export default PriceCard

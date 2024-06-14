import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

type PriceCardProps = {
  title: string
  subtitle?: string
  price: string
  isPricePerHour?: boolean
  badPrice?: string
  avgPricePerClass?: string
  description?: string
  purchaseLink?: string
}

const PriceCard = ({
  title,
  subtitle,
  price,
  isPricePerHour = false,
  badPrice,
  description,
  purchaseLink,
}: PriceCardProps) => {
  return (
    <article>
      <div>
        <h3>{title}</h3>
        {subtitle !== undefined && <p>{subtitle}</p>}
        <div>
          <div>
            <p>{price} ₽</p>
            {isPricePerHour && <p>в час</p>}
            {badPrice !== undefined && <p>{badPrice} ₽</p>}
          </div>
        </div>
      </div>
      {description && (
        <div>
          <p>{description}</p>
        </div>
      )}
      {purchaseLink !== undefined && (
        <div>
          <Link
            href={purchaseLink}
            className={buttonVariants({ variant: 'default' })}
          >
            Купить
          </Link>
        </div>
      )}
    </article>
  )
}

export default PriceCard

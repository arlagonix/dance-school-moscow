import { ShopItemType } from '@/data/shop'
import Image from 'next/image'
import Markdown from 'react-markdown'
import { Button } from './ui/button'

const ShopItemCard = ({ imgSrc, name, description, price }: ShopItemType) => {
  return (
    <article className="flex gap-6 mobile:flex-col mobile:gap-4">
      <Image
        src={imgSrc}
        width={512}
        height={512}
        alt={name}
        className="aspect-square h-auto w-[200px] rounded-2xl border border-slate-200 object-cover mobile:w-full"
      />
      <div className="grow">
        <h2 className="text-xl font-semibold">{name}</h2>
        <Markdown className="prose mt-6 mobile:mt-4">{description}</Markdown>
      </div>
      <div>
        <p className="text-right text-xl font-bold mobile:text-left">
          {price} ₽
        </p>
        <Button className="mt-6 mobile:mt-4 mobile:w-full">Написать</Button>
      </div>
    </article>
  )
}

export default ShopItemCard

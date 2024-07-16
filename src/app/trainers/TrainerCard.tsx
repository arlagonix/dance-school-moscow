import Image from 'next/image'
import { Fragment } from 'react'
import Link from 'next/link'
import { TrainerType } from '@/data/trainers/types'

const RankBadge = ({ rank }: { rank: string }) => {
  return (
    <div className="rounded-lg border border-neutral-900 px-3 py-[0.375rem]">
      {rank}
    </div>
  )
}

const TrainerCard = ({
  name,
  imgSrc,
  description,
  ranks,
  slug,
}: TrainerType) => {
  return (
    <Link
      href={`trainers/${slug}`}
      className="group flex flex-col no-underline transition active:scale-[0.98]"
    >
      <Image
        src={imgSrc}
        width={2000}
        height={2000}
        alt={name}
        className="block aspect-square w-full rounded-2xl border border-neutral-200 object-cover shadow transition-shadow group-hover:shadow-xl"
        draggable={false}
      />
      <h2 className="mt-4 text-xl font-semibold group-hover:underline mobile:underline">
        {name}
      </h2>
      {description !== undefined && description.length !== 0 && (
        <p className="mt-2 flex-grow leading-[170%] text-slate-500">
          {description.map((item, index, arr) => (
            <Fragment key={index}>
              {item}
              {index !== arr.length - 1 && <br />}
            </Fragment>
          ))}
        </p>
      )}
      {ranks !== undefined && ranks.length !== 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {ranks.map((item) => (
            <RankBadge key={item} rank={item} />
          ))}
        </div>
      )}
    </Link>
  )
}

export default TrainerCard

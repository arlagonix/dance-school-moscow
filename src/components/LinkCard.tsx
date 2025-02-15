import Link from 'next/link'
import H3 from './H3'
import SpringWrapperClickable from './SpringWrapperClickable'

export type LinkCardType = {
  href: string
  icon: React.ReactNode
  title: string
  description: string
}

const LinkCard = ({ href, icon, title, description }: LinkCardType) => {
  return (
    <SpringWrapperClickable className="h-full">
      <Link
        href={href}
        className="group flex h-full flex-col gap-4 rounded-2xl border border-neutral-300 bg-white p-6 drop-shadow transition hover:drop-shadow-xl"
      >
        {icon}
        <H3 className="group-hover:underline mobile:underline">{title}</H3>
        <p className="leading-7 text-neutral-500">{description}</p>
      </Link>
    </SpringWrapperClickable>
  )
}

export default LinkCard

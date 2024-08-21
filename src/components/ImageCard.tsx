import H3 from './H3'

export type LinkCardType = {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

const ImageCard = ({ icon, title, description }: Omit<LinkCardType, 'id'>) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-neutral-300 bg-white p-6">
      {icon}
      <H3>{title}</H3>
      <p className="leading-7 text-neutral-500">{description}</p>
    </div>
  )
}

export default ImageCard

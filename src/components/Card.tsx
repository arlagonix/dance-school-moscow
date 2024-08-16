import { cn } from '@/lib/utils'

const Card = ({
  title,
  description,
  customStyles,
}: {
  title: string
  description?: string
  customStyles?: string
}) => {
  return (
    <div
      className={cn(
        'flex max-w-[372px] flex-[0_1] basis-[372px] flex-col justify-center gap-2 rounded-xl border border-slate-100 bg-white p-6 shadow-md mobile:max-w-[100%] mobile:basis-[100%]',
        customStyles
      )}
    >
      <p className="text-center text-xl">
        <strong>{title}</strong>
      </p>
      {description && (
        <p className="text-center text-slate-500">{description}</p>
      )}
    </div>
  )
}

export default Card

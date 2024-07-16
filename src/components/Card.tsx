const Card = ({
  title,
  description,
}: {
  title: string
  description?: string
}) => {
  return (
    <div className="flex max-w-[372px] flex-[0_1] basis-[372px] flex-col justify-center gap-2 rounded-xl border border-slate-100 bg-white p-6 shadow-md mobile:max-w-[45%] mobile:basis-[45%]">
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

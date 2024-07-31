import Breadcrumbs from '@/components/Breadcrumbs'
import ClassSignUp from '@/components/ClassSignUp'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import { Button } from '@/components/ui/button'
import { schedulesData } from '@/data/schedule'
import { trainersData } from '@/data/trainers'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'

const ScheduleGroupPage = ({
  params: { slug },
}: {
  params: { slug: string }
}) => {
  const scheduleGroup = schedulesData.find((item) => item.slug === slug)
  if (scheduleGroup === undefined) notFound()
  return (
    <Main>
      <H1>{scheduleGroup.title}</H1>
      <Breadcrumbs
        breadcrumbsData={[
          {
            id: 1,
            title: 'Главная',
            link: '/',
          },
          {
            id: 2,
            title: 'Расписание',
            link: '/schedule',
          },
          {
            id: 3,
            title: scheduleGroup.title,
          },
        ]}
      />
      <ClassSignUp description="Пока ты думаешь, другие пробуют и у них получается. И у тебя получится!" />
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {scheduleGroup.schedules.map((item, index) => (
          <article
            key={index}
            className="flex max-w-[360px] flex-1 basis-[360px] flex-col overflow-hidden rounded-xl border border-slate-300 bg-white transition-shadow hover:shadow-xl"
          >
            <div className="my-6 flex flex-col items-center px-6">
              <div className="flex items-center gap-3">
                <h3 className="text-center text-xl font-bold uppercase">
                  {item.title}
                </h3>
                {item.isNew && (
                  <div className="rounded-full bg-neutral-900 px-3 py-1 text-white">
                    NEW
                  </div>
                )}
              </div>
              {item.subtitle !== undefined && (
                <p className="mt-2 text-center text-slate-500">
                  {item.subtitle}
                </p>
              )}
            </div>
            <div className="flex grow flex-col justify-center gap-4 border-t border-t-slate-300 px-6 py-6">
              {item?.description?.map((item, itemIndex) => {
                return (
                  <p
                    key={itemIndex}
                    className="text-center text-lg font-semibold"
                  >
                    {item.map((line, lineIndex, arr) => (
                      <Fragment key={lineIndex}>
                        {line} {lineIndex !== arr.length - 1 && <br />}
                      </Fragment>
                    ))}
                  </p>
                )
              })}
              {item.trainerSlugs !== undefined && (
                <div className="flex flex-col">
                  {item.trainerSlugs.map((slug) => {
                    const trainer = trainersData.find(
                      (trainer) => trainer.slug === slug
                    )
                    if (trainer === undefined) return null
                    return (
                      <Link
                        key={slug}
                        className="flex items-center justify-center gap-2 self-center rounded p-1 transition-colors hover:bg-slate-200"
                        href={`/trainers/${slug}`}
                      >
                        <Image
                          src={trainer.imgSrc}
                          width={1000}
                          height={1000}
                          alt={trainer.name}
                          className="block h-8 w-8 self-center rounded-full object-cover shadow"
                        />
                        <div className="underline">{trainer.name}</div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
            {item.info !== undefined && item.info.length !== 0 && (
              <div className="flex grow items-center justify-center border-t border-t-slate-300 bg-slate-100 p-6">
                <p className="text-center text-lg font-semibold text-neutral-900">
                  {item.info.map((item, index, arr) => {
                    return (
                      <Fragment key={index}>
                        {item} {index !== arr.length - 1 && <br />}
                      </Fragment>
                    )
                  })}
                </p>
              </div>
            )}
            {item.isButton && (
              <div className="border-t border-t-slate-300 p-6">
                <Button className="w-full">Записаться</Button>
              </div>
            )}
          </article>
        ))}
      </div>
    </Main>
  )
}

export default ScheduleGroupPage

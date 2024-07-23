import Breadcrumbs, { type BreadcrumbType } from '@/components/Breadcrumbs'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import { schedulesData } from '@/data/schedule'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'

const breadCrumbsData: BreadcrumbType[] = [
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
]

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
          ...breadCrumbsData,
          {
            id: 3,
            title: scheduleGroup.title,
          },
        ]}
      />
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {scheduleGroup.schedules.map((item, index) => (
          <article
            key={index}
            className="flex max-w-[360px] flex-1 basis-[360px] flex-col rounded-xl border border-slate-300 bg-white transition-shadow hover:shadow-xl"
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
                <p className="mt-6 text-center text-slate-500">
                  {item.subtitle}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-6 border-t border-t-slate-300 px-6 py-6">
              {item?.description?.map((item, itemIndex) => {
                return (
                  <p key={itemIndex} className="text-center">
                    {item.map((line, lineIndex, arr) => (
                      <Fragment key={lineIndex}>
                        {line} {lineIndex !== arr.length - 1 && <br />}
                      </Fragment>
                    ))}
                  </p>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </Main>
  )
}

export default ScheduleGroupPage

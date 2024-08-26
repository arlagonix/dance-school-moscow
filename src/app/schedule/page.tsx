import Breadcrumbs from '@/components/Breadcrumbs'
import ClassSignUp from '@/components/ClassSignUp'
import H1 from '@/components/H1'
import LinkCard from '@/components/LinkCard'
import Main from '@/components/Main'

import { schedulesData } from '@/data/schedule'

const basePath = '/schedule'

const SchedulePage = () => {
  return (
    <Main>
      <H1>Расписаний занятий</H1>
      <Breadcrumbs
        breadcrumbsData={[
          {
            title: 'Главная',
            link: '/',
          },
          {
            title: 'Расписание занятий',
          },
        ]}
      />
      <ClassSignUp description="Если не знаете, что выбрать, вы всегда можете связаться с нами и задать все вопросы:" />
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-8">
        {schedulesData.map((item) => (
          <LinkCard
            key={item.slug}
            href={`${basePath}/${item.slug}`}
            icon={item.cardIcon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Main>
  )
}

export default SchedulePage

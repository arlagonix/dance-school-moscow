import Breadcrumbs, { BreadcrumbType } from '@/components/Breadcrumbs'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import { trainersData } from '../../data/trainersData'
import TrainerCard from './TrainerCard'

const breadCrumbsData: BreadcrumbType[] = [
  {
    id: 1,
    title: 'Главная',
    link: '/',
  },
  {
    id: 2,
    title: 'Преподаватели',
  },
]

const TrainersPage = () => {
  return (
    <Main>
      <H1>Преподаватели</H1>
      <Breadcrumbs breadcrumbsData={breadCrumbsData} />
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-16">
        {trainersData.map((trainer) => (
          <TrainerCard
            key={trainer.name}
            name={trainer.name}
            description={trainer.description}
            ranks={trainer.ranks}
            imgSrc={trainer.imgSrc}
            slug={trainer.slug}
          />
        ))}
      </div>
    </Main>
  )
}

export default TrainersPage

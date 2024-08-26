import Breadcrumbs from '@/components/Breadcrumbs'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import { trainersData } from '../../data/trainers'
import TrainerCard from './TrainerCard'

const TrainersPage = () => {
  return (
    <Main>
      <H1>Преподаватели</H1>
      <Breadcrumbs
        breadcrumbsData={[
          {
            title: 'Главная',
            link: '/',
          },
          {
            title: 'Преподаватели',
          },
        ]}
      />
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

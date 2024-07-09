import Breadcrumbs, { BreadcrumbType } from '@/components/Breadcrumbs'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import P from '@/components/P'
import Section from '@/components/Section'
import { trainersData } from '@/data/trainersData'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const breadCrumbsData: BreadcrumbType[] = [
  {
    id: 1,
    title: 'Главная',
    link: '/',
  },
  {
    id: 2,
    title: 'Преподаватели',
    link: '/trainers',
  },
]

const TrainerPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const trainer = trainersData.find((item) => item.slug === slug)
  if (trainer === undefined) notFound()
  return (
    <Main>
      <H1>{trainer.name}</H1>
      <Breadcrumbs
        breadcrumbsData={[
          ...breadCrumbsData,
          {
            id: 3,
            title: trainer.name,
          },
        ]}
      />
      <Image
        src={trainer.imgSrc}
        width={2000}
        height={2000}
        alt={trainer.name}
        className="mt-8 block aspect-[1.5/1] w-full rounded-2xl border border-neutral-200 object-cover shadow transition-shadow group-hover:shadow-xl"
        draggable={false}
      />
      <Section>
        <H2>О преподавателе</H2>
        {trainer?.pageDescription?.map((item) => (
          <P key={item} className="text-center">
            {item}
          </P>
        ))}
      </Section>
    </Main>
  )
}

export default TrainerPage

import Breadcrumbs, { BreadcrumbType } from '@/components/Breadcrumbs'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import P from '@/components/P'
import Section from '@/components/Section'
import { trainersData } from '@/data/trainersData'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PropsWithChildren } from 'react'
import ImagesCarousel from './(components)/ImagesCarousel'
import VideoCarousel from './(components)/VideoCarousel'

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

const CardsWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-6">{children}</div>
  )
}

const Card = ({
  title,
  description,
}: {
  title: string
  description?: string
}) => {
  return (
    <div className="flex max-w-[240px] flex-[0_1] basis-[240px] flex-col justify-center gap-2 rounded-xl border border-slate-100 bg-white p-6 shadow-md mobile:max-w-[45%] mobile:basis-[45%]">
      <p className="text-center text-xl">
        <strong>{title}</strong>
      </p>
      {description && (
        <p className="text-center text-slate-500">{description}</p>
      )}
    </div>
  )
}

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
        {trainer.aboutCards !== undefined && (
          <CardsWrapper>
            {trainer.aboutCards.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </CardsWrapper>
        )}
      </Section>
      {trainer.achievements !== undefined && (
        <Section>
          <H2>Достижения</H2>
          <CardsWrapper>
            {trainer?.achievements?.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </CardsWrapper>
        </Section>
      )}
      <Section>
        <H2>Фото</H2>
        <ImagesCarousel />
      </Section>
      <Section>
        <H2>Видео</H2>
        <VideoCarousel />
      </Section>
    </Main>
  )
}

export default TrainerPage

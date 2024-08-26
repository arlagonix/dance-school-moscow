import Breadcrumbs from '@/components/Breadcrumbs'
import Card from '@/components/Card'
import CardsWrapper from '@/components/CardsWrapper'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import ImagesCarousel from '@/components/ImagesCarousel'
import Main from '@/components/Main'
import Section from '@/components/Section'
import SocialMediaCard from '@/components/SocialMediaCard'
import VideoCarousel from '@/components/VideoCarousel'
import { trainersData } from '@/data/trainers'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'

const TrainerPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const trainer = trainersData.find((item) => item.slug === slug)
  if (trainer === undefined) notFound()
  return (
    <Main>
      <H1>{trainer.name}</H1>
      <Breadcrumbs
        breadcrumbsData={[
          {
            title: 'Главная',
            link: '/',
          },
          {
            title: 'Преподаватели',
            link: '/trainers',
          },
          {
            title: trainer.name,
          },
        ]}
      />
      <Image
        src={trainer.imgSrc}
        width={2000}
        height={2000}
        alt={trainer.name}
        className="mt-8 block w-full rounded-2xl border border-neutral-200 object-cover shadow transition-shadow group-hover:shadow-xl mobile:aspect-[1/1] desktop:aspect-[1.5/1]"
        draggable={false}
      />
      <Section>
        <H2>О преподавателе</H2>
        {trainer?.pageDescription?.map((item) => (
          <p key={item} className="mt-4 text-center">
            {item}
          </p>
        ))}
        {trainer.markDownPageDescription !== undefined && (
          // https://github.com/tailwindlabs/tailwindcss-typography
          <Markdown className="prose mt-4">
            {trainer.markDownPageDescription}
          </Markdown>
        )}
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
      {trainer.socialMedia !== undefined &&
        trainer.socialMedia.length !== 0 && (
          <Section>
            <H2>Контакты, профили</H2>
            <CardsWrapper>
              {trainer.socialMedia.map((item, index) => (
                <SocialMediaCard
                  key={index}
                  id={item.id}
                  type={item.type}
                  url={item.url}
                />
              ))}
            </CardsWrapper>
          </Section>
        )}
      {trainer.photos !== undefined && (
        <Section>
          <H2>Фото</H2>
          <ImagesCarousel photos={trainer.photos} />
        </Section>
      )}
      {trainer.videos !== undefined && (
        <Section>
          <H2>Видео</H2>
          <VideoCarousel videos={trainer.videos} />
        </Section>
      )}
    </Main>
  )
}

export default TrainerPage

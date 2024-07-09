import H2 from '@/components/H2'
import P from '@/components/P'
import Section from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'
import { SVGProps } from 'react'

import MoneyBagIcon from '@/components/svg/icons_big/money_bag.svg'
import CalendarIcon from '@/components/svg/icons_big/calendar.svg'
import ScholarIcon from '@/components/svg/icons_big/scholar.svg'
import ReviewIcon from '@/components/svg/icons_big/review.svg'
import DollarIcon from '@/components/svg/icons_big/dollar.svg'
import ScholarHatIcon from '@/components/svg/icons_big/scholar_hat.svg'
import PirateMapIcon from '@/components/svg/icons_big/pirate_map.svg'
import H3 from '@/components/H3'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Main from '@/components/Main'
import H1 from '@/components/H1'
import ClassSignUp from '@/components/ClassSignUp'

type LinkCardType = {
  id: number
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

const linkCardProps: SVGProps<SVGElement> = {
  width: 64,
  height: 64,
}

const linkCardsData: LinkCardType[] = [
  {
    id: 1,
    title: 'Стоимость занятий',
    description: 'Абонементы на посещение занятий, способы оплаты, акции',
    href: '/pricing',
    icon: <MoneyBagIcon {...linkCardProps} />,
  },
  {
    id: 2,
    title: 'Расписание занятий',
    description:
      'Здесь вы узнаете, какие у нас есть виды занятий и сможете подобрать те, которые наиболее подойдут вашим навыкам и графику',
    href: '#',
    icon: <CalendarIcon {...linkCardProps} />,
  },
  {
    id: 3,
    title: 'Преподаватели',
    description:
      'Здесь вы узнаете, кто преподает в нашей школе, и сможете найти того, с кем вам будет наиболее комфортно заниматься.',
    href: '/trainers',
    icon: <ScholarIcon {...linkCardProps} />,
  },
  {
    id: 4,
    title: 'Отзывы',
    description:
      'Здесь вы узнаете, что о нас думают люди, которые занимаются или раньше занимались в нашей школе.',
    href: '#',
    icon: <ReviewIcon {...linkCardProps} />,
  },
  {
    id: 5,
    title: 'Аренда залов',
    description:
      'Информация о доступных залах, когда можно арендовать, стоимость аренды, с кем связаться по деталям аренды',
    href: '#',
    icon: <DollarIcon {...linkCardProps} />,
  },
  {
    id: 6,
    title: 'О школе',
    description:
      'Здесь вы узнаете, чем живет школа, сможете посмотреть на кадры с наших занятий, выступления наших учеников, фото и видео с наших мероприятий.',
    href: '#',
    icon: <ScholarHatIcon {...linkCardProps} />,
  },
  {
    id: 7,
    title: 'Как нас найти',
    description:
      'Наш адрес и как добраться до нас от ближайших станций метро. Есть даже видео путь!',
    href: '#',
    icon: <PirateMapIcon {...linkCardProps} />,
  },
]

type QuestionType = {
  id: number
  question: string
  answer: string
}

const questionsData: QuestionType[] = [
  {
    id: 1,
    question: 'Что такое хастл?',
    answer:
      'Парный социальный танец, который основан на взаимодействии и импровизации.',
  },
  {
    id: 2,
    question: 'У меня получится?',
    answer:
      'Хастл очень прост в изучении, так как не требует специальной подготовки и особых физических возможностей.',
  },
  {
    id: 3,
    question: 'Что делать, если я без пары?',
    answer:
      'Во время занятия происходит постоянная смена пар, поэтому партнер / партнерша найдется для всех.',
  },
  {
    id: 4,
    question: 'В чем приходить на занятие?',
    answer:
      'Любая удобная спортивная или повседневная одежда, которая не сковывает движения, и сменная обувь на мягкой подошве.',
  },
  {
    id: 5,
    question: 'Под какую музыку танцуют?',
    answer:
      'Поп, RnB, хип-хоп, электро, диско, джаз, латино, даже рок и классика - в хастле практически нет музыкальных границ.',
  },
  {
    id: 6,
    question: 'Где танцуют?',
    answer:
      'Хастл - дискотеки проходят со вторника по воскресенье в клубах Москвы, а летом на набережной в Нескучном саду.',
  },
]

export default function HomePage() {
  return (
    <>
      <Main>
        <H1>D.A.N.C.E. School</H1>
        <p className="mt-4 text-center text-neutral-500">
          Мы учим танцевать в паре
        </p>
        <ClassSignUp />
        <Section>
          <H2>Кто мы?</H2>
          <P>
            D.A.N.C.E. - это школа танцев для взрослых, в которой обучают хастлу
            и дискофоксу. У нас есть и группы для детей. Хастл - это парный
            социальный танец, который основан на взаимодействии и импровизации.
            Он не требует особых физических данных и подходит для людей любого
            возраста. Дискофокс - это разновидность хастла. Текст такой себе, на
            троечку, надо бы получше что-то придумать.
          </P>
          <Image
            src="/main.jpg"
            width={2560}
            height={1600}
            alt="Люди, которые вместе создают школу D.A.N.C.E"
            className="mt-4 h-auto w-full rounded-lg object-cover"
            draggable={false}
          />
        </Section>
        <Section>
          <H2>Полезная информация</H2>
          <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-8">
            {linkCardsData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col gap-4 rounded-2xl border border-neutral-300 bg-white p-6 drop-shadow transition hover:drop-shadow-xl"
              >
                {item.icon}
                <H3 className="group-hover:underline">{item.title}</H3>
                <p className="leading-7 text-neutral-500">{item.description}</p>
              </Link>
            ))}
          </div>
        </Section>
        <Section>
          <H2>Ответы на вопросы</H2>
          <Accordion type="single" collapsible className="mt-6">
            {questionsData.map((item) => (
              <AccordionItem value={`item-${item.id}`} key={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      </Main>
    </>
  )
}

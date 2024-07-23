import Breadcrumbs, { BreadcrumbType } from '@/components/Breadcrumbs'
import ClassSignUp from '@/components/ClassSignUp'
import H1 from '@/components/H1'
import LinkCard, { LinkCardType } from '@/components/LinkCard'
import Main from '@/components/Main'
import { SVGProps } from 'react'

import StartIcon from '@/components/svg/icons_big/start.svg'
import StarIcon from '@/components/svg/icons_big/star_in_circle.svg'
import CupIcon from '@/components/svg/icons_big/cup_with_star.svg'
import DumbellsIcon from '@/components/svg/icons_big/dumbells.svg'
import SoloIcon from '@/components/svg/icons_big/solo.svg'
import KidIcon from '@/components/svg/icons_big/little_one.svg'
import { schedulesData } from '@/data/schedule'

const breadCrumbsData: BreadcrumbType[] = [
  {
    id: 1,
    title: 'Главная',
    link: '/',
  },
  {
    id: 2,
    title: 'Расписание занятий',
  },
]

const linkCardProps: SVGProps<SVGElement> = {
  width: 64,
  height: 64,
}

const basePath = '/schedule'

const linkCardsData: LinkCardType[] = [
  {
    id: '1',
    title: 'Для начинающих',
    description:
      'Для тех, кто никогда не занимался хастлом или у кого мало опыта',
    href: `${basePath}/start`,
    icon: <StartIcon {...linkCardProps} />,
  },
  {
    id: '2',
    title: 'Для продолжающих',
    description: 'Для тех, кто занимается хастлом уже несколько месяцев',
    href: `${basePath}/continuing`,
    icon: <StarIcon {...linkCardProps} />,
  },
  {
    id: '3',
    title: 'Для соревнующихся',
    description:
      'Для тех, кто хочет готовиться к соревнованиям и в дальнейшем участвовать в них',
    href: `${basePath}/sport`,
    icon: <CupIcon {...linkCardProps} />,
  },
  {
    id: '4',
    title: 'Для практикующихся',
    description:
      'Для тех, кто хочет оточить до совершенства свои навыки в рамках одиночных и групповых практик',
    href: `${basePath}/practice`,
    icon: <DumbellsIcon {...linkCardProps} />,
  },
  {
    id: '5',
    title: 'Для одиноких',
    description: 'Если ты одинок, то прими наши соболезнования',
    href: `${basePath}/solo`,
    icon: <SoloIcon {...linkCardProps} />,
  },
  {
    id: '6',
    title: 'Для детей',
    description: 'Хахахаха, маленький человек',
    href: `${basePath}/kids`,
    icon: <KidIcon {...linkCardProps} />,
  },
]

const SchedulePage = () => {
  return (
    <Main>
      <H1>Расписаний занятий</H1>
      <Breadcrumbs breadcrumbsData={breadCrumbsData} />
      <ClassSignUp description="Если не знаете, что выбрать, вы всегда можете связаться с нами и задать все интересующие вопросы:" />
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

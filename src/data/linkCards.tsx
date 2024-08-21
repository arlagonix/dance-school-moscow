import { LinkCardType } from '@/components/LinkCard'
import CalendarIcon from '@/components/svg/icons_big/calendar.svg'
import DollarIcon from '@/components/svg/icons_big/dollar.svg'
import MoneyBagIcon from '@/components/svg/icons_big/money_bag.svg'
import PirateMapIcon from '@/components/svg/icons_big/pirate_map.svg'
import ScholarIcon from '@/components/svg/icons_big/scholar.svg'
import ScholarHatIcon from '@/components/svg/icons_big/scholar_hat.svg'
import { SVGProps } from 'react'

const linkCardProps: SVGProps<SVGElement> = {
  width: 64,
  height: 64,
}

export const linkCardsData: LinkCardType[] = [
  {
    id: '1',
    title: 'Стоимость занятий',
    description: 'Абонементы на посещение занятий, способы оплаты, акции',
    href: '/pricing',
    icon: <MoneyBagIcon {...linkCardProps} />,
  },
  {
    id: '2',
    title: 'Расписание занятий',
    description:
      'Здесь вы узнаете, какие у нас есть виды занятий и сможете подобрать те, которые наиболее подойдут вашим навыкам и графику',
    href: '#',
    icon: <CalendarIcon {...linkCardProps} />,
  },
  {
    id: '3',
    title: 'Преподаватели',
    description:
      'Здесь вы узнаете, кто преподает в нашей школе, и сможете найти того, с кем вам будет наиболее комфортно заниматься.',
    href: '/trainers',
    icon: <ScholarIcon {...linkCardProps} />,
  },
  // {
  //   id: '4',
  //   title: 'Отзывы',
  //   description:
  //     'Здесь вы узнаете, что о нас думают люди, которые занимаются или раньше занимались в нашей школе.',
  //   href: '#',
  //   icon: <ReviewIcon {...linkCardProps} />,
  // },
  {
    id: '5',
    title: 'Аренда залов',
    description:
      'Информация о доступных залах, когда можно арендовать, стоимость аренды, с кем связаться по деталям аренды',
    href: '#',
    icon: <DollarIcon {...linkCardProps} />,
  },
  {
    id: '6',
    title: 'О школе',
    description:
      'Здесь вы узнаете, чем живет школа, сможете посмотреть на кадры с наших занятий, выступления наших учеников, фото и видео с наших мероприятий.',
    href: '#',
    icon: <ScholarHatIcon {...linkCardProps} />,
  },
  {
    id: '7',
    title: 'Как нас найти',
    description:
      'Наш адрес и как добраться до нас от ближайших станций метро. Есть даже видео путь!',
    href: '#',
    icon: <PirateMapIcon {...linkCardProps} />,
  },
]

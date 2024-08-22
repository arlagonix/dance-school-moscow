import { LinkCardType } from '@/components/LinkCard'
import CalendarIcon from '@/components/svg/icons_big/calendar.svg'
import DollarIcon from '@/components/svg/icons_big/dollar.svg'
import MoneyBagIcon from '@/components/svg/icons_big/money_bag.svg'
import PirateMapIcon from '@/components/svg/icons_big/pirate_map.svg'
import ScholarIcon from '@/components/svg/icons_big/scholar.svg'
import ScholarHatIcon from '@/components/svg/icons_big/scholar_hat.svg'
import ShoppingCartIcon from '@/components/svg/icons_big/shopping-cart.svg'
import TicketIcon from '@/components/svg/icons_big/ticket.svg'
import { SVGProps } from 'react'

const linkCardProps: SVGProps<SVGElement> = {
  width: 64,
  height: 64,
}

export const linkCardsData: LinkCardType[] = [
  {
    title: 'Стоимость занятий',
    description: 'Абонементы на посещение занятий, способы оплаты, акции',
    href: '/pricing',
    icon: <MoneyBagIcon {...linkCardProps} />,
  },
  {
    title: 'Расписание занятий',
    description:
      'Здесь вы узнаете, какие у нас есть виды занятий и сможете подобрать те, которые наиболее подойдут вашим навыкам и графику',
    href: '/schedule',
    icon: <CalendarIcon {...linkCardProps} />,
  },
  {
    title: 'Преподаватели',
    description:
      'Здесь вы узнаете, кто преподает в нашей школе, и сможете найти того, с кем вам будет наиболее комфортно заниматься.',
    href: '/trainers',
    icon: <ScholarIcon {...linkCardProps} />,
  },
  // {
  //   title: 'Отзывы',
  //   description:
  //     'Здесь вы узнаете, что о нас думают люди, которые занимаются или раньше занимались в нашей школе.',
  //   href: '#',
  //   icon: <ReviewIcon {...linkCardProps} />,
  // },
  {
    title: 'Аренда залов',
    description:
      'Информация о доступных залах, когда можно арендовать, стоимость аренды, с кем связаться по деталям аренды',
    href: '/rent',
    icon: <DollarIcon {...linkCardProps} />,
  },
  {
    title: 'О школе',
    description:
      'Здесь вы узнаете, чем живет школа, сможете посмотреть на кадры с наших занятий, выступления наших учеников, фото и видео с наших мероприятий.',
    href: '/about',
    icon: <ScholarHatIcon {...linkCardProps} />,
  },
  {
    title: 'Мероприятия',
    description:
      'Здесь вы узнаете о предстоящих важных событиях школы и хастла.',
    href: '/events',
    icon: <TicketIcon {...linkCardProps} />,
  },
  {
    title: 'Магазин',
    description: 'Здесь вы сможете купить наш мерч.',
    href: '/shop',
    icon: <ShoppingCartIcon {...linkCardProps} />,
  },
  {
    title: 'Как нас найти',
    description:
      'Наш адрес и как добраться до нас от ближайших станций метро. Есть даже видео путь!',
    href: '/location',
    icon: <PirateMapIcon {...linkCardProps} />,
  },
]

import { iconProps } from './consts'
import { ScheduleGroupType } from './types'
import KidIcon from '@/components/svg/icons_big/little_one.svg'

export const kids: ScheduleGroupType = {
  slug: 'kids',
  title: 'Для детей',
  description:
    'Если у вас есть ребенок, и он от скуки по стенам бегает, то вам сюда',
  cardIcon: <KidIcon {...iconProps} />,
  schedules: [
    {
      title: 'Театр танца',
      subtitle: ['Младшая группа (3-5 лет)'],
      description: [
        ['Пн, Ср', '18:00 - 19:00'],
        ['Сб', '10:00 - 11:00'],
      ],
      trainerSlugs: ['tatiana_parol'],
      info: ['На сентябрь 2024'],
      isButton: true,
    },
    {
      title: 'Театр танца',
      subtitle: ['Средняя группа (6-7 лет)'],
      description: [
        ['Пн, Ср', '16:30 - 18:00'],
        ['Сб', '11:00 - 12:30'],
      ],
      trainerSlugs: ['tatiana_parol'],
      info: ['На сентябрь 2024'],
      isButton: true,
    },
    {
      title: 'Театр танца',
      subtitle: ['Старшая группа (7-9 лет)'],
      description: [
        ['Вт, Чт', '16:00 - 17:30'],
        ['Сб', '13:00 - 14:30'],
      ],
      trainerSlugs: ['tatiana_parol'],
      info: ['На сентябрь 2024'],
      isButton: true,
    },
    {
      title: 'Театр танца',
      subtitle: ['Подростковая группа (10-13 лет)'],
      description: [
        ['Вт, Чт', '17:30 - 19:00'],
        ['Сб', '13:00 - 14:30'],
      ],
      trainerSlugs: ['tatiana_parol'],
      info: ['На сентябрь 2024'],
      isButton: true,
    },
  ],
}

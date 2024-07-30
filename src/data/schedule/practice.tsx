import { iconProps } from './consts'
import { ScheduleGroupType } from './types'
import DumbellsIcon from '@/components/svg/icons_big/dumbells.svg'

export const practice: ScheduleGroupType = {
  slug: 'practice',
  title: 'Для практикующихся',
  description:
    'Для тех, кто хочет оточить до совершенства свои навыки в рамках одиночных и групповых практик',
  cardIcon: <DumbellsIcon {...iconProps} />,
  schedules: [
    {
      title: 'Коллективная практика Beginner',
      description: [['Четверг', '20:30 - 22:00']],
      trainerSlugs: ['vyacheslav_vyazov'],
      isButton: true,
    },
    {
      title: 'Коллективная практика Beginner',
      description: [['Воскресенье', '12:30 - 14:00']],
      trainerSlugs: ['daria_koshevaya'],
      isButton: true,
    },
    {
      title: 'Коллективная практика Rising Star',
      description: [['Пятница', '19:00 - 20:30']],
      trainerSlugs: ['roman_samohvalov'],
      isButton: true,
    },
    {
      title: 'Коллективная практика Main + Star',
      description: [['Пятница', '20:30 - 22:00']],
      trainerSlugs: ['roman_samohvalov'],
      isButton: true,
    },
    {
      title: 'Коллективная практика D+C класс',
      description: [['Воскресенье', '18:00 - 19:30']],
      trainerSlugs: ['roman_samohvalov', 'daria_koshevaya'],
      isButton: true,
    },
    {
      title: 'Самостоятельная практика',
      description: [
        ['Пн-Пт', '15:00 - 23:00'],
        ['Сб', 'Выходной'],
        ['Вс', '12:00 - 18:00'],
      ],
      info: ['Запись не требуется,', 'просто приходите'],
    },
  ],
}

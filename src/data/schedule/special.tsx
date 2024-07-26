import { iconProps } from './consts'
import { ScheduleGroupType } from './types'
import SpecialIcon from '@/components/svg/icons_big/special.svg'

export const special: ScheduleGroupType = {
  slug: 'special',
  title: 'Спецкурсы',
  description:
    'Для тех, кто хочет усовершенствовать отдельные аспекты своих танцевальных умений',
  cardIcon: <SpecialIcon {...iconProps} />,
  schedules: [
    {
      title: 'Вращаться легко!',
      subtitle: ['Интенсив от BG0'],
      description: [['Вторник, Четверг', '19:00 - 20:30']],
      trainerSlugs: ['roman_samohvalov', 'daria_koshevaya'],
      info: ['C 24.06 по 14.08'],
      isButton: true,
    },
    {
      title: 'Хастл Формейшн',
      subtitle: ['Подготовка к ЧР 2024'],
      description: [['Вторник, Четверг', '19:00 - 20:30']],
      trainerSlugs: ['roman_samohvalov', 'daria_koshevaya'],
      info: ['СТАРТ 24.09'],
      isButton: true,
    },
  ],
}

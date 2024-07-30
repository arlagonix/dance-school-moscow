import { iconProps } from './consts'
import { ScheduleGroupType } from './types'
import SoloIcon from '@/components/svg/icons_big/solo.svg'

export const solo: ScheduleGroupType = {
  slug: 'solo',
  title: 'Для одиноких',
  description: 'Если ты одинок, то прими наши соболезнования',
  cardIcon: <SoloIcon {...iconProps} />,
  schedules: [
    {
      title: 'Ladies Only',
      subtitle: ['от 4х месяцев'],
      description: [['Пятница', '19:00 - 20:30']],
      trainerSlugs: ['daria_koshevaya'],
      isButton: true,
    },
    {
      title: 'Функциональный стретчинг',
      description: [['Пятница', '20:30 - 22:00']],
      trainerSlugs: ['daria_koshevaya'],
      isButton: true,
    },
    {
      title: 'АКРОBASE',
      subtitle: ['Как часть курса', 'АкроBASE SPECIAL'],
      description: [['Воскресенье', '14:00 - 15:15']],
      trainerSlugs: ['daria_koshevaya'],
      info: ['Старт 30.06'],
      isButton: true,
    },
    {
      title: 'АКРОBASE SPECIAL',
      subtitle: ['Парная акробатика'],
      description: [['Воскресенье', '14:00 - 16:30']],
      trainerSlugs: ['daria_koshevaya'],
      info: ['Старт 30.06'],
      isButton: true,
    },
    {
      title: 'Растяжка + Здоровая спина',
      subtitle: ['В том числе в Zoom'],
      description: [
        ['Вт / Чт', '18:00 - 19:00'],
        ['Пт / Вс (Zoom)', '19:30 - 20:30'],
      ],
      trainerSlugs: ['daria_samohvalova'],
      isButton: true,
    },
  ],
}

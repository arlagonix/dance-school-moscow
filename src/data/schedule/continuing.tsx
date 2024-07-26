import { iconProps } from './consts'
import { ScheduleGroupType } from './types'
import StarIcon from '@/components/svg/icons_big/star_in_circle.svg'

export const continuing: ScheduleGroupType = {
  slug: 'continuing',
  title: 'Для продолжающих',
  description: 'Для тех, кто занимается хастлом уже несколько месяцев',
  cardIcon: <StarIcon {...iconProps} />,
  schedules: [
    {
      title: 'Base Хастл',
      subtitle: ['От 2 месяцев'],
      description: [['Вторник, Четверг', '19:00 - 20:30']],
      trainerSlugs: ['vyacheslav_vyazov', 'anna_vasilieva'],
      isButton: true,
    },
    {
      title: 'Base Хастл',
      subtitle: ['От 2 месяцев'],
      description: [['Понедельник, Среда', '20:30 - 22:00']],
      trainerSlugs: ['alexander_nosov', 'anna_stramilova'],
      info: ['СКОРО!!!'],
      isButton: true,
    },
    {
      title: 'Base Хастл',
      subtitle: ['От 2 месяцев'],
      description: [['Вторник, Четверг', '20:30 - 22:00']],
      trainerSlugs: ['leonid_leonov', 'daria_samohvalova'],
      info: ['СТАРТ 24.09'],
      isButton: false,
    },
  ],
}

import { iconProps } from './consts'
import { ScheduleGroupType } from './types'
import StarIcon from '@/components/svg/icons_big/star_in_circle.svg'

export const sport: ScheduleGroupType = {
  slug: 'sport',
  title: 'Для продолжающих',
  description: 'Для тех, кто занимается хастлом уже несколько месяцев',
  cardIcon: <StarIcon {...iconProps} />,
  schedules: [
    {
      title: 'Base Хастл',
      subtitle: [
        'Для тех, кто ни разу не танцевал хастл, а если и танцевал, то очень давно',
      ],
      description: [['Понедельник, Среда', '19:00 - 20:30']],
      trainerSlugs: ['leonid_leonov', 'daria_samohvalova'],
      isButton: true,
      isNew: false,
    },
    {
      title: 'Base Хастл',
      subtitle: [
        'Для тех, кто ни разу не танцевал хастл, а если и танцевал, то очень давно',
      ],
      description: [['Понедельник, Среда', '20:30 - 22:00']],
      trainerSlugs: ['alexander_nosov', 'anna_stramilova'],
      isButton: true,
      isNew: false,
    },
  ],
}

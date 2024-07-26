import { iconProps } from './consts'
import { ScheduleGroupType } from './types'
import StartIcon from '@/components/svg/icons_big/start.svg'

export const start: ScheduleGroupType = {
  slug: 'start',
  title: 'Для начинающих',
  description:
    'Для тех, кто никогда не занимался хастлом или у кого мало опыта',
  cardIcon: <StartIcon {...iconProps} />,
  schedules: [
    {
      title: 'Start Хастл',
      subtitle: [
        'Для тех, кто ни разу не танцевал хастл, а если и танцевал, то очень давно',
      ],
      description: [['Понедельник, Среда', '19:00 - 20:30']],
      trainerSlugs: ['alexander_nosov', 'anna_stramilova'],
      info: ['ИДЁТ НАБОР!!!'],
      isButton: true,
      isNew: true,
    },
    {
      title: 'Start Хастл',
      subtitle: [
        'Для тех, кто ни разу не танцевал хастл, а если и танцевал, то очень давно',
      ],
      description: [['Понедельник, Среда', '20:30 - 22:00']],
      trainerSlugs: ['maxim_yaremchuk', 'anna_vasilieva'],
      info: ['ИДЁТ НАБОР!!!'],
      isButton: true,
      isNew: true,
    },
    {
      title: 'Start Хастл',
      subtitle: [
        'Для тех, кто ни разу не танцевал хастл, а если и танцевал, то очень давно',
      ],
      description: [['Пятница', '20:30 - 22:00']],
      trainerSlugs: ['leonid_leonov', 'daria_samohvalova'],
      info: ['СКОРО!!!'],
      isButton: true,
    },
    {
      title: 'Start Хастл',
      subtitle: [
        'Для тех, кто ни разу не танцевал хастл, а если и танцевал, то очень давно',
      ],
      description: [['Пятница', '18:30 - 21:00']],
      trainerSlugs: ['vyacheslav_vyazov', 'daria_samohvalova'],
      info: ['СКОРО!!!'],
      isButton: true,
    },
    {
      title: 'Start Хастл',
      subtitle: [
        'Для тех, кто ни разу не танцевал хастл, а если и танцевал, то очень давно',
      ],
      description: [['Пятница', '18:30 - 21:00']],
      trainerSlugs: ['maxim_yaremchuk', 'anna_vasilieva'],
      info: ['СКОРО!!!'],
      isButton: true,
    },
  ],
}

import { iconProps } from './consts'
import { ScheduleGroupType } from './types'
import CupIcon from '@/components/svg/icons_big/cup_with_star.svg'

export const sport: ScheduleGroupType = {
  slug: 'sport',
  title: 'Для соревнующихся',
  description:
    'Для тех, кто хочет готовиться к соревнованиям и в дальнейшем участвовать в них',
  cardIcon: <CupIcon {...iconProps} />,
  schedules: [
    {
      title: 'JnJ Begginer 0',
      subtitle: ['Изучите, что танцевать в отборах'],
      description: [['Понедельник, Среда', '20:30 - 22:00']],
      trainerSlugs: ['alexander_nosov', 'anna_stramilova'],
      isButton: true,
    },
    {
      title: 'JnJ Begginer 0',
      subtitle: ['Вводный курс в конкурсный хастл'],
      description: [['Вторник, Четверг', '19:00 - 20:30']],
      trainerSlugs: ['leonid_leonov', 'daria_samohvalova'],
      isButton: true,
    },
  ],
}

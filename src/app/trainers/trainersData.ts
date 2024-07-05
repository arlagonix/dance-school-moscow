const defaultPath = '/trainers'

export const trainersData: TrainerType[] = [
  {
    name: 'Роман Самохвалов',
    description: [
      'Руководитель Школы',
      'Судья 1-й категории АСХ',
      'Танцует 19 лет',
      'Преподает 10 лет',
    ],
    ranks: ['Champion', 'A'],
    imgSrc: '/trainers/roman_samohvalov.jpg',
    link: `${defaultPath}/roman_samohvalov`,
  },
  {
    name: 'Дарья Кошевая',
    description: [
      'Судья 3-й категории АСХ',
      'Танцует 25 лет',
      'Преподает 14 лет',
    ],
    ranks: ['Champion', 'A'],
    imgSrc: '/trainers/daria_koshevaya.jpg',
    link: `${defaultPath}/daria_koshevaya`,
  },
  {
    name: 'Леонид Леонов',
    description: ['Танцует 10 лет', 'Преподает 6 лет'],
    ranks: ['Star', 'B'],
    imgSrc: '/trainers/leonid_leonov.jpg',
    link: `${defaultPath}/leonid_leonov`,
  },
  {
    name: 'Дария Самохвалова',
    description: [
      'Дипломированный хореограф',
      'Танцует 19 лет',
      'Преподает 8 лет',
    ],
    ranks: ['Main', 'D'],
    imgSrc: '/trainers/daria_samohvalova.jpg',
    link: `${defaultPath}/daria_samohvalova`,
  },
  {
    name: 'Александр Носов',
    description: ['Танцует 4 года', 'Преподает 2 года'],
    ranks: ['Star', 'C'],
    imgSrc: '/trainers/alexander_nosov.jpg',
    link: `${defaultPath}/alexander_nosov`,
  },
  {
    name: 'Анна Страмилова',
    description: ['Танцует 4 года', 'Преподает 2 года'],
    ranks: ['Main', 'D'],
    imgSrc: '/trainers/anna_stramilova.jpg',
    link: `${defaultPath}/anna_stramilova`,
  },
  {
    name: 'Максим Яремчук',
    description: ['Танцует 7 лет', 'Преподает 2 года'],
    ranks: ['Main', 'C'],
    imgSrc: '/trainers/maxim_yaremchuk.jpg',
    link: `${defaultPath}/maxim_yaremchuk`,
  },
  {
    name: 'Вячеслав Вязов',
    description: ['Танцует 11 лет', 'Преподает 9 лет'],
    ranks: ['Main', 'C'],
    imgSrc: '/trainers/vyacheslav_vyazov.jpg',
    link: `${defaultPath}/vyacheslav_vyazov`,
  },
  {
    name: 'Виктория Балганова',
    description: ['Танцует 16 лет', 'Преподает 2 года'],
    ranks: ['Star', 'C'],
    imgSrc: '/trainers/victoria_balganova.jpg',
    link: `${defaultPath}/victoria_balganova`,
  },
  {
    name: 'Анна Васильева',
    description: ['Танцует 15 лет', 'Преподает 3 года'],
    ranks: ['Star', 'D'],
    imgSrc: '/trainers/anna_vasilieva.jpg',
    link: `${defaultPath}/anna_vasilieva`,
  },
  {
    name: 'Татьяна Пароль',
    description: [
      'Специалист с высшим хореографическим образованием',
      'Танцует 25 лет',
      'Преподает 20 лет',
    ],
    imgSrc: '/trainers/tatiana_parol.jpg',
    link: `${defaultPath}/tatiana_parol`,
  },
]

export type TrainerType = {
  /** Trainer name */
  name: string
  /** Trainer description */
  description?: string[]
  /** Trainer ranks (DnD, classic, etc.) */
  ranks?: string[]
  /** Source of the trainer avatar image */
  imgSrc: string
  /** Link to trainer's page */
  link: string
}

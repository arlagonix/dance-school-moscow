// const defaultPath = '/trainers'

export const trainersData: TrainerType[] = [
  {
    slug: 'roman_samohvalov',
    name: 'Роман Самохвалов',
    description: [
      'Руководитель Школы',
      'Судья 1-й категории АСХ',
      'Танцует 19 лет',
      'Преподает 10 лет',
    ],
    aboutCards: [
      {
        title: 'Судья 1-й категории АСХ',
      },
      {
        title: 'А класс',
        description: 'Хастл/Дискофокс',
      },
      {
        title: 'Champion класс',
        description: 'Хастл ДнД',
      },
      {
        title: '19 лет',
        description: 'Танцует',
      },
      {
        title: '10 лет',
        description: 'Преподает',
      },
    ],
    pageDescription: ['Руководитель Школы танцев D.A.N.C.E'],
    ranks: ['Champion', 'A'],
    imgSrc: `/trainers/roman_samohvalov/roman_samohvalov.jpg`,
    achievements: [
      {
        title: 'Вице-чемпион России',
        description: "Абсолют '23",
      },
      {
        title: 'Чемпион Москвы',
        description: "А класс '22/'23",
      },
      {
        title: 'Победитель Nord Cup',
        description: "Абсолют '23",
      },
      {
        title: 'Абсолютный Чемпион России',
        description: "'18/'21",
      },
      {
        title: 'Чемпион Галактики',
        description: "Сhampion ДнД '19/'20",
      },
      {
        title: 'Вице-чемпион Москвы',
        description: "Champion ДнД '19/'21",
      },
      {
        title: 'Чемпион России',
        description: "Star ДнД '18",
      },
      {
        title: 'Вице-чемпион Европы',
        description: "IDO '18",
      },
      {
        title: 'Чемпион России',
        description: "Шоу '17",
      },
    ],
    photos: [
      '/trainers/roman_samohvalov/iqwhOKwZZN8.jpg',
      '/trainers/roman_samohvalov/Xap7id7Ogkc.jpg',
      '/trainers/common/roma_i_dasha_001.jpg',
      '/trainers/common/roma_i_dasha_002.jpg',
      '/trainers/common/roma_i_dasha_003.jpg',
      '/trainers/common/roma_i_dasha_004.jpg',
      '/trainers/common/roma_i_dasha_005.jpg',
    ],
    videos: [
      'https://www.youtube.com/watch?v=4WA-9P489ME',
      'https://www.youtube.com/watch?v=GGxF-T74Lc4',
      'https://www.youtube.com/watch?v=hQklxne0Lqs',
    ],
  },
  {
    slug: 'daria_koshevaya',
    name: 'Дарья Кошевая',
    description: [
      'Судья 3-й категории АСХ',
      'Танцует 25 лет',
      'Преподает 14 лет',
    ],
    ranks: ['Champion', 'A'],
    imgSrc: `/trainers/daria_koshevaya.jpg`,
  },
  {
    slug: 'leonid_leonov',
    name: 'Леонид Леонов',
    description: ['Танцует 10 лет', 'Преподает 6 лет'],
    ranks: ['Star', 'B'],
    imgSrc: `/trainers/leonid_leonov.jpg`,
  },
  {
    slug: 'daria_samohvalova',
    name: 'Дария Самохвалова',
    description: [
      'Дипломированный хореограф',
      'Танцует 19 лет',
      'Преподает 8 лет',
    ],
    ranks: ['Main', 'D'],
    imgSrc: `/trainers/daria_samohvalova.jpg`,
  },
  {
    slug: 'alexander_nosov',
    name: 'Александр Носов',
    description: ['Танцует 4 года', 'Преподает 2 года'],
    ranks: ['Star', 'C'],
    imgSrc: `/trainers/alexander_nosov.jpg`,
  },
  {
    slug: 'anna_stramilova',
    name: 'Анна Страмилова',
    description: ['Танцует 4 года', 'Преподает 2 года'],
    ranks: ['Main', 'D'],
    imgSrc: `/trainers/anna_stramilova.jpg`,
  },
  {
    slug: 'maxim_yaremchuk',
    name: 'Максим Яремчук',
    description: ['Танцует 7 лет', 'Преподает 2 года'],
    ranks: ['Main', 'C'],
    imgSrc: `/trainers/maxim_yaremchuk.jpg`,
  },
  {
    slug: 'vyacheslav_vyazov',
    name: 'Вячеслав Вязов',
    description: ['Танцует 11 лет', 'Преподает 9 лет'],
    ranks: ['Main', 'C'],
    imgSrc: `/trainers/vyacheslav_vyazov.jpg`,
  },
  {
    slug: 'victoria_balganova',
    name: 'Виктория Балганова',
    description: ['Танцует 16 лет', 'Преподает 2 года'],
    ranks: ['Star', 'C'],
    imgSrc: `/trainers/victoria_balganova.jpg`,
  },
  {
    slug: 'anna_vasilieva',
    name: 'Анна Васильева',
    description: ['Танцует 15 лет', 'Преподает 3 года'],
    ranks: ['Star', 'D'],
    imgSrc: `/trainers/anna_vasilieva.jpg`,
  },
  {
    slug: 'tatiana_parol',
    name: 'Татьяна Пароль',
    description: [
      'Специалист с высшим хореографическим образованием',
      'Танцует 25 лет',
      'Преподает 20 лет',
    ],
    imgSrc: `/trainers/tatiana_parol.jpg`,
  },
]

export type TrainerType = {
  /**  */
  slug: string
  /** Trainer name */
  name: string
  /** Trainer description */
  description?: string[]
  /** Page description */
  pageDescription?: string[]
  /** Trainer ranks (DnD, classic, etc.) */
  ranks?: string[]
  /** Source of the trainer avatar image */
  imgSrc: string
  /** About the teacher in cards */
  aboutCards?: {
    title: string
    description?: string
  }[]
  /** Trainer's achievements */
  achievements?: {
    title: string
    description?: string
  }[]
  photos?: string[]
  videos?: string[]
}

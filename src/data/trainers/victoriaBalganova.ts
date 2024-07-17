import { TrainerType } from './types'

export const victoriaBalganova: TrainerType = {
  slug: 'victoria_balganova',
  name: 'Виктория Балганова',
  ranks: ['Star', 'C'],
  description: ['Танцует 16 лет', 'Преподает 2 года'],
  aboutCards: [
    {
      title: 'C класс',
      description: 'Хастл/Дискофокс',
    },
    {
      title: 'Star класс',
      description: 'Хастл ДнД',
    },
    {
      title: '16 лет',
      description: 'Танцует',
    },
    {
      title: '2 года',
      description: 'Преподает',
    },
  ],
  achievements: [
    {
      title: 'Финалист Чемпионата России',
      description: "S0/1 ДнД '23",
    },
    {
      title: 'Серебряный призёр DANCEVISION',
      description: "S0/1 ДнД '22",
    },
    {
      title: 'Серебряный призёр NordCup',
      description: "M ДнД '22",
    },
    {
      title: 'Серебряный призёр Кубок АСХ',
      description: "M ДнД '22",
    },
    {
      title: 'Победитель Открытие Сезона',
      description: "S0/1 ДнД '21",
    },
    {
      title: 'Победитель Music Up',
      description: "M ДнД '21",
    },
    {
      title: 'Бронзовый призёр Огни большого города',
      description: "M ДнД '21",
    },
  ],
  imgSrc: `/trainers/victoria_balganova.jpg`,
  videos: [
    'https://youtu.be/xt0fjyKovpU',
    'https://youtu.be/Y7Sm-xL92Xk',
    'https://youtu.be/0INtLh1YPcA',
  ],
}

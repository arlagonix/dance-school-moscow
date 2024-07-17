import { TrainerType } from './types'

export const annaStramilova: TrainerType = {
  slug: 'anna_stramilova',
  name: 'Анна Страмилова',
  ranks: ['Main', 'D'],
  description: ['Танцует 4 года', 'Преподает 2 года'],
  aboutCards: [
    {
      title: 'D класс',
      description: 'Хастл/Дискофокс',
    },
    {
      title: 'Main класс',
      description: 'Хастл ДнД',
    },
    {
      title: '4 года',
      description: 'Танцует',
    },
    {
      title: '2 года',
      description: 'Преподает',
    },
  ],
  achievements: [
    {
      title: 'Бронзовый призёр DANCEVISION',
      description: 'M ДнД ’22',
    },
    {
      title: 'Серебряный призёр Bring The Action',
      description: "M 0+1 '22",
    },
    {
      title: 'Победитель Amber Fest',
      description: "M 0+1 '22",
    },
    {
      title: 'Победитель Открытие Сезона',
      description: 'RS ДнД ’21',
    },
    {
      title: 'Бронзовый призёр Sibirean Jam, г. Омск',
      description: 'RS ДнД ’21',
    },
    {
      title: 'Финалист Чемпионата России',
      description: "BG ДнД '21",
    },
  ],
  imgSrc: `/trainers/anna_stramilova.jpg`,
  videos: ['https://youtu.be/XeDOD1uEOTs', 'https://youtu.be/8GXD1csejUk'],
}

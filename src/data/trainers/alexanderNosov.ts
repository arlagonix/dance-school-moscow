import { TrainerType } from './types'

export const alexanderNosov: TrainerType = {
  slug: 'alexander_nosov',
  name: 'Александр Носов',
  ranks: ['Star', 'C'],
  description: ['Танцует 4 года', 'Преподает 2 года'],
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
      title: 'Чемпион России',
      description: "Формейшн '22/23",
    },
    {
      title: 'Серебряный призер Надежды России',
      description: "С-класс'23",
    },
    {
      title: 'Серебряный призер Bring The Action',
      description: "С-класс'23",
    },
    {
      title: 'Серебряный призер Sunny Fest',
      description: "M ДнД '23",
    },
    {
      title: 'Бронзовый призер DANCEVISION',
      description: "M ДнД '23",
    },
    {
      title: 'Победитель Bring The Action',
      description: "M ДнД '23",
    },
    {
      title: 'Победитель KrasFest',
      description: "M ДнД '23",
    },
    {
      title: 'Победитель Bring The Action',
      description: "D-класс '22",
    },
    {
      title: 'Победитель DANCEVISION',
      description: "RS ДнД '22",
    },
    {
      title: 'Победитель Russian Hustle Awards',
      description: "RS ДнД '22",
    },
    {
      title: 'Серебряный призёр Командное Первенство',
      description: "RS ДнД '22",
    },
    {
      title: 'Победитель Открытие Сезона',
      description: "Е-класс '21",
    },
  ],
  imgSrc: `/trainers/alexander_nosov.jpg`,
  photos: [
    '/trainers/common/nosov_stramilova_01.jpg',
    '/trainers/alexander_nosov/aNY4LSbH8wY.jpg',
  ],
  videos: [
    'https://youtu.be/sWTIa6F5uSE',
    'https://youtu.be/u_mVHvbatUk',
    'https://youtu.be/K4qtsgfJtnY',
  ],
  socialMedia: [
    {
      type: 'vk',
      id: 'joysan',
      url: 'https://vk.com/joysan',
    },
    {
      type: 'radioHustle',
      id: '11919',
      url: 'https://app.radiohustle.online/#/dancers/11919',
    },
  ],
}

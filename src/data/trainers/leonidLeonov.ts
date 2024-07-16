import { TrainerType } from './types'

export const leonidLeonov: TrainerType = {
  slug: 'leonid_leonov',
  name: 'Леонид Леонов',
  ranks: ['Star', 'B'],
  description: ['Танцует 10 лет', 'Преподает 6 лет'],
  aboutCards: [
    {
      title: 'B класс',
      description: 'Хастл/Дискофокс',
    },
    {
      title: 'Star класс',
      description: 'Хастл ДнД',
    },
    {
      title: '10 лет',
      description: 'Танцует',
    },
    {
      title: '6 лет',
      description: 'Преподает',
    },
  ],
  achievements: [
    {
      title: 'Серебряный призёр Чемпионата России',
      description: "Star ДнД '21",
    },
    {
      title: 'Финалист NORD CUP',
      description: "Абсолют'21",
    },
    {
      title: 'Победитель хастл турнира Танцующий Город',
      description: "Main ДнД '18",
    },
    {
      title: 'Победитель хастл турнира SYTYCD',
      description: "Main ДнД '18",
    },
    {
      title: 'Победитель Осеннего Кубка Движения',
      description: "Main ДнД '18",
    },
    {
      title: 'Бронзовый призёр Открытого кубка Новосибирска',
      description: "B класс '15",
    },
    {
      title: 'Победитель Летнего Кубка Движения',
      description: "C класс '16",
    },
  ],
  imgSrc: `/trainers/leonid_leonov.jpg`,
  photos: ['/trainers/common/lenya_i_dasha.jpg'],
  videos: [
    'https://youtu.be/FBj_Dt7a520',
    'https://youtu.be/kcTSHvSgtNk',
    'https://youtu.be/qw9W4tRuN5Q',
  ],
}

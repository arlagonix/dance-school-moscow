import { TrainerType } from './types'

export const dariaSamohvalova: TrainerType = {
  slug: 'daria_samohvalova',
  name: 'Дария Самохвалова',
  ranks: ['Main', 'D'],
  description: [
    'Дипломированный хореограф',
    'Танцует 19 лет',
    'Преподает 8 лет',
  ],
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
      title: '10 лет',
      description: 'Танцует',
    },
    {
      title: '6 лет',
      description: 'Преподает',
    },
    {
      title: 'Дипломированный хореограф',
    },
  ],
  achievements: [
    {
      title: 'Финалист NORD CUP',
      description: "MAIN ДнД'19",
    },
    {
      title: 'Чемпион России',
      description: "Шоу '17",
    },
    {
      title: 'Финалист Чемпионата России',
      description: "RS ДнД '17",
    },
    {
      title: 'Победитель Надежды России',
      description: "RS ДнД '17",
    },
    {
      title: 'Серебряный призёр Чемпионата Москвы',
      description: "Е класс '16",
    },
    {
      title: 'Серебряный призёр Чемпионата России',
      description: "Bg ДнД '16",
    },
  ],
  imgSrc: `/trainers/daria_samohvalova.jpg`,
  photos: ['/trainers/common/lenya_i_dasha.jpg'],
  videos: ['https://youtu.be/LQPfxmgtDVM'],
  socialMedia: [
    {
      type: 'vk',
      id: 'dariyano',
      url: 'https://vk.com/dariyano',
    },
    {
      type: 'radioHustle',
      id: '08670',
      url: 'https://app.radiohustle.online/#/dancers/08670',
    },
  ],
}

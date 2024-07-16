import { TrainerType } from './trainers/types'
import { dariaKoshevaya } from './trainers/dariaKoshevaya'
import { romanSamohvalov } from './trainers/romanSamohvalov'
import { leonidLeonov } from './trainers/leonidLeonov'
import { dariaSamohvalova } from './trainers/dariaSamohvalolva'
import { alexanderNosov } from './trainers/alexanderNosov'

export const trainersData: TrainerType[] = [
  romanSamohvalov,
  dariaKoshevaya,
  leonidLeonov,
  dariaSamohvalova,
  alexanderNosov,
  {
    slug: 'anna_stramilova',
    name: 'Анна Страмилова',
    description: ['Танцует 4 года', 'Преподает 2 года'],
    ranks: ['Main', 'D'],
    imgSrc: `/trainers/anna_stramilova.jpg`,
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
    slug: 'maxim_yaremchuk',
    name: 'Максим Яремчук',
    description: ['Танцует 7 лет', 'Преподает 2 года'],
    ranks: ['Main', 'C'],
    imgSrc: `/trainers/maxim_yaremchuk.jpg`,
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

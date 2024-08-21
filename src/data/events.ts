type EventType = {
  title: string
  subtitle: string
  description: string
  link?: string
  buttonText?: string
}

export const eventsData: EventType[] = [
  {
    title: 'GRAND PRIX DANCE',
    subtitle: 'Рейтинговый турнир',
    description: `
28.04.2024 (Вс)

Вход: 700 ₽  
1 номинация: 700 ₽  
Каждая последующая: 700 ₽
`,
    link: 'https://www.ya.ru',
  },
  {
    title: 'GRAND PRIX DANCE',
    subtitle: 'Мастер классы (МК)',
    description: `
29.04.2024 (Пн)

1 МК: 1500 ₽  
2 МК: 2800 ₽  
4 МК: 5200 ₽  
`,
    link: 'https://www.ya.ru',
  },
  {
    title: 'DANCEWEEKEND',
    subtitle: 'Танцевальный выезд',
    description: `
21 июн 2024 - 23 июн 2024

Цены скоро будут
`,
    link: 'https://www.ya.ru',
  },
]

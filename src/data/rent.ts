type RoomRent = {
  title: string
  imgSrc: string
  square: string
  pricePerHour: string
  availability: string
  rentURL: string
}

export const roomRentData: RoomRent[] = [
  {
    title: 'Синий зал Справедливости',
    imgSrc: '/rooms/bluewall.jpg',
    square: '55',
    pricePerHour: '2 500',
    availability: 'В выходные и будни до 19:00',
    rentURL: 'https://vk.com/im?sel=-2549609',
  },
  {
    title: 'Красный зал Ярости',
    imgSrc: '/rooms/redwall.jpg',
    square: '80',
    pricePerHour: '2 500',
    availability: 'В выходные и будни до 19:00',
    rentURL: 'https://vk.com/im?sel=-2549609',
  },
  {
    title: 'Зелёный зал Мудрости',
    imgSrc: '/rooms/greenwall.jpg',
    square: '60',
    pricePerHour: '1 500',
    availability: 'В выходные и будни до 19:00',
    rentURL: 'https://vk.com/im?sel=-2549609',
  },
  {
    title: 'Жёлтый зал Правосудия',
    imgSrc: '/rooms/yellowall.jpg',
    square: '55',
    pricePerHour: '1 500',
    availability: 'В выходные и будни до 19:00',
    rentURL: 'https://vk.com/im?sel=-2549609',
  },
]

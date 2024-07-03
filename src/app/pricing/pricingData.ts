export const pricingData: PriceCardsGroupType[] = [
  {
    id: '1',
    title: undefined,
    description: undefined,
    items: [
      {
        id: '1',
        title: 'Пробное занятие',
        price: '0',
        description:
          'Для тех, кто хочет узнать, что такое хастл и стоит ли покупать абонемент для посещения других занятий',
      },
      {
        id: '2',
        title: 'Одно занятие',
        price: '900',
        description: [
          '1 занятие в группе',
          '1.5 часа танцев',
          'Узнаете 1-2 новых элемента',
        ],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=Разовое%20посещение&OutSum=900&shp_interface=link&SignatureValue=a10461203e9edbd7e2e6874975d85747',
      },
      {
        id: '3',
        title: 'Индивидуальное занятие',
        price: '2 500',
        priceTiming: 'в час',
        description: [
          'Индивидуальное занятие',
          'с понравившимся преподавателем',
        ],
        purchaseLink: '#',
      },
    ],
  },
  {
    id: '2',
    title: 'Акции',
    description: [
      'Данные абонементы не предусматривают пропуска занятий.',
      'Количество абонементов по акции ограничено.',
    ],
    items: [
      {
        id: '1',
        title: 'Студент',
        price: '4 500',
        badPrice: '7 200',
        avgPricePerClass: '375',
        description: [
          '8 занятий в группе',
          'Нужно предъявить действующий студенческий билет',
        ],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=Студенческий&OutSum=4500&shp_interface=link&SignatureValue=eade2cd982e03843ba6436b08b2be5be',
      },
    ],
  },
]

type PriceCardsGroupType = {
  id: string
  title?: string
  description?: string | string[]
  items: PriceCardType[]
}

type PriceCardType = {
  id: string
  title: string
  subtitle?: string
  price: string
  priceTiming?: string
  badPrice?: string
  avgPricePerClass?: string
  avgPricePerClassUnits?: string
  description?: string | string[]
  purchaseLink?: string
}

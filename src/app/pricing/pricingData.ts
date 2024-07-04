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
      {
        id: '2',
        title: 'Пара',
        price: '5 800',
        badPrice: '7 200',
        avgPricePerClass: '485',
        description: [
          '8 занятий в группе',
          'Действует при одновременной покупке двух абонементов',
        ],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%9F%D0%B0%D1%80%D0%B0&OutSum=5800&shp_interface=link&SignatureValue=28be6d587a2a614381862362fc407bcf',
      },
      {
        id: '3',
        title: 'Старт',
        price: '9 400',
        badPrice: '14 400',
        avgPricePerClass: '390',
        description: [
          '16 занятий в группе',
          'Действует при покупке абонемента в день пробного занятия',
        ],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=16%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B9%20(%D0%90%D0%9A%D0%A6%D0%98%D0%AF)&OutSum=9400&shp_interface=link&SignatureValue=8c71c643714b54a7d69529cb230b8d59',
      },
      {
        id: '4',
        title: '1x1',
        price: '18 000',
        badPrice: '20 000',
        avgPricePerClass: '2 250',
        description: [
          '8 индивидуальных занятий',
          'Стандартная стоимость одного индивидуального занятия',
          '2 500 ₽ / час',
        ],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%98%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D1%8F&OutSum=18000&SignatureValue=5a651bd034fae4efe735e58d6515cf1e',
      },
    ],
  },
  {
    id: '3',
    title: 'Абонементы на 2 занятия в неделю',
    description: [
      'Вы посещаете занятия два раза в неделю. ',
      'Абонементы не допускают пропуска занятий: если вы пропустили занятие, оно сгорает.',
    ],
    items: [
      {
        id: '1',
        title: '4 занятия',
        subtitle: '2 раза в неделю',
        price: '3 400',
        badPrice: '3 600',
        avgPricePerClass: '566',
        description: [
          '4 занятия в группе',
          '6 часов танцев',
          'Хватит на 2 недели',
        ],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=4%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D1%8F%20(%D1%81%20%D0%BF%D1%80%D0%BE%D0%BF%D1%83%D1%81%D0%BA%D0%BE%D0%BC)&OutSum=3400&shp_interface=link&SignatureValue=be3e7e610f0562e0e462006f5af9fe38',
      },
      {
        id: '2',
        title: '8 занятий',
        subtitle: '2 раза в неделю',
        price: '5 900',
        badPrice: '7 200',
        avgPricePerClass: '490',
        description: [
          '8 занятий в группе',
          '12 часов танцев',
          'Хватит на 1 месяц (4 недели)',
        ],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=8%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B9&OutSum=5900&shp_interface=link&SignatureValue=f4608a33cedd12409b441ca306a1004c',
      },
      {
        id: '3',
        title: '16 занятий',
        subtitle: '2 раза в неделю',
        price: '10 900',
        badPrice: '14 400',
        avgPricePerClass: '455',
        description: [
          '16 занятий в группе',
          '24 часов танцев',
          'Хватит на 2 месяца (8 недель)',
        ],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=16%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B9&OutSum=10900&shp_interface=link&SignatureValue=eaf09ba83c83141cfdd339fd0a8f19f6',
      },
      {
        id: '4',
        title: '48 занятий',
        subtitle: '2 раза в неделю',
        price: '29 900',
        badPrice: '43 200',
        avgPricePerClass: '415',
        description: [
          '48 занятий в группе',
          '72 часа танцев',
          'Хватит на 6 месяцев (24 недели)',
        ],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=48%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B9&OutSum=29900&shp_interface=link&SignatureValue=1af57c3dc6e6b75e493f1df7d7f2ec94',
      },
    ],
  },
  {
    id: '4',
    title: 'Абонементы на 1 занятие в неделю',
    description: [
      'Вы посещаете занятия один раз в неделю. ',
      'Абонементы не допускают пропуска занятий: если вы пропустили занятие, оно сгорает.',
    ],
    items: [
      {
        id: '1',
        title: '4 занятия',
        subtitle: '1 раз в неделю',
        price: '3 400',
        badPrice: '3 600',
        avgPricePerClass: '566',
        description: [
          '4 занятия в группе',
          '6 часов танцев',
          'Хватит на 1 месяц (4 недели)',
        ],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=4%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D1%8F%20(%D1%81%20%D0%BF%D1%80%D0%BE%D0%BF%D1%83%D1%81%D0%BA%D0%BE%D0%BC)&OutSum=3400&shp_interface=link&SignatureValue=be3e7e610f0562e0e462006f5af9fe38',
      },
      {
        id: '2',
        title: '8 занятий',
        subtitle: '1 раз в неделю',
        price: '6 400',
        badPrice: '7 200',
        avgPricePerClass: '533',
        description: [
          '8 занятий в группе',
          '12 часов танцев',
          'Хватит на 2 месяца (8 недель)',
        ],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=8%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B9%20(%D1%81%20%D0%BF%D1%80%D0%BE%D0%BF%D1%83%D1%81%D0%BA%D0%BE%D0%BC)&OutSum=6400&shp_interface=link&SignatureValue=1d215bd923463fe38adbde8b89f5f07f',
      },
    ],
  },
  {
    id: '5',
    title: 'Абонементы на самоподготовку (СамПо)',
    description: [
      'СамПо подлежит оплате до занятия вне зависимости от длительности Вашей тренировки.',
      'Если Ваше групповое занятие заканчивается в 22:00 или позже, то Вы не платите за СамПо.',
    ],
    items: [
      {
        id: '1',
        title: 'Разовый',
        subtitle: 'в день занятия вашей группы',
        price: '350',
        description: ['1 посещение'],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%A0%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%BF%D0%BE%D1%81%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%A1%D0%B0%D0%BC%D0%9F%D0%BE&OutSum=300&SignatureValue=644e677caf46ea7c9c4da61efe4ab5cb',
      },
      {
        id: '2',
        title: 'Разовый',
        subtitle: 'в любой другой день',
        price: '400',
        description: ['1 посещение'],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=%D0%A0%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%BF%D0%BE%D1%81%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%A1%D0%B0%D0%BC%D0%9F%D0%BE&OutSum=350&SignatureValue=644e677caf46ea7c9c4da61efe4ab5cb',
      },
      {
        id: '3',
        title: '1 месяц',
        subtitle: 'с абонементом школы',
        price: '3 000',
        description: ['Сколько угодно посещений'],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=1%20%D0%BC%D0%B5%D1%81%D1%8F%D1%86%20%D0%A1%D0%B0%D0%BC%D0%9F%D0%BE&OutSum=2500&SignatureValue=b15939b60d181b0f9597c4f71bf73b94',
      },
      {
        id: '4',
        title: '1 месяц',
        subtitle: 'без абонемента школы',
        price: '3 500',
        description: ['Сколько угодно посещений'],
        purchaseLink:
          'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=danceschool.moscow&InvId=0&Culture=ru&Encoding=utf-8&Description=1%20%D0%BC%D0%B5%D1%81%D1%8F%D1%86%20%D0%A1%D0%B0%D0%BC%D0%9F%D0%BE&OutSum=3000&SignatureValue=b15939b60d181b0f9597c4f71bf73b94',
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

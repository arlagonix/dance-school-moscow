export type ShopItemType = {
  name: string
  description: string
  imgSrc: string
  price: string
}

export const shopData: ShopItemType[] = [
  {
    name: 'Футболка с ЛОГО',
    description: `
Футболка белая круглым воротом и логотипом DANCE  
Материал: 100% хлопок  
Размеры: от XXL до XS  
Для мужчин и женщин
`,
    imgSrc: '/shop/t-shirt.jpg',
    price: '1 250',
  },
  {
    name: 'Толстовка с ЛОГО',
    description: `
Толстовка тёплая с логотипом DANCE  
На молнии с капюшоном и карманами  
Размеры: от S до ХХL  
Для мужчин и женщин
`,
    imgSrc: '/shop/hoody.jpg',
    price: '1 250',
  },
  {
    name: 'Бутылка с ЛОГО',
    description: `
Спортивная бутылка для воды с закручивающейся крышкой, четырёх цветов, модная, лёгкая и удобная в использовании.
`,
    imgSrc: '/shop/bottle.jpg',
    price: '700',
  },
  {
    name: 'Термокружка с ЛОГО',
    description: `
Плотно закрывается, не проливается, хорошо держит тепло, модная и очень удобная в использовании.
`,
    imgSrc: '/shop/thermocup.jpg',
    price: '1 300',
  },
  {
    name: 'Сумка с ЛОГО',
    description: `
Плотная тканевая сумка-рюкзак для одежды и/или обуви на шнурках
`,
    imgSrc: '/shop/bag.jpg',
    price: '1 000',
  },
]

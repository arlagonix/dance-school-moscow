import Breadcrumbs from '@/components/Breadcrumbs'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import ShopItemCard from '@/components/ShopItemCard'
import { shopData } from '@/data/shop'
import { Fragment } from 'react'

const ShopPage = () => {
  return (
    <Main>
      <H1>Магазин</H1>
      <Breadcrumbs
        breadcrumbsData={[
          {
            title: 'Главная',
            link: '/',
          },
          {
            title: 'Магазин',
          },
        ]}
      />
      <div className="mt-6 flex flex-col gap-6">
        {shopData.map((item, index, arr) => {
          if (index === arr.length - 1)
            return (
              <ShopItemCard
                key={item.name}
                name={item.name}
                description={item.description}
                imgSrc={item.imgSrc}
                price={item.price}
              />
            )
          return (
            <Fragment key={item.name}>
              <ShopItemCard
                key={item.name}
                name={item.name}
                description={item.description}
                imgSrc={item.imgSrc}
                price={item.price}
              />
              <div className="h-px bg-slate-200" />
            </Fragment>
          )
        })}
      </div>
    </Main>
  )
}

export default ShopPage

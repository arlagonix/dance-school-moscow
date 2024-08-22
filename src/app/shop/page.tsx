import Breadcrumbs from '@/components/Breadcrumbs'
import H1 from '@/components/H1'
import Main from '@/components/Main'

const ShopPage = () => {
  return (
    <Main>
      <H1>Магазин</H1>
      <Breadcrumbs
        breadcrumbsData={[
          {
            id: 1,
            title: 'Главная',
            link: '/',
          },
          {
            id: 2,
            title: 'Магазин',
          },
        ]}
      />
    </Main>
  )
}

export default ShopPage

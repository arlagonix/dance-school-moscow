import Breadcrumbs, { BreadcrumbType } from '@/components/Breadcrumbs'
import ClassSignUp from '@/components/ClassSignUp'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import PriceCard from '@/components/PriceCard'

const breadCrumbsData: BreadcrumbType[] = [
  {
    id: 1,
    title: 'Главная',
    link: '/',
  },
  {
    id: 2,
    title: 'Стоимость занятий',
  },
]

const PricingPage = () => {
  return (
    <Main>
      <H1>Стоимость занятий</H1>
      <Breadcrumbs breadcrumbsData={breadCrumbsData} />
      <ClassSignUp
        description="Пока ты думаешь, другие пробуют и у них получается. И у тебя получится!"
        isIncludeContract
      />
      <PriceCard
        title="4 занятия"
        subtitle="2 раза в неделю"
        price="3 400"
        badPrice="3 600"
        avgPricePerClass="566"
        description={`4 занятия в группе\n6часов танцев\nХватит на 2 недели`}
        purchaseLink="#"
      />
    </Main>
  )
}

export default PricingPage

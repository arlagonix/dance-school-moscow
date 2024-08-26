import Breadcrumbs from '@/components/Breadcrumbs'
import ClassSignUp from '@/components/ClassSignUp'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import P from '@/components/P'
import PriceCard from '@/components/PriceCard'
import { Fragment } from 'react'
import { pricingData } from './pricingData'

const PricingPage = () => {
  return (
    <Main>
      <H1>Стоимость занятий</H1>
      <Breadcrumbs
        breadcrumbsData={[
          {
            title: 'Главная',
            link: '/',
          },
          {
            title: 'Стоимость занятий',
          },
        ]}
      />
      <ClassSignUp
        description="Пока ты думаешь, другие пробуют и у них получается. И у тебя получится!"
        isIncludeContract
      />
      {pricingData.map((pricingGroup) => (
        <section key={pricingGroup.id} className="mt-16">
          {pricingGroup.title !== undefined && <H2>{pricingGroup.title}</H2>}
          {pricingGroup.description !== undefined && (
            <>
              {typeof pricingGroup.description === 'string' && (
                <P className="text-center text-neutral-500">
                  {pricingGroup.description}
                </P>
              )}
              {Array.isArray(pricingGroup.description) && (
                <P className="text-center text-neutral-500">
                  {pricingGroup.description.map((item, index, arr) => (
                    <Fragment key={index}>
                      {item}
                      {index !== arr.length - 1 && <br />}
                    </Fragment>
                  ))}
                </P>
              )}
            </>
          )}
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {pricingGroup.items.map((pricingCard) => (
              <PriceCard
                key={pricingCard.title}
                title={pricingCard.title}
                subtitle={pricingCard.subtitle}
                price={pricingCard.price}
                priceTiming={pricingCard.priceTiming}
                badPrice={pricingCard.badPrice}
                avgPricePerClass={pricingCard.avgPricePerClass}
                avgPricePerClassUnits={pricingCard.avgPricePerClassUnits}
                description={pricingCard.description}
                purchaseLink={pricingCard.purchaseLink}
              />
            ))}
          </div>
        </section>
      ))}
    </Main>
  )
}

export default PricingPage

import Breadcrumbs from '@/components/Breadcrumbs'
import ClassSignUp from '@/components/ClassSignUp'
import FadeInWrapper from '@/components/FadeInWrapper'
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
      <FadeInWrapper>
        <H1>Стоимость занятий</H1>
      </FadeInWrapper>
      <FadeInWrapper>
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
      </FadeInWrapper>
      <FadeInWrapper>
        <ClassSignUp
          description="Пока ты думаешь, другие пробуют и у них получается. И у тебя получится!"
          isIncludeContract
        />
      </FadeInWrapper>
      {pricingData.map((pricingGroup) => (
        <FadeInWrapper key={pricingGroup.id}>
          <section className="mt-16">
            {pricingGroup.title !== undefined && (
              <FadeInWrapper>
                <H2>{pricingGroup.title}</H2>
              </FadeInWrapper>
            )}
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
                <FadeInWrapper
                  key={`${pricingCard.title}-${pricingCard.subtitle}`}
                  className="max-w-[360px] flex-1 basis-[360px]"
                >
                  <PriceCard
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
                </FadeInWrapper>
              ))}
            </div>
          </section>
        </FadeInWrapper>
      ))}
    </Main>
  )
}

export default PricingPage

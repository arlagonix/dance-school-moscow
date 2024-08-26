import Breadcrumbs from '@/components/Breadcrumbs'
import Card from '@/components/Card'
import CardsWrapper from '@/components/CardsWrapper'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import Section from '@/components/Section'
import { buttonVariants } from '@/components/ui/button'
import { roomRentData } from '@/data/rent'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import Markdown from 'react-markdown'

const RentPage = () => {
  return (
    <Main>
      <H1>Аренда залов</H1>
      <Breadcrumbs
        breadcrumbsData={[
          {
            title: 'Главная',
            link: '/',
          },
          {
            title: 'Аренда залов',
          },
        ]}
      />
      <Section>
        <H2>Зона ожидания Неизбежности</H2>
        <Image
          src="/rooms/purgatory.jpg"
          width={807}
          height={580}
          alt="Зал ожидания"
          className="mt-6 h-auto w-full select-none"
          draggable={false}
        />
        <Markdown className="prose mt-4">
          {`
**Удобное расположение**: Шаговая доступность от 3х станций метро: Достоевская, Марьина Роща, Менделеевская.

Все залы оборудованы:
* Мощной системой вентиляции и кондиционерами
* Зеркалами
* Музыкальными системами
* Половым покрытиеем - ламинатом
* Ковриками и блоками для йоги и растяжки

В школе танцев раздельные раздевалки с душами и ячейками для одежды (без замков), уютная зона ожидания занятий, кулер с горячей и холодной водой.

Также есть 5 мужских и 5 женских туалетов.
`}
        </Markdown>
      </Section>
      {roomRentData.map((room) => (
        <Section key={room.title}>
          <H2>{room.title}</H2>
          <Image
            src={room.imgSrc}
            width={807}
            height={580}
            alt={room.title}
            className="mt-6 h-auto w-full select-none"
            draggable={false}
          />
          <CardsWrapper>
            <Card
              title={`${room.square} м²`}
              description="Площадь"
              customStyles="mobile:max-w-[100%] mobile:basis-[100%]"
            />
            <Card
              title={`${room.pricePerHour} ₽/час`}
              description="Стоимость"
              customStyles="mobile:max-w-[100%] mobile:basis-[100%]"
            />
            <Card
              title={room.availability}
              description="Когда аренда доступна"
              customStyles="mobile:max-w-[100%] mobile:basis-[100%]"
            />
          </CardsWrapper>
          <div className="flex justify-center">
            <Link
              href={room.rentURL}
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'mt-6 mobile:w-full'
              )}
            >
              Забронировать зал
            </Link>
          </div>
        </Section>
      ))}
    </Main>
  )
}

export default RentPage

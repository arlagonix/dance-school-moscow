import Breadcrumbs from '@/components/Breadcrumbs'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import Main from '@/components/Main'
import Section from '@/components/Section'
import Markdown from 'react-markdown'

const LocationPage = () => {
  return (
    <Main>
      <H1>Как нас найти</H1>
      <Breadcrumbs
        breadcrumbsData={[
          {
            title: 'Главная',
            link: '/',
          },
          {
            title: 'Как нас найти',
          },
        ]}
      />
      <Section>
        <H2>Наш адрес</H2>
        <p className="pt-6 text-center text-xl font-medium">
          г. Москва, ул. Образцова, д. 14
        </p>
        <p className="pt-6 text-center text-base">
          Ближайшие станции метро:
          <br />
          м. Марьина Роща, м. Достоевская, м. Менделеевская
        </p>
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: `
  <div style="position:relative;overflow:hidden;width:100%">
    <a href="https://yandex.ru/maps/org/d_a_n_c_e_/32023171130/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">D. A. N. C. E.</a>

    <a href="https://yandex.ru/maps/213/moscow/category/dance_school/184105924/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Школа танцев в Москве</a>

    <a href="https://yandex.ru/maps/213/moscow/category/children_developmental_center/184107204/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Центр развития ребёнка в Москве</a>
    
    <iframe src="https://yandex.ru/map-widget/v1/?ll=37.610733%2C55.787751&mode=routes&oid=32023171130&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJZVJDG4CN%2Fz8RY%2B%2FFF%2B1x5D8iBgABAgMEBSgKOABAr5IHSAFiHnJlbGV2X3NlcnZpY2VfYXJlYV9wZXJjZW50PTEwMGoCcnWdAc3MTD2gAQCoAQC9AeicKXPCAQW6oOuld4ICFdGI0LrQvtC70LAgRC5BLk4uQy5FLooCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=37.610733%2C55.787751&sspn=0.006706%2C0.002171&text=%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%20D.A.N.C.E.&z=18.2" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;width:100%;height:auto;aspect-ratio:1/1"></iframe>
  </div>
  `,
          }}
        />
        <Markdown className="prose mt-4 w-full">
          {`
**ВХОД №1 с пер. Октябрьский**  
Заходите в бизнес-центр справа от Ветклиники (БЛОК 7), далее в чёрную дверь налево, вверх по лестнице и еще раз налево до конца коридора по указателям к Школе танцев
D.A.N.C.E. (помещение 337)

**ВХОД №2 с ул. Образцова**  
Заходите в бизнес-центр через проходную между кофейней и воротами. Далее идёте мимо охраны прямо, через внутренний двор прямо до конца, и далее в чёрную дверь под козырьком. Поднимаетесь по лестнице на 2-й этаж и направо по указателям к Школе танцев D.A.N.C.E. (помещение 337)
`}
        </Markdown>
      </Section>
      <Section>
        <H2>От метро Достоевская</H2>
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: `
              <div style="position:relative;overflow:hidden;">
                <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a>
                
                <a href="https://yandex.ru/maps/213/moscow/?ll=37.614531%2C55.784225&mode=routes&rtext=55.781210%2C37.613386~55.787804%2C37.609685&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9858812~ymapsbm1%3A%2F%2Forg%3Foid%3D32023171130&utm_medium=mapframe&utm_source=maps&z=16.59" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты</a>
                
                <iframe src="https://yandex.ru/map-widget/v1/?ll=37.614531%2C55.784225&mode=routes&rtext=55.781210%2C37.613386~55.787804%2C37.609685&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9858812~ymapsbm1%3A%2F%2Forg%3Foid%3D32023171130&z=16.59" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;width:100%;height:auto;aspect-ratio:1/1"></iframe>
              </div>
            `,
          }}
        />
      </Section>
      <Section>
        <H2>От метро Марьина Роща</H2>
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: `
              <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a><a href="https://yandex.ru/maps/213/moscow/?ll=37.613356%2C55.790829&mode=routes&rtext=55.793854%2C37.617059~55.787804%2C37.609685&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9858848~ymapsbm1%3A%2F%2Forg%3Foid%3D32023171130&utm_medium=mapframe&utm_source=maps&z=16.72" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=37.613356%2C55.790829&mode=routes&rtext=55.793854%2C37.617059~55.787804%2C37.609685&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9858848~ymapsbm1%3A%2F%2Forg%3Foid%3D32023171130&z=16.72" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;width:100%;height:auto;aspect-ratio:1/1"></iframe></div>
            `,
          }}
        />
      </Section>
      <Section>
        <H2>От метро Менделеевская</H2>
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: `
              <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a><a href="https://yandex.ru/maps/213/moscow/?ll=37.604315%2C55.784337&mode=routes&rtext=55.781821%2C37.598696~55.787804%2C37.609685&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9858853~ymapsbm1%3A%2F%2Forg%3Foid%3D32023171130&utm_medium=mapframe&utm_source=maps&z=16.76" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=37.604315%2C55.784337&mode=routes&rtext=55.781821%2C37.598696~55.787804%2C37.609685&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9858853~ymapsbm1%3A%2F%2Forg%3Foid%3D32023171130&z=16.76" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;width:100%;height:auto;aspect-ratio:1/1"></iframe></div>
            `,
          }}
        />
      </Section>
    </Main>
  )
}

export default LocationPage

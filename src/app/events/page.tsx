import Breadcrumbs from '@/components/Breadcrumbs'
import EventCard from '@/components/EventCard'
import H1 from '@/components/H1'
import Main from '@/components/Main'
import { eventsData } from '@/data/events'

const EventsPage = () => {
  return (
    <Main>
      <H1>Мероприятия</H1>
      <Breadcrumbs
        breadcrumbsData={[
          {
            id: 1,
            title: 'Главная',
            link: '/',
          },
          {
            id: 2,
            title: 'Мероприятия',
          },
        ]}
      />
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {eventsData.map((item) => (
          <EventCard
            key={`${item.title}${item.subtitle}`}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            link={item.link}
            buttonText={item.buttonText}
          />
        ))}
      </div>
    </Main>
  )
}

export default EventsPage

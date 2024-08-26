import Breadcrumbs from '@/components/Breadcrumbs'
import CardsWrapper from '@/components/CardsWrapper'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import ImagesCarousel from '@/components/ImagesCarousel'
import Main from '@/components/Main'
import Section from '@/components/Section'
import SocialMediaCard from '@/components/SocialMediaCard'
import VideoCarousel from '@/components/VideoCarousel'

const AboutPage = () => {
  return (
    <Main>
      <H1>О школе</H1>
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
        <H2>Наши соцсети</H2>
        <CardsWrapper>
          <SocialMediaCard
            id="danceschool.moscow"
            type="vk"
            url="https://vk.com/danceschool.moscow"
            customName="Группа VK"
          />
          <SocialMediaCard
            id="danceschool.moscow"
            type="youtube"
            url="https://www.youtube.com/@danceschool.moscow"
            customName="YouTube канал"
          />
          <SocialMediaCard
            id="danceschool_mos"
            type="telegram"
            url="https://t.me/danceschool_mos"
            customName="Telegram канал"
          />
        </CardsWrapper>
      </Section>
      <Section>
        <H2>Фото</H2>
        <ImagesCarousel
          photos={[
            '/photos/-_YWs2Q9tJA.jpg',
            '/photos/-NU7Px0qXJU.jpg',
            '/photos/9eptadWOZ-c.jpg',
            '/photos/780Rmk9KKV0.jpg',
            '/photos/czpoYcRBJtg.jpg',
            '/photos/dOUFPYywNag.jpg',
            '/photos/Hb9qZP0Tr_M.jpg',
            '/photos/hPeM4qQ4gy0.jpg',
            '/photos/HV62MtzdU_w.jpg',
            '/photos/iMOVQVRF92g.jpg',
            '/photos/IQZPjoFq9aM.jpg',
            '/photos/jmali6u0bJw.jpg',
            '/photos/jOpZQ120LjQ.jpg',
            '/photos/Kd5XMX8f844.jpg',
            '/photos/kkq3ZS_CfWE.jpg',
            '/photos/l-izZMXMbZk.jpg',
            '/photos/lS12QIdTtOA.jpg',
            '/photos/nNowGlIU-M8.jpg',
            '/photos/o-LvbzM5FIc.jpg',
            '/photos/o9yCU3l4tCw.jpg',
            '/photos/P4e_lR1bZmg.jpg',
            '/photos/qSaHOpe_wbw.jpg',
            '/photos/Sh2jx3RzSqE.jpg',
            '/photos/SHXir-s-jVs.jpg',
            '/photos/tZKQFAcoads.jpg',
          ]}
        />
      </Section>
      <Section>
        <H2>Видео</H2>
        <VideoCarousel
          videos={[
            'https://vk.com/video-2549609_456241612',
            'https://vk.com/video-2549609_456239114',
          ]}
        />
      </Section>
    </Main>
  )
}

export default AboutPage

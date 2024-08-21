import { SVGProps } from 'react'

import CampIcon from '@/components/svg/icons_big/camp.svg'
import CheckmarkIcon from '@/components/svg/icons_big/checkmark.svg'
import ClocksIcon from '@/components/svg/icons_big/clocks.svg'
import GraphIcon from '@/components/svg/icons_big/graph.svg'
import GraphGrowIcon from '@/components/svg/icons_big/graph_grow.svg'
import HeartIcon from '@/components/svg/icons_big/heart.svg'
import MelodyIcon from '@/components/svg/icons_big/melody.svg'
import StarIcon from '@/components/svg/icons_big/star.svg'
import StarInMarkIcon from '@/components/svg/icons_big/star_in_mark.svg'

type ImageCardType = {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

const cardProps: SVGProps<SVGElement> = {
  width: 64,
  height: 64,
}

export const whyUsData: ImageCardType[] = [
  {
    id: '1',
    title: 'Учим танцевать более 7 лет',
    description:
      'Наша школа - одна из ведущих школ Москвы по обучению хастлу.  Наши ученики- призеры и победители международных, всероссийских и московских конкурсов по хастлу и дискофоксу.',
    icon: <GraphIcon {...cardProps} />,
  },
  {
    id: '2',
    title: 'Звездный тренерский состав',
    description:
      'Все наши тренера - топовые танцоры хастла и победители различных турниров. У нас преподают: Чемпион Мира по хастлу, а так же Чемпионы России по хастлу и дискофоксу.',
    icon: <StarIcon {...cardProps} />,
  },
  {
    id: '6',
    title: 'Можно приходить одному',
    description:
      'Многие ученики приходят на занятия по одному. На занятии ты будешь учиться танцевать с разными партнерами - стоять не придется! В случае нехватки партнеров или партнерш, мы приглашаем учеников из более старших групп.',
    icon: <CheckmarkIcon {...cardProps} />,
  },
  {
    id: '4',
    title: 'Занятия всегда ведёт пара',
    description:
      'В  D.A.N.C.E. занятия всегда ведут 2 преподавателя. Мужчина показывает мужскую партию, а девушка-женскую.',
    icon: <MelodyIcon {...cardProps} />,
  },

  {
    id: '3',
    title: 'Крутые залы в центре Москвы',
    description:
      'Мы не берем в почасовую аренду залы других школ. У нас собственные классные залы с высокими потолками, уютной зоной отдыха, раздельными раздевалками с душем, бесплатной водой и чаем для гостей школы.',
    icon: <StarInMarkIcon {...cardProps} />,
  },
  {
    id: '5',
    title: 'Группа длится 1.5 часа',
    description:
      'Мы не экономим на качестве твоего обучения, сокращая длительность уроков. Длительность занятий в формате интенсива составляет 2,5 часа (ведь ты же не будешь разминаться дважды:))',
    icon: <ClocksIcon {...cardProps} />,
  },
  {
    id: '7',
    title: 'Крутая методика обучения',
    description:
      'Вся программа обучения выстроена так, чтобы ты смог танцевать уже после 1 занятия, а после курса начинающих - свободно ходить на дискотеки!',
    icon: <GraphGrowIcon {...cardProps} />,
  },
  {
    id: '8',
    title: 'Любой возраст',
    description:
      'Средний возраст наших учеников 20-35 лет. У нас тренируются как студенты, так и люди более солидного возраста и все чувствуют себя комфортно!',
    icon: <HeartIcon {...cardProps} />,
  },
  {
    id: '9',
    title: 'Выезды, конкурсы, дискотеки',
    description:
      'Тебя ждет много новых знакомств, гитарники и вечеринки, выезды на природу и совместные походы в театры, дискотеки и даже соревнования!',
    icon: <CampIcon {...cardProps} />,
  },
]

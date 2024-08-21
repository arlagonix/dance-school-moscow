import ClassSignUp from '@/components/ClassSignUp'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import ImageCard from '@/components/ImageCard'
import LinkCard from '@/components/LinkCard'
import Main from '@/components/Main'
import P from '@/components/P'
import Section from '@/components/Section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { questionsData } from '@/data/faq'
import { linkCardsData } from '@/data/linkCards'
import { whyUsData } from '@/data/whyUs'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <Main>
        <H1>D.A.N.C.E. School</H1>
        <p className="mt-4 text-center text-neutral-500">
          Мы учим танцевать в паре
        </p>
        <ClassSignUp />
        <Section>
          <H2>Кто мы?</H2>
          <P>
            D.A.N.C.E. - это школа танцев для взрослых, в которой обучают хастлу
            и дискофоксу. У нас есть и группы для детей. Хастл - это парный
            социальный танец, который основан на взаимодействии и импровизации.
            Он не требует особых физических данных и подходит для людей любого
            возраста. Дискофокс - это разновидность хастла. Текст такой себе, на
            троечку, надо бы получше что-то придумать.
          </P>
          <Image
            src="/main.jpg"
            width={2560}
            height={1600}
            alt="Люди, которые вместе создают школу D.A.N.C.E"
            className="mt-4 h-auto w-full rounded-lg object-cover"
            draggable={false}
          />
        </Section>
        <Section>
          <H2>Почему мы?</H2>
          <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-8">
            {whyUsData.map((item) => (
              <ImageCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          {/* <div className="mt-6 flex flex-col gap-4">
            <Alert>
              <div>
                <GraphIcon width={64} height={64} />
              </div>
              <AlertTitle>Учим танцевать более 7 лет</AlertTitle>
              <AlertDescription>
                Наша школа - одна из ведущих школ Москвы по обучению хастлу.
                Наши ученики- призеры и победители международных, всероссийских
                и московских конкурсов по хастлу и дискофоксу.
              </AlertDescription>
            </Alert>
            <Alert>
              <TelegramIcon width={16} height={16} />
              <AlertTitle>Звездный тренерский состав</AlertTitle>
              <AlertDescription>
                Все наши тренера - топовые танцоры хастла и победители различных
                турниров. У нас преподают: Чемпион Мира по хастлу, а так же
                Чемпионы России по хастлу и дискофоксу.
              </AlertDescription>
            </Alert>
          </div> */}
        </Section>
        <Section>
          <H2>Полезная информация</H2>
          <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-8">
            {linkCardsData.map((item) => (
              <LinkCard
                key={item.id}
                href={item.href}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Section>
        <Section>
          <H2>Ответы на вопросы</H2>
          <Accordion type="single" collapsible className="mt-6">
            {questionsData.map((item) => (
              <AccordionItem value={`item-${item.id}`} key={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      </Main>
    </>
  )
}

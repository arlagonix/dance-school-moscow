import H2 from "@/components/H2";
import Menu from "@/components/Menu";
import P from "@/components/P";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { SVGProps } from "react";

import MoneyBagIcon from "@/components/svg/icons_big/money_bag.svg";
import CalendarIcon from "@/components/svg/icons_big/calendar.svg";
import ScholarIcon from "@/components/svg/icons_big/scholar.svg";
import ReviewIcon from "@/components/svg/icons_big/review.svg";
import DollarIcon from "@/components/svg/icons_big/dollar.svg";
import ScholarHatIcon from "@/components/svg/icons_big/scholar_hat.svg";
import PirateMapIcon from "@/components/svg/icons_big/pirate_map.svg";
import H3 from "@/components/H3";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

type LinkCardType = {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const linkCardProps: SVGProps<SVGElement> = {
  width: 64,
  height: 64,
};

const linkCardsData: LinkCardType[] = [
  {
    id: 1,
    title: "Стоимость занятий",
    description: "Абонементы на посещение занятий, способы оплаты, акции",
    href: "#",
    icon: <MoneyBagIcon {...linkCardProps} />,
  },
  {
    id: 2,
    title: "Расписание занятий",
    description:
      "Здесь вы узнаете, какие у нас есть виды занятий и сможете подобрать те, которые наиболее подойдут вашим навыкам и графику",
    href: "#",
    icon: <CalendarIcon {...linkCardProps} />,
  },
  {
    id: 3,
    title: "Преподаватели",
    description:
      "Здесь вы узнаете, кто преподает в нашей школе, и сможете найти того, с кем вам будет наиболее комфортно заниматься.",
    href: "#",
    icon: <ScholarIcon {...linkCardProps} />,
  },
  {
    id: 4,
    title: "Отзывы",
    description:
      "Здесь вы узнаете, что о нас думают люди, которые занимаются или раньше занимались в нашей школе.",
    href: "#",
    icon: <ReviewIcon {...linkCardProps} />,
  },
  {
    id: 5,
    title: "Аренда залов",
    description:
      "Информация о доступных залах, когда можно арендовать, стоимость аренды, с кем связаться по деталям аренды",
    href: "#",
    icon: <DollarIcon {...linkCardProps} />,
  },
  {
    id: 6,
    title: "О школе",
    description:
      "Здесь вы узнаете, чем живет школа, сможете посмотреть на кадры с наших занятий, выступления наших учеников, фото и видео с наших мероприятий.",
    href: "#",
    icon: <ScholarHatIcon {...linkCardProps} />,
  },
  {
    id: 7,
    title: "Как нас найти",
    description:
      "Наш адрес и как добраться до нас от ближайших станций метро. Есть даже видео путь!",
    href: "#",
    icon: <PirateMapIcon {...linkCardProps} />,
  },
];

type QuestionType = {
  id: number;
  question: string;
  answer: string;
};

const questionsData: QuestionType[] = [
  {
    id: 1,
    question: "Что такое хастл?",
    answer:
      "Парный социальный танец, который основан на взаимодействии и импровизации.",
  },
  {
    id: 2,
    question: "У меня получится?",
    answer:
      "Хастл очень прост в изучении, так как не требует специальной подготовки и особых физических возможностей.",
  },
  {
    id: 3,
    question: "Что делать, если я без пары?",
    answer:
      "Во время занятия происходит постоянная смена пар, поэтому партнер / партнерша найдется для всех.",
  },
  {
    id: 4,
    question: "В чем приходить на занятие?",
    answer:
      "Любая удобная спортивная или повседневная одежда, которая не сковывает движения, и сменная обувь на мягкой подошве.",
  },
  {
    id: 5,
    question: "Под какую музыку танцуют?",
    answer:
      "Поп, RnB, хип-хоп, электро, диско, джаз, латино, даже рок и классика - в хастле практически нет музыкальных границ.",
  },
  {
    id: 6,
    question: "Где танцуют?",
    answer:
      "Хастл - дискотеки проходят со вторника по воскресенье в клубах Москвы, а летом на набережной в Нескучном саду.",
  },
];

export default function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-screen-md relative my-16">
        <Menu />
        <h1 className="text-center text-5xl font-extrabold">
          D.A.N.C.E. School
        </h1>
        <p className="text-center text-neutral-500 mt-4">
          Мы учим танцевать в паре
        </p>
        <div className="flex flex-col gap-4 mt-16">
          <p className="text-center">
            Начни танцевать хастл бесплатно: запишись на бесплатный пробный урок
          </p>
          <form className="flex gap-4">
            <Input className="bg-white" placeholder="Телефон *" />
            <Input className="bg-white" placeholder="Имя и Фамилия" />
            <Button>Хочу танцевать</Button>
          </form>
          <Link
            href="#"
            className="text-center text-neutral-500 text-sm underline self-center"
          >
            Политика конфиденциальности
          </Link>
        </div>
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
            className="mt-4 w-full h-auto object-cover rounded-lg"
            draggable={false}
          />
        </Section>
        <Section>
          <H2>Полезная информация</H2>
          <div className="grid gap-8 grid-cols-2 mt-6">
            {linkCardsData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="p-6 bg-white rounded-2xl border border-neutral-300 flex flex-col gap-4 drop-shadow hover:bg-slate-50 hover:drop-shadow-xl transition group"
              >
                {item.icon}
                <H3 className="group-hover:underline">{item.title}</H3>
                <p className="leading-7 text-neutral-500">{item.description}</p>
              </Link>
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
        <Footer />
      </main>
    </>
  );
}

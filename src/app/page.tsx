import Image from "next/image";
import Link from "next/link";

import HomeIcon from "@/components/svg/home.svg";
import DollarIcon from "@/components/svg/dollar-sign.svg";
import CalendarClockIcon from "@/components/svg/calendar-clock.svg";
import UsersIcon from "@/components/svg/users.svg";
import SmileIcon from "@/components/svg/smile.svg";
import InfoIcon from "@/components/svg/info.svg";
import PartyIcon from "@/components/svg/party.svg";
import MapIcon from "@/components/svg/map.svg";
import PhoneIcon from "@/components/svg/phone-call.svg";
import MailIcon from "@/components/svg/mail.svg";
import VkIcon from "@/components/svg/vk.svg";
import ClockIcon from "@/components/svg/clock.svg";

import { SVGProps } from "react";

type HeaderType = {
  id: number;
  name: string;
  icon?: React.ReactNode;
};

// I just wanna reuse the code. Don't wanna repeat it 10 times
const menuIconProps: SVGProps<SVGElement> = {
  className: "text-neutral-900",
  width: 16,
  height: 16,
};
const infoSectionIconProps: SVGProps<SVGElement> = {
  className: "text-neutral-500",
  width: 16,
  height: 16,
};

const headerData: HeaderType[] = [
  {
    id: 1,
    name: "Главная",
    icon: <HomeIcon {...menuIconProps} />,
  },
  {
    id: 2,
    name: "Стоимость занятий",
    icon: <DollarIcon {...menuIconProps} />,
  },
  {
    id: 3,
    name: "Расписание",
    icon: <CalendarClockIcon {...menuIconProps} />,
  },
  {
    id: 4,
    name: "Преподаватели",
    icon: <UsersIcon {...menuIconProps} />,
  },
  {
    id: 5,
    name: "Отзывы",
    icon: <SmileIcon {...menuIconProps} />,
  },
  {
    id: 6,
    name: "Аренда залов",
    icon: <DollarIcon {...menuIconProps} />,
  },
  {
    id: 7,
    name: "О школе",
    icon: <InfoIcon {...menuIconProps} />,
  },
  {
    id: 8,
    name: "Мероприятия",
    icon: <PartyIcon {...menuIconProps} />,
  },
  {
    id: 9,
    name: "Как нас найти",
    icon: <MapIcon {...menuIconProps} />,
  },
];

export default function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-screen-md relative mt-6">
        <nav className="absolute left-[-16rem]">
          <div>
            <Link href="/">
              <Image
                src="/dance_logo.png"
                width={126}
                height={64}
                alt="Логотип школы D.A.N.C.E."
                draggable={false}
              />
            </Link>
            <p className="mt-2 text-sm">
              <strong className="font-normal text-neutral-500">
                <span className="font-bold text-red-400">D</span>o the{" "}
                <span className="font-bold">A</span>rt a
                <span className="font-bold text-orange-400">N</span>d{" "}
                <span className="font-bold text-green-500">C</span>reate{" "}
                <span className="font-bold text-blue-400">E</span>motions
              </strong>
            </p>
          </div>
          <ul className="mt-8">
            {headerData.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="flex items-center gap-2 p-2 translate-x-[-0.5rem] hover:bg-slate-200 rounded-lg transition-colors group"
                >
                  {item.icon}
                  <p className="group-hover:underline">{item.name}</p>
                </a>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <ul className="text-neutral-500 flex flex-col">
            <li>
              <Link
                href="tel:+74992837793"
                className="flex items-center gap-2 py-2"
              >
                <PhoneIcon {...infoSectionIconProps} />
                <p className="font-semibold underline">+7 499 283-77-93</p>
              </Link>
            </li>
            <li>
              <Link
                href="https://yandex.ru/maps/213/moscow/house/ulitsa_obraztsova_14/Z04YcAZgSEcCQFtvfXt5dnVjZg==/?ll=37.610126%2C55.787903&z=17.23"
                className="flex items-center gap-2 py-2"
              >
                <MapIcon {...infoSectionIconProps} />
                <p className="font-semibold underline ">ул. Образцова, д. 14</p>
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className="text-center text-5xl font-extrabold">
          D.A.N.C.E. School
        </h1>
        <p className="text-center text-neutral-500 mt-4">
          Мы учим танцевать в паре
        </p>
      </main>
    </>
  );
}

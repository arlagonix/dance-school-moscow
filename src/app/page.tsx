import Image from "next/image";

type HeaderType = {
  id: number;
  name: string;
  iconSrc: string;
};

const headerData: HeaderType[] = [
  {
    id: 1,
    name: "Главная",
    iconSrc: "/icons_16px/home.svg",
  },
  {
    id: 2,
    name: "Стоимость занятий",
    iconSrc: "/icons_16px/dollar-sign.svg",
  },
  {
    id: 3,
    name: "Расписание",
    iconSrc: "/icons_16px/calendar-clock.svg",
  },
  {
    id: 4,
    name: "Преподаватели",
    iconSrc: "/icons_16px/users.svg",
  },
  {
    id: 5,
    name: "Отзывы",
    iconSrc: "/icons_16px/smile.svg",
  },
  {
    id: 6,
    name: "Аренда залов",
    iconSrc: "/icons_16px/dollar-sign.svg",
  },
  {
    id: 7,
    name: "О школе",
    iconSrc: "/icons_16px/info.svg",
  },
  {
    id: 8,
    name: "Мероприятия",
    iconSrc: "/icons_16px/party.svg",
  },
  {
    id: 9,
    name: "Как нас найти",
    iconSrc: "/icons_16px/map.svg",
  },
];

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-screen-md relative mt-6">
        <nav className="absolute left-[-16rem]">
          <div>
            <Image
              src="/dance_logo.png"
              width={126}
              height={64}
              alt="Логотип школы D.A.N.C.E."
              draggable={false}
            />
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
                  <Image src={item.iconSrc} width={16} height={16} alt="" />
                  <p className="group-hover:underline">{item.name}</p>
                </a>
              </li>
            ))}
          </ul>
          <hr className="my-" />
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

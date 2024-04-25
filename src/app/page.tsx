type HeaderType = {
  id: number;
  name: string;
};

const headerData: HeaderType[] = [
  {
    id: 1,
    name: "Главная",
  },
  {
    id: 2,
    name: "Стоимость занятий",
  },
  {
    id: 3,
    name: "Расписание",
  },
  {
    id: 4,
    name: "Преподаватели",
  },
  {
    id: 5,
    name: "Отзывы",
  },
  {
    id: 6,
    name: "Аренда залов",
  },
  {
    id: 7,
    name: "О школе",
  },
  {
    id: 8,
    name: "Мероприятия",
  },
  {
    id: 8,
    name: "Как нас найти",
  },
];

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-screen-md relative mt-6">
        <header className="absolute left-[-16rem]">
          <div>Logo</div>
          <ul>
            {headerData.map((item) => (
              <li key={item.id}>
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        </header>
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

"use client";

import PeopleSection from "@/components/ui/PeopleSection";
import Image from "next/image";

const tutors = [
  {
    src: "/images/team/Andre.png",
    name: "Андрей Охонько",
    descriptor: "руководитель направления «Дизайн»",
    hoverText: "Лучше ответственное неделание, чем безответственное делание",
  },
  {
    src: "/images/team/Max.png",
    name: "Максим Тизенгаузен",
    descriptor: "руководитель направления «Медиа»",
    hoverText:
      "Ты что, не знаешь главный закон физики? Всё прикольное стоит минимум восемь баксов",
  },
  {
    src: "/images/team/Zahar.png",
    name: "Захар Авсаджанов",
    descriptor: "руководитель направления «Моушн-дизайн»",
    hoverText: "Сложно – не значит невозможно. Сложно  – значит просто сложно",
  },
] as const;

const supports = [
  {
    src: "/images/team/Daniil.png",
    name: "Даниил Слезавин",
    hoverText: "Категорически всех приветствую",
  },
  {
    src: "/images/team/Anna.png",
    name: "Анна Егазарян",
    hoverText: "Если смысла нет, выдумай его",
  },
  {
    src: "/images/team/Margo.png",
    name: "Маргарита Гриценко",
    hoverText: "Здесь могла быть ваша реклама",
  },
  {
    src: "/images/team/Sopha.png",
    name: "София Акопян",
    hoverText: "Не копайся в себе, докапывайся до других",
  },
  {
    src: "/images/team/Lisa.png",
    name: "Елизавета Исакова",
    hoverText: "Не забудь дать дань уважения дверям",
  },
  {
    src: "/images/team/Arina.png",
    name: "Чотчаева Арина",
    hoverText: "Меня попросили здесь что-то написать",
  },
  {
    src: "/images/team/Islam.png",
    name: "Кагазежев Ислам",
    hoverText: "Дал бог Adobe - даст ист фантастиш",
  },
] as const;

export const Team = () => {
  return (
    <section className="pt-22.5">
      <h1
        className="
      absolute z-2 left-1/2 -translate-x-1/2
      lg:pt-[clamp(77px,calc(77px+(100vw-1024px)*0.1975446),254px)]
      md:pt-[clamp(20px,calc(20px+(100vw-768px)*0.1484375),77px)]
      pt-[20px]
      text-center text-title"
      >
        командос
      </h1>
      <Image
        src="/images/Team/Team.png"
        alt=""
        width={1920}
        height={1080}
        className="h-full w-full object-cover -mb-70 lg:-mb-100"
        priority
        unoptimized
      />
      <div className="mx-auto flex flex-col items-center bg-black pb-11 pt-80 lg:pt-122.5 gap-15">
        <PeopleSection
          id="team"
          className="scroll-mt-[45px]"
          title="тьюторы"
          people={tutors}
        />
        <PeopleSection title="саппорты" people={supports} />
      </div>
    </section>
  );
};

"use client";

import PeopleSection from "@/components/ui/PeopleSection";
import Image from "next/image";

const tutors = [
  {
    src: "/images/team/Andre.png",
    name: "Андрей Охонько",
    descriptor: "руководитель направления «Дизайн»",
    hoverText: "Лучше ответственное неделание,\n чем безответственное\n делание",
  },
  {
    src: "/images/team/Max.png",
    name: "Максим Тизенгаузен",
    descriptor: "руководитель направления «Медиа»",
    hoverText:
      "Ты что, не знаешь\n главный закон физики?\n Всё прикольное стоит минимум восемь баксов",
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
    src: [
      "/images/team/Daniil-1.png",
      "/images/team/Daniil-2.png",
      "/images/team/Daniil-3.png",
    ],
    name: "Даниил Слезавин",
    hoverText: "Категорически всех приветствую",
  },
  {
    src: [
      "/images/team/Margo-1.png",
      "/images/team/Margo-2.png",
      "/images/team/Margo-3.png",
    ],
    name: "Маргарита Гриценко",
    hoverText: "Здесь могла быть\n ваша реклама",
  },
  {
    src: [
      "/images/team/Sopha-1.png",
      "/images/team/Sopha-2.png",
      "/images/team/Sopha-3.png",
    ],
    name: "София Акопян",
    hoverText: "Не копайся в себе, докапывайся до других",
  },
  {
    src: [
      "/images/team/Arina-1.png",
      "/images/team/Arina-2.png",
      "/images/team/Arina-3.png",
    ],
    name: "Чотчаева Арина",
    hoverText: "Меня попросили здесь\n что-то написать",
  },
  {
    src: [
      "/images/team/Islam-1.png",
      "/images/team/Islam-2.png",
      "/images/team/Islam-3.png",
    ],
    name: "Кагазежев Ислам",
    hoverText: "Убери, я ничего не вижу",
  },
  // {
  //   src: "/images/team/Islam.png",
  //   name: "Варвара Долгорук",
  //   hoverText: "Лучше иметь друга\n чем друг друга",
  // },
] as const;

export const Team = () => {
  return (
    <section className="pt-22.5">
      <h1
        className="
      absolute z-2 left-1/2 box-border max-w-full -translate-x-1/2 px-4
      lg:pt-[clamp(77px,calc(77px+(100vw-1024px)*0.1975446),254px)]
      md:pt-[clamp(20px,calc(20px+(100vw-768px)*0.1484375),77px)]
      pt-[20px]
      text-title text-center text-[clamp(2.5rem,11vw,9.375rem)] leading-[0.95]"
      >
        командос
      </h1>
      <Image
        src="/images/Team/Team.png"
        alt=""
        width={1920}
        height={1080}
        className="h-full w-full max-w-none object-cover -mb-30 sm:-mb-100"
        priority
        unoptimized
      />
      <div className="mx-auto flex flex-col items-center bg-black pb-11 pt-50 sm:pt-122.5 gap-15">
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

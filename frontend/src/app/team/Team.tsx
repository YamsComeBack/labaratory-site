"use client";

import { useState, useEffect } from "react";
import PeopleSection from "@/components/ui/PeopleSection";
import Image from "next/image";

const tutors = [
  {
    src: [
      "/images/team/Andrey-1.webp",
      "/images/team/Andrey-2.webp",
      "/images/team/Andrey-3.webp"
    ],
    name: "Андрей Охонько",
    descriptor: "руководитель направления «Дизайн»",
    hoverText: "Лучше ответственное неделание,\n чем безответственное\n делание",
  },
  {
    src: [
      "/images/team/Maxim-1.webp",
      "/images/team/Maxim-2.webp",
      "/images/team/Maxim-3.webp"
    ],
    name: "Максим Тизенгаузен",
    descriptor: "руководитель направления «Медиа»",
    hoverText:
      "Внимание,\n спасибо за внимание!",
  },
  {
    src: [
      "/images/team/Shamil-1.webp",
      "/images/team/Shamil-2.webp",
      "/images/team/Shamil-3.webp"
    ],
    name: "Шамиль Баракаев",
    descriptor: "руководитель направления «Медиа»",
    hoverText: "Одна история\n удивительнее другой",
  },
] as const;

const supports = [
  {
    src: [
      "/images/team/Daniil-1.webp",
      "/images/team/Daniil-2.webp",
      "/images/team/Daniil-3.webp",
    ],
    name: "Даниил Слезавин",
    hoverText: "Категорически всех приветствую",
  },
  {
    src: [
      "/images/team/Margo-1.webp",
      "/images/team/Margo-2.webp",
      "/images/team/Margo-3.webp",
    ],
    name: "Маргарита Гриценко",
    hoverText: "Здесь могла быть\n ваша реклама",
  },
  {
    src: [
      "/images/team/Sopha-1.webp",
      "/images/team/Sopha-2.webp",
      "/images/team/Sopha-3.webp",
    ],
    name: "София Акопян",
    hoverText: "Не копайся в себе, докапывайся\n до других",
  },
  {
    src: [
      "/images/team/Arina-1.webp",
      "/images/team/Arina-2.webp",
      "/images/team/Arina-3.webp",
    ],
    name: "Чотчаева Арина",
    hoverText: "Меня попросили здесь\n что-то написать",
  },
  {
    src: [
      "/images/team/Islam-1.webp",
      "/images/team/Islam-2.webp",
      "/images/team/Islam-3.webp",
    ],
    name: "Кагазежев Ислам",
    hoverText: "Убери, я ничего\n не вижу",
  },
  {
    src: [
      "/images/team/Arianna-1.webp",
      "/images/team/Arianna-2.webp",
    ],
    name: "Арианна Энгельгардт",
    hoverText: "В резкости",
  },
  {
    src: [
      "/images/team/Lena-1.webp",
      "/images/team/Lena-2.webp",
      "/images/team/Lena-3.webp",
    ],
    name: "Елена Воробьева",
    hoverText: "Вставай, суперзвезда,\n капитализм требует\n твоих подношений",
  },
  {
    src: [
      "/images/team/NastyaB-1.webp",
      "/images/team/NastyaB-2.webp",
      "/images/team/NastyaB-3.webp",
    ],
    name: "Анастасия Борисова",
    hoverText: "Судьба такая",
  },
  {
    src: [
      "/images/team/Rada-1.webp",
      "/images/team/Rada-2.webp",
      "/images/team/Rada-3.webp",
    ],
    name: "Рада Пашкова",
    hoverText: "график дизайн\n из май пэшн",
  },
  {
    src: [
      "/images/team/Stepan-1.webp",
      "/images/team/Stepan-2.webp",
      "/images/team/Stepan-3.webp",
    ],
    name: "Степан Гонтарь",
    hoverText: "Смысла нет,\n но вы ищите",
  },
  {
    src: [
      "/images/team/Varya-1.webp",
      "/images/team/Varya-2.webp",
      "/images/team/Varya-3.webp",
    ],
    name: "Варвара Долгорук",
    hoverText: "Лучше иметь друга\n чем друг друга",
  },
] as const;

export const Team = () => {
  const [shuffledSupports, setShuffledSupports] = useState(Array.from(supports))

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffled = Array.from(supports)
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setShuffledSupports(shuffled)
  }, [])

  return (
    <section className="bg-none">
      <h1
        className="
      absolute z-2 left-1/2 box-border max-w-full -translate-x-1/2 px-4
      pt-[5%] md:pt-[12%] lg:pt-[14%]
      text-title text-center text-[4rem] leading-[0.95]"
      >
        командос
      </h1>
      <div className="relative w-full h-[65vw] max-w-none">
        <Image
          src="/images/team/Team.webp"
          alt="Общая фотография команды"
          className="z-1 object-cover"
          fill
          priority
          unoptimized
        />
      </div>
      <div className="z-10 mt-[-30%] pt-[30%] mx-auto flex flex-col items-center bg-black pb-15 gap-15">
        <PeopleSection
          id="team"
          className="scroll-mt-11.25"
          title="тьюторы"
          people={tutors}
        />
        <PeopleSection title="саппорты" people={shuffledSupports} />
      </div>
    </section>
  );
};
